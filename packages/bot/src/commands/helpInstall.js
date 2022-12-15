const isEmpty = require("lodash/isEmpty");
const {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("helpinstall")
    .setDescription("How to configure the bot.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction) {
    const embed = new EmbedBuilder().setTitle("Welcome").setColor("Random")
      .setDescription(`
        Thank you for installing me, the best tipping bot on NEAR!

        For everything to work properly, please, follow these steps:
        1) First, use the /register command to register the bot on this server.
        2) Second, use the /addtoken command to choose which tokens to make available on your server.

        Done! Now the I'm installed at your server! Every time you wish to add a new token, just use the /addtoken command again!

        For more information about the commands, please, use /help!
      `);

    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
