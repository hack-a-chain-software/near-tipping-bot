const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const registerServer = require("../graphql/mutations/registerServer");
const findDuplicatePkError = require("../utils/findDuplicatePkError");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("register")
    .setDescription("Register your server to use commands")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction) {
    const { id, name } = interaction.member.guild;
    const { user: username } = interaction;

    try {
      await registerServer(id, name);

      await interaction.reply({
        content: `Hey ${username}, your server was registered`,
        ephemeral: true,
      });
    } catch ({ graphQLErrors }) {
      if (findDuplicatePkError(graphQLErrors)) {
        await interaction.reply({
          content: "This server was registered already",
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
