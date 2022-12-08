const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async (serverId, tokenId) => {
  const { data } = await graphQlClient.mutate({
    mutation: gql`
      mutation InsertServerToken($serverId: BigInt!, $tokenId: String!) {
        createServerToken(
          input: { serverToken: { serverId: $serverId, tokenId: $tokenId } }
        ) {
          serverToken {
            nodeId
            serverId
            tokenId
          }
        }
      }
    `,
    variables: {
      serverId,
      tokenId,
    },
  });

  return data;
};
