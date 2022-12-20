const { SlashCommandBuilder } = require("discord.js");
const findCommandHelp = require("../graphql/queries/findCommandHelp");
const listHelps = require("../graphql/queries/listHelps");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Choose a command to see its tutorial")
    .addStringOption((option) =>
      option
        .setName("command")
        .setDescription("Choose the command you would like to see the tutorial")
        .setRequired(true)
        .setAutocomplete(true)
    ),

  async autocomplete(interaction) {
    const focusedValue = interaction.options.getFocused();

    const helpCommands = await listHelps();

    const filtered = helpCommands.filter(({ command }) =>
      command.toLowerCase().includes(focusedValue.toLowerCase())
    );

    await interaction.respond(
      filtered.map(({ command }) => ({
        name: command,
        value: command,
      }))
    );
  },

  async execute(interaction) {
    const commandName = interaction.options.getString("command");

    const command = await findCommandHelp(commandName);

    if (!command) {
      await interaction.reply({
        content:
          "That command is unavalible. Please, pick one of the help listed on this server",
        ephemeral: true,
      });
      return;
    }

    await interaction.reply({ content: command.message, ephemeral: true });
  },
};
