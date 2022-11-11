const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async () => {
  const { data } = await graphQlClient.query({
    query: gql`
      query ListAllTokens($first: Int) {
        tokensCollection {
          edges {
            node {
              id
              metadata
            }
          }
        }
      }
    `,
  });
  return data.tokensCollection.edges.map(({ node }) => {
    return {
      id: node.id,
      metadata: JSON.parse(node.metadata),
    };
  });
};
