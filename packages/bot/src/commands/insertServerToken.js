const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const listTokens = require("../graphql/queries/listTokens");
const insertServerToken = require("../graphql/mutations/insertServerToken");
const findDuplicatePkError = require("../utils/findDuplicatePkError");
const findServerNotRegistered = require("../utils/findServerNotRegisteredError");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("addtoken")
    .setDescription("Insert token into server to perform a transfer")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption((options) =>
      options
        .setName("token")
        .setDescription("Choice one token")
        .setAutocomplete(true)
        .setRequired(true)
    ),

  async autocomplete(interaction) {
    const focusedValue = interaction.options.getFocused();

    const tokens = await listTokens();

    const filtered = tokens.filter(({ metadata }) =>
      metadata.name.startsWith(focusedValue)
    );

    await interaction.respond(
      filtered.map((token) => ({ name: token.metadata.name, value: token.id }))
    );
  },

  async execute(interaction) {
    const { user: username } = interaction;
    const tokenId = interaction.options.getString("token");

    const serverId = interaction.member.guild.id;

    try {
      await insertServerToken(serverId, tokenId);

      await interaction.reply({
        content: `Hey ${username}, the token has been added to your server`,
        ephemeral: true,
      });
    } catch ({ graphQLErrors }) {
      if (findDuplicatePkError(graphQLErrors)) {
        await interaction.reply({
          content: "This token has already been added to the server",
          ephemeral: true,
        });
        return;
      }
      if (findServerNotRegistered(graphQLErrors)) {
        await interaction.reply({
          content:
            "This server has not yet been registered or this token not registered on server. Use the /register command to register your server or choice a token registered!",
          ephemeral: true,
        });
        return;
      }
      await interaction.reply({
        content: `Internal error, if you think this is a bug, please contact developers: ${graphQLErrors}`,
        ephemeral: true,
      });
    }
  },
};
