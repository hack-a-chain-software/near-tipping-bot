const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async (userId, serverId, wallet) => {
  const { data } = await graphQlClient.mutate({
    mutation: gql`
      mutation insertWallet($objects: walletsInsertInput) {
        insertIntowalletsCollection(objects: [$objects]) {
          records {
            user_id
            server_id
            wallet
          }
        }
      }
    `,
    variables: {
      objects: {
        user_id: userId,
        server_id: serverId,
        wallet,
      },
    },
  });

  return data;
};
