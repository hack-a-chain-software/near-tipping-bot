const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async (tokenId, serverId) => {
  const { data } = await graphQlClient.mutate({
    mutation: gql`
      mutation delete($token_id: String, $server_id: String) {
        deleteFromserver_tokensCollection(
          filter: { token_id: { eq: $token_id }, server_id: { eq: $server_id } }
        ) {
          records {
            token_id
            server_id
          }
        }
      }
    `,
    variables: {
      token_id: tokenId,
      server_id: serverId,
    },
  });

  // TODO: cache eviction policy

  return data;
};
