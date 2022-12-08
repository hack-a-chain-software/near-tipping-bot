require("dotenv").config();

const http = require("http");
const { Client, GatewayIntentBits, Collection } = require("discord.js");
const { postgraphile } = require("postgraphile");

const { initializeHandlers } = require("./src/handlers");

// Receives a production configuration and a fallback, and returns the adequate on based on NODE_ENV
function envConfig(prod, dev) {
  return process.env.NODE_ENV == "production" ? prod : dev;
}

function setupGraphqlServer() {
  const postgraphileHandler = postgraphile(process.env.DATABASE_URL, "public", {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    dynamicJson: true,
    simpleCollections: "omit",
    showErrorStack: envConfig(false, "json"),
  });

  return http
    .createServer(postgraphileHandler)
    .listen(process.env.GRAPHQL_PORT);
}

async function setupDiscordClient() {
  const client = new Client({
    intents: [GatewayIntentBits.Guilds],
  });

  client.commands = new Collection();
  client.aliases = new Collection();

  await initializeHandlers(client);

  await client.login(process.env.BOT_TOKEN);
}

async function main() {
  setupGraphqlServer();

  await setupDiscordClient();
}

main();
