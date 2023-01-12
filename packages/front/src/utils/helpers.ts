import { utils, providers } from "near-api-js";
import { Buffer } from "buffer";

import type { CodeResult } from "near-api-js/lib/providers/provider";
import actions from "./actions";

import { WalletSelector } from "@near-wallet-selector/core";

export interface TransactionPayload {
  status: Status;
  transaction: Transaction;
  receipts_outcome: ReceiptOutcome[];
}

export interface Transaction {
  actions: Action[];
  hash: string;
  nonce: number;
  public_key: string;
  receiver_id: string;
  signature: string;
  signer_id: string;
}

interface Action {
  FunctionCall: FunctionCall;
}

interface FunctionCall {
  args: string;
  deposit: string;
  gas: number;
  method_name: string;
}

interface ReceiptOutcome {
  id: string;
  block_hash: string;
  outcome: Outcome;
}

interface Outcome {
  executor_id: string;
  gas_burnt: number;
  logs: string[];
  receipt_ids: string[];
  status: Status;
  tokens_burnt: string;
}

interface Status {
  SuccessValue?: string;
  SuccessReceiptId?: string;
  Failure?: string;
}

interface TransactionSend {
  signer_id: string;
  receiver_id: string;
  actions: Action[];
}

const rpcProviders = {
  testnet: "https://archival-rpc.testnet.near.org",
  mainnet: "https://archival-rpc.mainnet.near.org",
};

export const provider = new providers.JsonRpcProvider(
  rpcProviders[import.meta.env.VITE_NEAR_NETWORK]
);

export const getTransactionState = async (txHash: string, accountId: string) =>
  await provider.txStatus(txHash, accountId);

export const getTransactionsStatus = (receiptsOutcome: ReceiptOutcome[]) =>
  receiptsOutcome.every(
    ({ outcome }) => !Object.keys(outcome.status).includes("Failure")
  )
    ? "success"
    : "error";

export const getTransactionsAction = (
  transactions: Partial<TransactionPayload>[]
) => {
  return transactions
    .map((payload) => {
      const action = actions.find(({ check }) =>
        check(payload as TransactionPayload)
      );

      if (!action) {
        return;
      }

      const status = getTransactionsStatus(payload.receipts_outcome!);

      return {
        status,
        message: action[status],
        transactionHash: payload.transaction?.hash,
      };
    })
    .filter((item) => item)[0];
};

export const AttachedGas = "300000000000000";

const refreshPage = (transactions: string) => {
  const newUrl =
    window.location.origin +
    window.location.pathname +
    "?transactionHashes=" +
    transactions;

  window.location.href = newUrl;
};

export const executeMultipleTransactions = async (
  transactions: TransactionSend[],
  wallet: any
) => {
  try {
    const result = await wallet.signAndSendTransactions({ transactions });

    refreshPage(result.map(({ transaction }) => transaction.hash).join(","));
  } catch (e) {
    console.warn(e);
  }
};

export const getTransaction = (
  signerId: string,
  receiverId: string,
  method: string,
  args: any,
  amount?: string
): any => {
  return {
    signerId,
    receiverId,
    actions: [
      {
        type: "FunctionCall",
        params: {
          methodName: method,
          args,
          gas: AttachedGas,
          deposit: amount ? utils.format.parseNearAmount(amount)! : "1",
        },
      },
    ],
  };
};

export const viewFunction = async (
  selector: WalletSelector,
  contractId: string,
  methodName: string,
  args = {}
) => {
  const { network } = selector.options;

  const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });

  const serializedArgs = window.btoa(JSON.stringify(args));

  const res = await provider.query<CodeResult>({
    request_type: "call_function",
    account_id: contractId,
    method_name: methodName,
    args_base64: serializedArgs,
    finality: "optimistic",
  });

  return (
    res &&
    res.result.length > 0 &&
    JSON.parse(Buffer.from(res.result).toString())
  );
};

export const getTokenStorage = async (connection, account, token) => {
  try {
    return await viewFunction(connection, token, "storage_balance_of", {
      account_id: account,
    });
  } catch (e) {
    return;
  }
};
