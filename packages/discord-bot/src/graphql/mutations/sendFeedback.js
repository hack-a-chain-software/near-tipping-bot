const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async (userId, serverId, username, message) => {
  const { data } = await graphQlClient.mutate({
    mutation: gql`
      mutation SendFeedback($objects: feedbacksInsertInput) {
        insertIntofeedbacksCollection(objects: [$objects]) {
          records {
            id
            username
            message
            submitted_at
          }
        }
      }
    `,
    variables: {
      objects: {
        user_id: userId,
        server_id: serverId,
        username,
        message,
      },
    },
  });

  return data;
};
