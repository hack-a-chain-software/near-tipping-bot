const { SlashCommandBuilder } = require("discord.js");
const findUserWallet = require("../graphql/queries/findUserWallet");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("verifywallet")
    .setDescription("Check the wallet that is saved"),

  async execute(interaction) {
    const { username, id } = interaction.user;
    const serverId = interaction.member.guild.id;

    const { walletsCollection } = await findUserWallet(id, serverId);

    await interaction.reply({ content: "Working on it...", ephemeral: true });

    if (walletsCollection.edges.length === 0) {
      await interaction.editReply({
        content:
          "There is no wallet registred - please use /setwallet to save your wallet",
      });
      return;
    }

    const nearWallet = walletsCollection.edges[0].node.wallet;

    await interaction.editReply({
      content: `Hey you ${username}, your wallet is ${nearWallet}`,
      ephemeral: true,
    });
  },
};
