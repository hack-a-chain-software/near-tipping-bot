const { ApolloClient, HttpLink, InMemoryCache } = require("@apollo/client/core");
const fetch = require("node-fetch");

const graphQlClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.API_URL,
    fetch,
    headers: {
      apiKey: process.env.API_KEY,
    },
  }),
  cache: new InMemoryCache(),
});

module.exports = { graphQlClient };
