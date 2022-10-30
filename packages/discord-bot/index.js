require("dotenv").config();

const { Client, GatewayIntentBits, Collection } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

// creating a new collection for the commands
["commands", "aliases"].forEach((file) => (client[file] = new Collection()));
// passing the client to be used in events and commands
["commands", "events"].forEach((file) => require(`./src/handlers/${file}`)(client));

client.login(process.env.BOT_TOKEN);
