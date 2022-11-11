const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async (id, metadata) => {
  const { data } = await graphQlClient.mutate({
    mutation: gql`
      mutation InsertTokenIntoDatabase($objects: tokensInsertInput) {
        insertIntotokensCollection(objects: [$objects]) {
          records {
            id
            metadata
          }
        }
      }
    `,
    variables: {
      objects: {
        id,
        metadata: JSON.stringify(metadata),
      },
    },
  });
  return data;
};
