const {
  ApolloClient,
  HttpLink,
  InMemoryCache,
} = require("@apollo/client/core");
const fetch = require("node-fetch");

const graphQlClient = new ApolloClient({
  link: new HttpLink({
    uri: `http://localhost:${process.env.GRAPHQL_PORT}/graphql`,
    fetch,
    headers: {},
  }),
  cache: new InMemoryCache(),
});

module.exports = { graphQlClient };
