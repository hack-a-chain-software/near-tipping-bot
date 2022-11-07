const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const registerServer = require("../graphql/mutations/registerServer");

function findDuplicatePkError(graphQLErrors) {
  if (Array.isArray(graphQLErrors)) {
    return graphQLErrors.find((error) =>
      error.message.match("duplicate key value violates unique constraint")
    );
  }

  return undefined;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("register")
    .setDescription("Register your server to use commands")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction) {
    const { id, name } = interaction.member.guild;
    const { user: username } = interaction;

    await interaction.reply("Working on it...");

    try {
      await registerServer(id, name);

      await interaction.editReply({
        content: `Hey ${username}, your server was registered`,
      });
    } catch ({ graphQLErrors }) {
      if (findDuplicatePkError(graphQLErrors)) {
        await interaction.editReply({
          content: "This server was registered already",
        });

        return;
      }

      await interaction.editReply({
        content: `Internal error, if you think this is a bug, please contact developers: ${graphQLErrors}`,
      });
    }
  },
};
