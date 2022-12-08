const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async (command) => {
  const { data } = await graphQlClient.query({
    query: gql`
      query FindCommandHelp($command: String!) {
        helpByCommand(command: $command) {
          nodeId
          command
          message
        }
      }
    `,
    variables: {
      command,
    },
  });

  return data.helpByCommand;
};
