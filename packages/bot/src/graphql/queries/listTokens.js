const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async () => {
  const { data } = await graphQlClient.query({
    query: gql`
      query ListTokens {
        allTokens {
          nodes {
            nodeId
            id
            metadata
          }
        }
      }
    `,
  });

  return data.allTokens.nodes;
};
