const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const listServerTokens = require("../graphql/queries/listServerTokens");
const { viewFunction } = require("../utils/viewFunction");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ranking")
    .setDescription("Veja o ranking geral")
    .addStringOption((option) =>
      option
        .setName("coin")
        .setDescription("Informe qual moeda vc gostaria de ver o ranking")
        .setRequired(true)
        .setAutocomplete(true)
    ),

  async autocomplete(interaction) {
    const serverId = interaction.member.guild.id;

    const tokens = await listServerTokens(serverId);

    const focusedValue = interaction.options.getFocused();

    const filtered = tokens.filter((choice) => {
      const { name = "", symbol = "" } = choice?.metadata || {};

      const focusedLowerCase = focusedValue.toLowerCase();

      return (
        name.toLowerCase().includes(focusedLowerCase) ||
        symbol.toLowerCase().includes(focusedLowerCase)
      );
    });

    await interaction.respond(
      filtered.map((token) => ({ name: token.metadata.name, value: token.id }))
    );
  },

  async execute(interaction) {
    const serverId = interaction.member.guild.id;
    const coin = interaction.options.getString("coin");

    const ranking = await viewFunction("view_ranking", {
      server: serverId,
      coin,
    });

    console.log(ranking);

    const embed = new EmbedBuilder()
      .setTitle("Ranking geral")
      .setColor("Random");

    [1, 2, 3, 4, 5].forEach((item) =>
      embed.addFields({ name: `Item: ${item}`, value: `Item: ${item + 1}` })
    );

    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
