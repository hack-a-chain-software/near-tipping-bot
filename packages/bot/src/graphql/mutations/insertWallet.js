const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async (userId, serverId, wallet) => {
  const { data } = await graphQlClient.mutate({
    mutation: gql`
      mutation insertWallet(
        $userId: BigInt!
        $serverId: BigInt!
        $wallet: String!
      ) {
        createWallet(
          input: {
            wallet: { userId: $userId, serverId: $serverId, wallet: $wallet }
          }
        ) {
          wallet {
            nodeId
            userId
            serverId
            wallet
          }
        }
      }
    `,
    variables: {
      userId,
      serverId,
      wallet,
    },
  });

  return data.createWallet.wallet;
};
