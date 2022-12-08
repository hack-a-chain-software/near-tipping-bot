const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const listServerTokens = require("../graphql/queries/listServerTokens");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("alltokens")
    .setDescription("List all server tokens"),

  async execute(interaction) {
    const { id } = interaction.member.guild;

    const tokens = await listServerTokens(id);

    const embed = new EmbedBuilder()
      .setTitle("All Server Tokens")
      .setColor("Random");

    tokens.forEach((token) =>
      embed.addFields({ name: token.metadata.name, value: token.id })
    );

    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
