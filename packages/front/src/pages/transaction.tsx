import { useEffect, useMemo } from "react";
import {
  initNear,
  sendMoneyCall,
  initializeTokenContract,
} from "@/utils/helpers";

//url format:
// http://localhost:3000/.com/transaction?token=hack_token.testnet&amount=55&receiver=peter_pan.testnet
// http://localhost:3000/.com/transaction?token=$NEAR&amount=0.001&receiver=10tri.near

export const Transaction = () => {
  const queryParams = new URLSearchParams(window.location.search);

  const token = queryParams.get("token");
  // const burner = queryParams.get("burner");
  const amount = queryParams.get("amount");
  const receiver = queryParams.get("receiver");
  const transactionHashes = queryParams.get("transactionHashes");

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

  const text = useMemo(() => {
    return transactionHashes === null
      ? "Loading your transaction"
      : `Transaction succesful, you can close this window. \n Transaction hash: ${transactionHashes}`;
  }, [transactionHashes]);

  return <div className="App">{text}</div>;
};

export default Transaction;
