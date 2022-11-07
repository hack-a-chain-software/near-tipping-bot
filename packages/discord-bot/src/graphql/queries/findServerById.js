const { gql } = require("@apollo/client/core");
const { graphQlClient } = require("../../lib/graphQlClient");

module.exports = async (serverId) => {
  const result = await graphQlClient.query({
    query: gql`
      query FindServerById($filter: String) {
        serversCollection(filter: { id: { eq: $filter } }) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `,
    variables: {
      filter: serverId
    },
  });
  return result;
};
