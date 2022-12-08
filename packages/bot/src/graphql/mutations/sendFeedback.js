const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async (userId, serverId, username, message) => {
  const { data } = await graphQlClient.mutate({
    mutation: gql`
      mutation SendFeedback(
        $serverId: BigInt!
        $userId: BigInt!
        $username: String!
        $message: String!
      ) {
        createFeedback(
          input: {
            feedback: {
              userId: $userId
              serverId: $serverId
              username: $username
              message: $message
            }
          }
        ) {
          feedback {
            nodeId
            id
            username
            message
            submittedAt
          }
        }
      }
    `,
    variables: {
      userId,
      serverId,
      username,
      message,
    },
  });

  return data;
};
