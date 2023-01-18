const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const listServerTokens = require("../graphql/queries/listServerTokens");
const { viewFunction } = require("../utils/viewFunction");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("viewhistory")
    .setDescription(
      "Veja o historico de moedas enviadas/recebidas de um usuario"
    )
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("Informe o usuario que deseja ver o historico")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("coin")
        .setDescription("Informe qual a moeda que deseja ver no historico")
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

    const history = await viewFunction("view_history", {
      server: serverId,
      user: user.id,
      coin,
    });

    console.log(history);

    const embed = new EmbedBuilder().setTitle(`Historico do ${user.tag}`);

    [1, 2, 3, 4, 5].forEach((item) =>
      embed.addFields({ name: `Item: ${item}`, value: `Item: ${item + 1}` })
    );

    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
