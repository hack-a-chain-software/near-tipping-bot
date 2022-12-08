const { SlashCommandBuilder } = require("discord.js");
const insertWallet = require("../graphql/mutations/insertWallet");
const findDuplicatePkError = require("../utils/findDuplicatePkError");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setwallet")
    .setDescription(
      "Set your near wallet (warning: required to receive tokens)"
    )
    .addStringOption((options) =>
      options
        .setName("wallet")
        .setDescription("Your near wallet eg. peter.near")
        .setRequired(true)
    ),

  async execute(interaction) {
    const nearWallet = interaction.options.getString("wallet");
    const { username, id } = interaction.user;
    const serverId = interaction.member.guild.id;

    try {
      await insertWallet(id, serverId, nearWallet);
      await interaction.reply({
        content: `Hey ${username}, your wallet: ${nearWallet} is set`,
        ephemeral: true,
      });
    } catch ({ graphQLErrors }) {
      if (findDuplicatePkError(graphQLErrors)) {
        await interaction.reply({
          content: "You already have a registered wallet in this server",
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
