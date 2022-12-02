const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async (serverId) => {
  const { data } = await graphQlClient.query({
    query: gql`
      query ListServerTokens($filter: String) {
        serversCollection(filter: { id: { eq: $filter } }) {
          edges {
            node {
              server_tokensCollection {
                edges {
                  node {
                    server_id
                    token_id
                    servers {
                      id
                      name
                    }
                    tokens {
                      id
                      metadata
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      filter: serverId,
    },
  });
  const result =
    data.serversCollection.edges[0].node.server_tokensCollection.edges.map(
      ({ node }) => {
        return {
          id: node.tokens.id,
          metadata: JSON.parse(node.tokens.metadata),
        };
      }
    );

  return result;
};
