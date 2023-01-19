const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { formatDecimals } = require("../utils/formatDecimals");
const { viewFunction } = require("../utils/viewFunction");
const listServerTokens = require("../graphql/queries/listServerTokens");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("viewhistory")
    .setDescription("See the history of coins sent/received from a user")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("Choose the user you want to see the history")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("coin")
        .setDescription("Choose the currency you want to see in the history")
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
    const user = interaction.options.getUser("user");
    const coin = interaction.options.getString("coin");
    const tokens = await listServerTokens(serverId);

    const amount = await viewFunction("view_history", {
      server: serverId,
      user: user.id,
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

    const embed = new EmbedBuilder()
      .setTitle(`History of ${user.tag}`)
      .addFields({
        name: `Amount of ${token.metadata.name} sent/received`,
        value: `Amount: ${formatDecimals(amount, token.metadata.decimals)}`,
      });

    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
