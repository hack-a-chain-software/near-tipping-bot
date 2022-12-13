const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const findServerById = require("../graphql/queries/findServerById");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("verifyserver")
    .setDescription("Verify if your server is already registered")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction) {
    const { id } = interaction.member.guild;
    const { user: username } = interaction;

    const server = await findServerById(id);

    const replyContent = server
      ? `Hey ${username}, your server is already registered`
      : "This server has not yet been registered. Use the /register command to register your server";

    await interaction.reply({ content: replyContent, ephemeral: true });
  },
};
