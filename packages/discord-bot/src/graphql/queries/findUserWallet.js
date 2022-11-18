const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async (userId, serverId) => {
  const { data } = await graphQlClient.query({
    query: gql`
      query findUserWallet($user_id: String, $server_id: String) {
        walletsCollection(
          filter: { user_id: { eq: $user_id }, server_id: { eq: $server_id } }
        ) {
          edges {
            node {
              wallet
            }
          }
        }
      }
    `,
    variables: {
      user_id: userId,
      server_id: serverId,
    },
  });

  return data;
};
