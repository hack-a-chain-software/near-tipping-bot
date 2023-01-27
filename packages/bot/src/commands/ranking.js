const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { viewFunction } = require("../utils/viewFunction");
const { formatDecimals } = require("../utils/formatDecimals");
const listServerTokens = require("../graphql/queries/listServerTokens");
const isEmpty = require("lodash/isEmpty");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ranking")
    .setDescription("Check out the donation leaderbord in the server by token")
    .addStringOption((option) =>
      option
        .setName("token")
        .setDescription("Choose the token you want to see the ranking")
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
    const coin = interaction.options.getString("token");
    const tokens = await listServerTokens(serverId);

    await interaction.member.guild.members.fetch();

    const ranking = await viewFunction("view_ranking", {
      server: serverId,
      coin: coin === "near" ? "$NEAR" : coin,
    });

    const token = tokens.find(({ id }) => {
      if (coin === "$NEAR") {
        return id === "near";
      }
      return id === coin;
    });

    if (!token) {
      await interaction.reply({
        content: "Choose a token that is on the token list",
        ephemeral: true,
      });

      return;
    }

    if (isEmpty(ranking)) {
      await interaction.reply({
        content: "No transactions so far",
        ephemeral: true,
      });

      return;
    }

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
          : `User: User deleted or is not part of this server\nAmount: ${formatDecimals(
              amount,
              token.metadata.decimals
            )}`,
        value: "--------------------------------------",
      });
    });

    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
