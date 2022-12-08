const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async (id, metadata) => {
  const { data } = await graphQlClient.mutate({
    mutation: gql`
      mutation InsertToken($id: String, $metadata: JSON!) {
        createToken(input: { token: { id: $id, metadata: $metadata } }) {
          token {
            nodeId
            id
            metadata
          }
        }
      }
    `,
    variables: {
      objects: {
        id,
        metadata,
      },
    },
  });

  return data;
};
