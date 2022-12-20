require("dotenv").config();
const fs = require("fs");
const http = require("http");
const { Client, GatewayIntentBits, Collection } = require("discord.js");
const { postgraphile } = require("postgraphile");
const { PgMutationUpsertPlugin } = require("postgraphile-upsert-plugin");

const { initializeHandlers } = require("./src/handlers");

// Receives a production configuration and a fallback, and returns the adequate on based on NODE_ENV
function envConfig(prod, dev) {
  return process.env.NODE_ENV == "production" ? prod : dev;
}

function setupGraphqlServer() {
  const postgraphileHandler = postgraphile(
    {
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      user: process.env.DB_USERNAME,
      sslmode: "require",
      ssl: {
        ca: fs.readFileSync("./tls/do-ca.crt"),
      },
    },
    "public",
    {
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
      dynamicJson: true,
      simpleCollections: "omit",
      appendPlugins: [PgMutationUpsertPlugin],
      handleErrors: (errors) => console.error(errors),
    }
  );

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
