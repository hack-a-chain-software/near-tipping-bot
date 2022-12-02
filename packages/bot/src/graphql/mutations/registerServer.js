const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async (id, name) => {
  const result = await graphQlClient.mutate({
    mutation: gql`
      mutation RegisterServer($objects: serverInsertInput!) {
        insertIntoserversCollection(objects: [$objects]) {
          records {
            id
            name
          }
        }
      }
    `,
    variables: {
      objects: {
        id,
        name,
      },
    },
  });

  return result;
};
