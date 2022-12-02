const { SlashCommandBuilder } = require("discord.js");
const findSubCommand = require("../graphql/queries/findSubCommand");
const listHelpCommands = require("../graphql/queries/listHelpCommands");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Choice one command to see a tutorial")
    .addStringOption((option) =>
      option
        .setName("command")
        .setDescription("Choose the command you want to know how to use")
        .setRequired(true)
        .setAutocomplete(true)
    ),

  async autocomplete(interaction) {
    const focusedValue = interaction.options.getFocused();

    const helpCommands = await listHelpCommands();

    const filtered = helpCommands.filter(({ command }) =>
      command.startsWith(focusedValue)
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

    const command = await findSubCommand(commandName);

    if (!command) {
      await interaction.reply({
        content:
          "That command is unavalible. Please, pick one of the help listed on this server",
        ephemeral: true,
      });
      return;
    }

    await interaction.reply({ content: command.node.message, ephemeral: true });
  },
};
