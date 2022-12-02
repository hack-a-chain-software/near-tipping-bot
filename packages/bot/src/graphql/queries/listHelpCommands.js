const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async () => {
  const { data } = await graphQlClient.query({
    query: gql`
      query FindCommand($firts: Int) {
        helpCollection {
          edges {
            node {
              command
              message
            }
          }
        }
      }
    `,
  });

  return data.helpCollection.edges.map(({ node }) => ({
    command: node.command,
    message: node.message,
  }));
};
