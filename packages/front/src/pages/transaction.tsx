import { useEffect, useRef, useState } from "react";
import Big from "big.js";
import {
  getTransactionState,
  getTransactionsAction,
  getTransaction,
  executeMultipleTransactions,
  viewFunction,
  getTokenStorage,
  Transaction,
} from "@/utils/helpers";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { useNearWalletSelector } from "@/utils/context/wallet";
import { RobotIcon } from "@/components";

const transactionHashes = new URLSearchParams(window.location.search).get(
  "transactionHashes"
);

//url format:
// http://localhost:3000/.com/transaction?token=hack_token.testnet&amount=55&receiver=peter_pan.testnet
// http://localhost:3000/.com/transaction?token=$NEAR&amount=0.001&receiver=10tri.near
export const TransactionPage = () => {
  const [status, setStatus] = useState<any>();
  const inputCopy = useRef<HTMLInputElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const queryParams = new URLSearchParams(window.location.search);

  const token = queryParams.get("token");
  // const burner = queryParams.get("burner");
  const amount = queryParams.get("amount");
  const receiver = queryParams.get("receiver");

  const { accountId, toggleModal, connection, signOut } =
    useNearWalletSelector();

  useEffect(() => {
    if (!accountId || !transactionHashes) {
      return;
    }

    (async () => {
      const transactions = transactionHashes.split(",");

      const states: any[] = [];

      for (let i = 0; i < transactions.length; i++) {
        const state = await getTransactionState(transactions[i], accountId);
        states.push(state);
      }

      const action = getTransactionsAction(states);

      if (!action) {
        return;
      }
      setStatus(action);
    })();
  }, [accountId]);

  const handleClickProceed = async () => {
    const wallet = await connection.wallet();

    const transactions: Transaction[] = [];

    const tokenStorage = await getTokenStorage(connection, accountId, token);

    const metadata = await viewFunction(connection, token, "ft_metadata");

    const decimals = new Big(10).pow(metadata.decimals);

    if (!tokenStorage) {
      transactions.push(
        getTransaction(
          accountId!,
          token!,
          "storage_deposit",
          {
            account_id: accountId,
            registration_only: false,
          },
          "0.25"
        )
      );
    }
    transactions.push(
      getTransaction(accountId!, token!, "ft_transfer_call", {
        amount: new Big(amount!).mul(decimals).toString(),
        memo: null,
        msg: JSON.stringify({
          receiver: receiver,
          sender_discord: "",
          receiver_discord: "",
          server_discord: "",
        }),
        receiver_id: receiver,
      })
    );

    executeMultipleTransactions(transactions, wallet);
  };

  const handleClickCopy = () => {
    inputCopy.current?.select();
    inputCopy.current?.setSelectionRange(0, 99999);
    document.execCommand("copy");
    paragraphRef.current!.innerHTML = "Hash number copied to clipboard";
  };

  if (!status) {
    return (
      <div className="w-full h-[100vh] bg-graphite flex justify-center items-center">
        <div className="flex flex-col items-center md:flex-row">
          <img
            src="/images/tipping_bot_loading_page.png"
            alt="Tipping bot loading"
          />
          <div className="flex flex-col gap-3">
            <div className="flex gap-5 items-center">
              <h1 className="font-extrabold text-[2.5rem] text-white">
                Processing
              </h1>
              <div className="bg-bn-gradient w-10 h-10 rounded-[50%]" />
            </div>
            <h2 className="font-medium text-white/80 text-xl">
              Processing your sending
            </h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className={`bg-grey-100 w-[95%] max-w-[450px] h-80 ${
          status ? "hidden" : "flex"
        } flex-col items-center justify-center gap-10 mx-auto rounded-xl translate-y-3/4`}
      >
        {accountId ? (
          <>
            <RobotIcon />
            <h2 className="text-white font-semibold">
              You are logged in wallet: {accountId}
            </h2>

            <div className="flex w-[95%] justify-around mb-7">
              <button
                className="bg-gray-500 p-3 rounded-md text-white font-semibold text-sm hover:bg-gray-400 transition-colors"
                onClick={async () => {
                  if (accountId) {
                    await signOut();
                  }
                  toggleModal();
                }}
              >
                Exchange wallet
              </button>
              <button
                className="bg-azoxo p-3 rounded-md text-white font-semibold text-sm hover:bg-blue_button transition-colors"
                onClick={async () => await handleClickProceed()}
              >
                Proceed
              </button>
            </div>
          </>
        ) : (
          <>
            <RobotIcon />
            <h1 className="text-white font-semibold text-xl">
              Connect your wallet
            </h1>
            <button
              className="bg-azoxo p-3 rounded-md text-white font-semibold text-sm mb-7 hover:bg-blue_button transition-colors"
              onClick={toggleModal}
            >
              Choose wallet
            </button>
          </>
        )}
      </div>
      {status.status === "success" && (
        <div className="w-full h-[100vh] bg-graphite flex justify-center items-center">
          <div className="flex flex-col items-center md:flex-row">
            <img
              src="/images/tipping_bot_transaction_succeed.png"
              alt="Tipping bot succeed"
            />
            <div className="flex flex-col gap-3">
              <div className="flex gap-5 items-center mb-6">
                <h1 className="font-extrabold text-[2.5rem] text-white">
                  Tokens sent succesfully
                </h1>
                <CheckCircleIcon width={50} className="text-green-300" />
              </div>
              <h2 className="font-normal text-white/80 text-xl">
                Here’s your hash number :)
              </h2>
              <div className="w-full bg-lilac flex p-2 px-5 rounded-xl border-2 border-azoxo">
                <input
                  type="text"
                  className="w-full bg-transparent outline-none font-normal text-lg selection:bg-transparent"
                  value={"123456789"}
                  ref={inputCopy}
                />
                <ClipboardDocumentIcon
                  width={24}
                  className="text-azoxo cursor-pointer"
                  onClick={handleClickCopy}
                />
              </div>
              <p
                ref={paragraphRef}
                className="font-normal text-white/80 text-md"
              >
                {paragraphRef.current?.textContent}
              </p>
            </div>
          </div>
        </div>
      )}
      {status.status === "error" && (
        <div className="w-full h-[100vh] bg-graphite flex justify-center items-center">
          <div className="flex flex-col items-center md:flex-row">
            <img
              src="/images/tipping_bot_transaction_error.png"
              alt="Tipping bot error"
            />
            <div className="flex flex-col gap-3">
              <div className="flex gap-5 items-center">
                <h1 className="font-extrabold text-[2.5rem] text-white">
                  Something went wrong :(
                </h1>
              </div>
              <h2 className="font-medium text-white/80 text-xl">Error 101</h2>
              <span className="font-normal text-white/80 mt-[-10px]">
                Try again later
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TransactionPage;
