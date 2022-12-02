const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async (serverId, tokenId) => {
  const { data } = await graphQlClient.mutate({
    mutation: gql`
      mutation InsertTokenIntoServer($objects: server_tokensInsertInput) {
        insertIntoserver_tokensCollection(objects: [$objects]) {
          records {
            server_id
            token_id
          }
        }
      }
    `,
    variables: {
      objects: {
        server_id: serverId,
        token_id: tokenId,
      },
    },
  });

  return data;
};
