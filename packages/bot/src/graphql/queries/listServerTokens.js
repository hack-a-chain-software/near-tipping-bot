const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async (serverId) => {
  const { data } = await graphQlClient.query({
    query: gql`
      query ListServerTokens($serverId: BigInt!) {
        allServerTokens(condition: { serverId: $serverId }) {
          nodes {
            nodeId
            tokenByTokenId {
              nodeId
              id
              metadata
            }
          }
        }
      }
    `,
    variables: {
      serverId,
    },
  });

  console.error({ token: data.tokenByTokenId });

  return data.allServerTokens.nodes.map(
    ({ tokenByTokenId: { id, metadata } }) => ({
      id,
      metadata,
    })
  );
};
