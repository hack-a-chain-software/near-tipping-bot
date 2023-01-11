import {
  connect,
  keyStores,
  WalletConnection,
  utils,
  Contract,
  transactions,
  providers,
} from "near-api-js";

import type { CodeResult } from "near-api-js/lib/providers/provider";
import actions from "./actions";

import BN from "bn.js";

declare global {
  interface Window {
    walletConnection: any;
    contract: any;
    receipt: any;
    result: any;
    accountId: any;
  }
}

window.Buffer = window.Buffer || require("buffer").Buffer;

const keyStore = new keyStores.BrowserLocalStorageKeyStore();

//main net config
//TODO: CHANGE THE CONTRACT NAME
const nearConfig = {
  networkId: "mainnet",
  keyStore,
  nodeUrl: "https://rpc.mainnet.near.org",
  walletUrl: "https://wallet.mainnet.near.org",
  helperUrl: "https://helper.mainnet.near.org",
  explorerUrl: "https://explorer.mainnet.near.org",
  contractName: "tipping_bot.near",
};

// TEST NET CONFIG
// const nearConfig = {
//   //networkId: "testnet",
//   keyStore,
//   nodeUrl: "https://rpc.Testnet.near.org",
//   walletUrl: "https://wallet.Testnet.near.org",
//   helperUrl: "https://helper.Testnet.near.org",
//   explorerUrl: "https://explorer.Testnet.near.org",
//   contractName: "bot_contract.testnet"
// };

//test transaction, if specific error, go for login and redo
export async function initNear() {
  const near = await connect(nearConfig as any);

  window.walletConnection = new WalletConnection(near, "The Supah tipping bot");

  // MUST UNCOMMENT BEFOR MAINNET USE
  if (window.walletConnection.getAccountId().endsWith(".testnet")) {
    window.walletConnection.signOut();
  }

  if (!window.walletConnection.isSignedIn())
    return window.walletConnection.requestSignIn();

  // Getting the Account ID. If still unauthorized, it's just empty string
  window.accountId = window.walletConnection.getAccountId();

  // Initializing our contract APIs by contract name and configuration

  window.contract = new Contract(
    window.walletConnection.account(),
    nearConfig.contractName,
    {
      // View methods are read only. They don't modify the state, but usually return some value.
      viewMethods: [],
      // Change methods can modify the state. But you don't receive the returned value when called.
      changeMethods: ["transfer_payment"],
    }
  );
}

export async function sendMoneyCall(receiver, amount) {
  amount = utils.format.parseNearAmount(amount);

  const receipt = await window.contract.transfer_payment({
    args: { receiver: receiver },
    amount: amount,
  });

  window.receipt = receipt;
}

export async function initializeTokenContract(address, receiver, amount) {
  const account = window.walletConnection.account();
  let transactionsArray: any[] = [];

  //MAIN NET RPC PROVIDER
  const provider = new providers.JsonRpcProvider(
    "https://rpc.mainnet.near.org"
  );

  //TEST NET RPC PROVIDER
  //const provider = new providers.JsonRpcProvider("https://rpc.testnet.near.org");

  //check decimals of the contract, if ft_metadata not implemented, assume 24 (near standard)

  let decimals;
  try {
    const rawTokenSpecs = (await provider.query({
      request_type: "call_function",
      account_id: address,
      method_name: "ft_metadata",
      args_base64: Buffer.from(JSON.stringify({})).toString("base64"),
      finality: "optimistic",
    })) as any;

    const tokenSpecs = JSON.parse(Buffer.from(rawTokenSpecs.result).toString());

    decimals = tokenSpecs.decimals;
  } catch (err) {
    console.log(err);
    decimals = 24;
  }

  //treat amount to use decimals
  const rawAccountStorage = (await provider.query({
    request_type: "call_function",
    account_id: address,
    method_name: "storage_balance_of",
    args_base64: Buffer.from(
      JSON.stringify({ account_id: account.accountId })
    ).toString("base64"),
    finality: "optimistic",
  })) as any;

  const accountStorage = JSON.parse(
    Buffer.from(rawAccountStorage.result).toString()
  );

  const rawReceiverStorage = (await provider.query({
    request_type: "call_function",
    account_id: address,
    method_name: "storage_balance_of",
    args_base64: Buffer.from(JSON.stringify({ account_id: receiver })).toString(
      "base64"
    ),
    finality: "optimistic",
  })) as any;

  const receiverStorage = JSON.parse(
    Buffer.from(rawReceiverStorage.result).toString()
  );

  const rawContractStorage = (await provider.query({
    request_type: "call_function",
    account_id: address,
    method_name: "storage_balance_of",
    args_base64: Buffer.from(
      JSON.stringify({ account_id: window.contract.contractId })
    ).toString("base64"),
    finality: "optimistic",
  })) as any;

  let contractStorage = JSON.parse(
    Buffer.from(rawContractStorage.result).toString()
  );

  if (accountStorage == null) {
    transactionsArray.push(
      transactions.functionCall(
        "storage_deposit",
        Buffer.from(
          JSON.stringify({
            account_id: account.accountId,
            registration_only: true,
          })
        ),
        10000000000000 as any,
        utils.format.parseNearAmount("0.01") as any
      )
    );
  }
  if (receiverStorage == null) {
    transactionsArray.push(
      transactions.functionCall(
        "storage_deposit",
        Buffer.from(
          JSON.stringify({
            account_id: receiver,
            registration_only: true,
          })
        ),
        10000000000000 as any,
        utils.format.parseNearAmount("0.01") as any
      )
    );
  }
  if (contractStorage == null) {
    transactionsArray.push(
      transactions.functionCall(
        "storage_deposit",
        Buffer.from(
          JSON.stringify({
            account_id: window.contract.contractId,
            registration_only: true,
          })
        ),
        10000000000000 as any,
        utils.format.parseNearAmount("0.01") as any
      )
    );
  }

  transactionsArray.push(
    transactions.functionCall(
      "ft_transfer_call",
      Buffer.from(
        JSON.stringify({
          receiver_id: window.contract.contractId,
          amount: parseAmount(amount, decimals, address), //amount,
          memo: null,
          msg: JSON.stringify({ receiver }),
        })
      ),
      260000000000000 as any,
      "1" as any
    )
  );
  await account.signAndSendTransaction({
    receiverId: address,
    actions: transactionsArray,
  });
}

function cleanupAmount(amount) {
  return amount.replace(/,/g, "").trim();
}

function trimLeadingZeroes(value) {
  value = value.replace(/^0+/, "");
  if (value === "") {
    return "0";
  }
  return value;
}

function parseAmount(amt, decimals, address) {
  if (!amt) {
    return 0;
  }
  amt = cleanupAmount(amt);
  const split = amt.split(".");
  const wholePart = split[0];
  const fracPart = split[1] || "";
  if (split.length > 2 || fracPart.length > decimals) {
    throw new Error(`Cannot parse '${amt}' as ${address} amount`);
  }
  return trimLeadingZeroes(wholePart + fracPart.padEnd(decimals, "0"));
}

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

      const status = getTransactionsStatus(payload?.receipts_outcome!);

      return {
        status,
        message: action[status],
        transactionHash: payload.transaction?.hash,
      };
    })
    .filter((item) => item)[0];
};

export const AttachedGas = "300000000000000";

const refreshPage = (transactions) => {
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
): Transaction => {
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
  selector,
  contractId,
  methodName,
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
