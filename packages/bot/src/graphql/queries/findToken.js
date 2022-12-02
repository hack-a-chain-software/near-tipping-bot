const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async (tokenId, serverId) => {
  const { data } = await graphQlClient.query({
    query: gql`
      query FindToken($token_id: String, $server_id: String) {
        server_tokensCollection(
          filter: { token_id: { eq: $token_id }, server_id: { eq: $server_id } }
        ) {
          edges {
            node {
              id
              metadata
            }
          }
        }
      }
    `,
    variables: {
      token_id: tokenId,
      server_id: serverId,
    },
  });

  return data.server_tokensCollection.edges.map(({ node }) => {
    return {
      id: node.id,
      metadata: JSON.parse(node.metadata),
    };
  })[0];
};
