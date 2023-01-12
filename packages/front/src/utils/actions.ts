import { TransactionPayload } from "./helpers";

export interface Actionable {
  error: string;
  success: string;
  check: ({ transaction: { actions } }: TransactionPayload) => boolean;
}

export const actions = [
  {
    error: "Something went wrong :(",
    success: "Tokens sent succesfully",
    check: ({ transaction: { actions } }: TransactionPayload) => {
      const [action] = actions;

      return action.FunctionCall.method_name === "ft_transfer_call";
    },
  },
];

export default actions;
