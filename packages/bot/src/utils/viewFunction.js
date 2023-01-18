const { providers } = require("near-api-js");

const viewFunction = async (methodName, args = {}) => {
  const provider = new providers.JsonRpcProvider({ url: process.env.NODE_URL });

  const serializerArgs = Buffer.from(JSON.stringify(args)).toString("base64");

  const res = await provider.query({
    request_type: "call_function",
    account_id: process.env.CONTRACT,
    method_name: methodName,
    args_base64: serializerArgs,
    finality: "optimistic",
  });

  return (
    res &&
    res.result.length > 0 &&
    JSON.parse(Buffer.from(res.result).toString())
  );
};

module.exports = { viewFunction };
