const { SlashCommandBuilder } = require("discord.js");
const findUserWallet = require("../graphql/queries/findUserWallet");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("verifywallet")
    .setDescription("Check the wallet that is saved"),

  async execute(interaction) {
    const { username, id } = interaction.user;
    const serverId = interaction.member.guild.id;

    const userWallet = await findUserWallet(id, serverId);

    if (!userWallet.wallet) {
      await interaction.reply({
        content:
          "There is no wallet registred. Please use /setwallet to save your wallet",
        ephemeral: true,
      });
      return;
    }

    await interaction.reply({
      content: `Hey you ${username}, your wallet is ${userWallet.wallet}`,
      ephemeral: true,
    });
  },
};
