const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async (commandName) => {
  const { data } = await graphQlClient.query({
    query: gql`
      query FindCommand($commandName: String) {
        helpCollection(filter: { command: { eq: $commandName } }) {
          edges {
            node {
              message
            }
          }
        }
      }
    `,
    variables: {
      commandName,
    },
  });

  return data.helpCollection.edges[0];
};
