const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("commands")
    .setDescription("Bot commands"),

  async execute(interaction) {
    let commands = interaction.client.commands;
    const embed = new EmbedBuilder()
      .setTitle("Bot commands")
      .setColor("Random");

    commands.forEach((command) => {
      embed.addFields({
        name: `Command: /${command.data.name}`,
        value: `Description: ${command.data.description}`,
      });
    });

    interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
