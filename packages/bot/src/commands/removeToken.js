const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const listServerTokens = require("../graphql/queries/listServerTokens");
const deleteServerToken = require("../graphql/mutations/deleteServerToken");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("removetoken")
    .setDescription("Remove token from token list")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption((options) =>
      options
        .setName("token")
        .setDescription("Choice one token")
        .setAutocomplete(true)
        .setRequired(true)
    ),

  async autocomplete(interaction) {
    const serverId = interaction.member.guild.id;

    const tokens = await listServerTokens(serverId);

    const focusedValue = interaction.options.getFocused();

    const filtered = tokens.filter(({ metadata }) => {
      const { name = "", symbol = "" } = metadata || {};

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
    const { user: username } = interaction;
    const tokenId = interaction.options.getString("token");
    const serverId = interaction.member.guild.id;

    const token = await deleteServerToken(tokenId, serverId);

    if (!token) {
      await interaction.reply({
        content:
          "This server has not yet been registered or this token not registered on server. Use the /register command to register your server or choice a token registered!",
        ephemeral: true,
      });

      return;
    }

    await interaction.reply({
      content: `Hey ${username} the token has been removed from the server's token list`,
      ephemeral: true,
    });
  },
};
