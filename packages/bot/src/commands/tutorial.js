const isEmpty = require("lodash/isEmpty");
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("tutorial")
    .setDescription("How to use the bot."),

  async execute(interaction) {
    const embed = new EmbedBuilder().setTitle("Tutorial").setColor("Random")
      .setDescription(`
        Hi! If this is your first time using me, the best tipping bot on Near, please follow these steps!

        1) First, use the command /setwallet to connect your Near wallet to your discord account. Now you'll be set to send and receive tokens!
        2) To send tokens, use the /send command. Take care with decimals! Depending on your computer configuration, it could work with comma "0,1" or dot "0.1".
        3) To verify which wallet is connected to your account, use the /verifywallet command.
        4) To change the wallet connected to your account, just use the /setwallet command again.
        5) Feel free to send us any feedback at the /feedback command!
      `);

    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
