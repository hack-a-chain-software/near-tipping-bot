const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { viewFunction } = require("../utils/viewFunction");
const { formatDecimals } = require("../utils/formatDecimals");
const listServerTokens = require("../graphql/queries/listServerTokens");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ranking")
    .setDescription("Check the ranking of transactions by server coin")
    .addStringOption((option) =>
      option
        .setName("coin")
        .setDescription("Choose the coin you want to see the ranking")
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
    const tokens = await listServerTokens(serverId);

    await interaction.member.guild.members.fetch();

    const ranking = await viewFunction("view_ranking", {
      server: serverId,
      coin: coin === "near" ? "$NEAR" : coin,
    });

    const token = tokens.find(({ id }) => id === coin);

    if (!token) {
      await interaction.reply({
        content: "Choose a token that is on the token list",
        ephemeral: true,
      });

      return;
    }

    if (ranking.length > 0) {
      const embed = new EmbedBuilder()
        .setTitle(`Ranking of ${token.metadata.name}`)
        .setColor("Random");

      ranking.forEach(({ user, amount }) => {
        const account = interaction.member.guild.members.cache.find(
          (member) => member.user.id === user
        );

        embed.addFields({
          name: account
            ? `User: ${account.user.tag}\nAmount: ${formatDecimals(
                amount,
                token.metadata.decimals
              )}`
            : `User: User deleted or it's not part of that server\nAmount: ${formatDecimals(
                amount,
                token.metadata.decimals
              )}`,
          value: "--------------------------------------",
        });
      });

      await interaction.reply({ embeds: [embed], ephemeral: true });
      return;
    }

    await interaction.reply({
      context: "No transaction so far",
      ephemeral: true,
    });
  },
};
