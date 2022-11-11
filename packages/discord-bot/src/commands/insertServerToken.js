const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const listAllTokens = require("../graphql/queries/listAllTokensIntoDatabase");
const insertTokenIntoServer = require("../graphql/mutations/insertTokenIntoServer");
const findServerById = require("../graphql/queries/findServerById");
const findDuplicatePkError = require("../utils/findDuplicatePkError");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("addtoken")
    .setDescription("Insert token into server to perform a trasnfer")
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

    const tokens = await listAllTokens();

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

    await interaction.reply("Working on it...");

    const { serversCollection } = await findServerById(serverId);

    if (serversCollection.edges.length === 0) {
      await interaction.editReply(
        "This server has not yet been registered. Use the /register command to register your server"
      );
      return;
    }

    try {
      await insertTokenIntoServer(serverId, tokenId);

      await interaction.editReply(
        `Hey ${username}, the token has been added to your server `
      );
    } catch ({ graphQLErrors }) {
      if (findDuplicatePkError(graphQLErrors)) {
        await interaction.editReply(
          "This token has already been added to the server"
        );
        return;
      }
      await interaction.editReply({
        content: `Internal error, if you think this is a bug, please contact developers: ${graphQLErrors}`,
      });
    }
  },
};
