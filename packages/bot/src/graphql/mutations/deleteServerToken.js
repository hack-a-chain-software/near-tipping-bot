const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async (tokenId, serverId) => {
  const { data } = await graphQlClient.mutate({
    mutation: gql`
      mutation DeleteServerToken($tokenId: String!, $serverId: BigInt!) {
        deleteServerTokenByServerIdAndTokenId(
          input: { serverId: $serverId, tokenId: $tokenId }
        ) {
          serverToken {
            tokenId
            serverId
          }
        }
      }
    `,
    variables: {
      tokenId,
      serverId,
    },
  });

  console.error({ data });

  // TODO: cache eviction policy

  return data.deleteServerTokenByServerIdAndTokenId;
};
