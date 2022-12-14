const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async (serverId) => {
  const { data } = await graphQlClient.query({
    query: gql`
      query FindServerById($id: BigInt!) {
        serverById(id: $id) {
          nodeId
          id
          name
        }
      }
    `,
    variables: {
      id: serverId,
    },
  });

  return data.serverById;
};
