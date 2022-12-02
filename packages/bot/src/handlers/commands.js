const { readdirSync } = require("fs");
const { REST, Routes } = require("discord.js");
const path = require("path");

module.exports = async (client) => {
  const slashCommands = [];

  const commandsPath = path.join(__dirname, "..", "commands");
  const commandFiles = readdirSync(commandsPath).filter((file) =>
    file.endsWith(".js")
  );
  const restClient = new REST({ version: "9" }).setToken(process.env.BOT_TOKEN);

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    if ("data" in command && "execute" in command) {
      client.commands.set(command.data.name, command);
      slashCommands.push(command.data.toJSON());
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
      );
    }
  }
  await restClient.put(Routes.applicationCommands(process.env.CLIENT_ID), {
    body: slashCommands,
  });
};
