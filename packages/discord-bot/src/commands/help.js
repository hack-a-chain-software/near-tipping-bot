const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("How to use Near the wire bot"),

  async execute(interaction) {
    await interaction.reply({
      content: message.message,
      ephemeral: true,
    });
  },
};
