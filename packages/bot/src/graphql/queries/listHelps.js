const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async () => {
  const { data } = await graphQlClient.query({
    query: gql`
      query ListHelps {
        allHelps {
          nodes {
            nodeId
            command
            message
          }
        }
      }
    `,
  });

  return data.allHelps.nodes;
};
