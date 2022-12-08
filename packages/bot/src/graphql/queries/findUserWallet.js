const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async (userId, serverId) => {
  const { data } = await graphQlClient.query({
    query: gql`
      query FindUserWallet($userId: BigInt!, $serverId: BigInt!) {
        walletByUserIdAndServerId(userId: $userId, serverId: $serverId) {
          nodeId
          userId
          serverId
          wallet
        }
      }
    `,
    variables: {
      userId,
      serverId,
    },
  });

  return data.walletByUserIdAndServerId;
};
