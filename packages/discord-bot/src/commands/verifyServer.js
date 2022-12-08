const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const findServerById = require("../graphql/queries/findServerById");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("verifyserver")
    .setDescription("Register your server to use commands")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction) {
    const { id } = interaction.member.guild;
    const { user: username } = interaction;

    const server = await findServerById(id);

    if (!server) {
      await interaction.editReply({
        content:
          "This server has not yet been registered. Use the /register command to register your server",
      });
      return;
    }

    await interaction.editReply({
      content: `Hey ${username}, your server is already registered`,
    });
  },
};
