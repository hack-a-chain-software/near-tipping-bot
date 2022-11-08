const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const findServerById = require("../graphql/queries/findServerById");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("verifyserver")
    .setDescription("Register your server to use commands")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction) {
    const { id, name } = interaction.member.guild;
    const { user: username } = interaction;

    await interaction.reply("Working on it...");

    const { data } = await findServerById(id);

    if (data.serversCollection.edges.length === 0) {
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
