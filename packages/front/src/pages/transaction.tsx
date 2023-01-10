import { useEffect, useMemo } from "react";
import {
  initNear,
  sendMoneyCall,
  getTransactionState,
  getTransactionsAction,
  initializeTokenContract,
} from "@/utils/helpers";
import { useNearWalletSelector } from "@/utils/context/wallet";

const transactionHashes = new URLSearchParams(window.location.search).get(
  "transactionHashes"
);

//url format:
// http://localhost:3000/.com/transaction?token=hack_token.testnet&amount=55&receiver=peter_pan.testnet
// http://localhost:3000/.com/transaction?token=$NEAR&amount=0.001&receiver=10tri.near
export const Transaction = () => {
  const queryParams = new URLSearchParams(window.location.search);

  const token = queryParams.get("token");
  // const burner = queryParams.get("burner");
  const amount = queryParams.get("amount");
  const receiver = queryParams.get("receiver");

  useEffect(() => {
    (async () => {
      await initNear();

      if (transactionHashes === null) {
        if (token === "near") {
          await sendMoneyCall(receiver, amount);
        } else {
          initializeTokenContract(token, receiver, amount);
        }
      }
    })();
  });

  const { accountId } = useNearWalletSelector();

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
    })();
  }, [accountId]);

  const text = useMemo(() => {
    return transactionHashes === null
      ? "Loading your transaction"
      : `Transaction succesful, you can close this window. \n Transaction hash: ${transactionHashes}`;
  }, [transactionHashes]);

  return <div className="App">{text}</div>;
};

export default Transaction;
