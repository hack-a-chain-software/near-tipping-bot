const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async (id, name) => {
  const result = await graphQlClient.mutate({
    mutation: gql`
      mutation InsertServer($server: ServerInput!) {
        createServer(input: { server: $server }) {
          server {
            nodeId
            id
            name
          }
        }
      }
    `,
    variables: {
      server: {
        id,
        name,
      },
    },
  });

  return result;
};
