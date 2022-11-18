const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const listServerTokens = require("../graphql/queries/listServerTokens");
const deleteTokenFromList = require("../graphql/mutations/deleteServerToken");

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

    const filtered = tokens.filter((choice) =>
      choice.metadata.name.startsWith(focusedValue)
    );

    await interaction.respond(
      filtered.map((token) => ({ name: token.metadata.name, value: token.id }))
    );
  },

  async execute(interaction) {
    const { user: username } = interaction;
    const tokenId = interaction.options.getString("token");
    const serverId = interaction.member.guild.id;

    await interaction.reply("Working on it...");

    const { deleteFromserver_tokensCollection } = await deleteTokenFromList(
      tokenId,
      serverId
    );
    if (deleteFromserver_tokensCollection.records.length === 0) {
      await interaction.editReply(
        "This server has not yet been registered. Use the /register command to register your server"
      );

      return;
    }

    await interaction.editReply(
      `Hey ${username} the token has been removed from the server's token list `
    );
  },
};