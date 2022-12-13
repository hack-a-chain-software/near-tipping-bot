const {
  ApolloClient,
  HttpLink,
  InMemoryCache,
} = require("@apollo/client/core");
const { defaultDataIdFromObject } = require("@apollo/client");
const fetch = require("node-fetch");

const graphQlClient = new ApolloClient({
  link: new HttpLink({
    uri: `http://localhost:${process.env.GRAPHQL_PORT}/graphql`,
    fetch,
    headers: {},
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      // disabling cache due to issues with invalidation
      // TODO: when re-enabling cache, consider "server-side" cache instead.
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
  cache: new InMemoryCache({
    dataIdFromObject(responseObject) {
      if (responseObject.nodeId) {
        return responseObject.nodeId;
      }
      return defaultDataIdFromObject(responseObject);
    },
  }),
});

module.exports = { graphQlClient };
