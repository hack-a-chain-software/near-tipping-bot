const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async (tokenId) => {
  const { data } = await graphQlClient.query({
    query: gql`
      query FindToken($id: String) {
        tokensCollection(filter: { id: { eq: $id } }) {
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
      id: tokenId,
    },
  });

  return data.tokensCollection.edges.map(({ node }) => {
    return {
      id: node.id,
      metadata: JSON.parse(node.metadata),
    };
  });
};
