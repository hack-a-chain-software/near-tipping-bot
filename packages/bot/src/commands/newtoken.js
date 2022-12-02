const {
  SlashCommandBuilder,
  ModalBuilder,
  TextInputBuilder,
  ActionRowBuilder,
  TextInputStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("newtoken")
    .setDescription("Request to add a new token to the list"),

  async execute(interaction) {
    const modal = new ModalBuilder()
      .setCustomId("requestTokenModal")
      .setTitle("Request a new token");

    const tokenInput = new TextInputBuilder()
      .setCustomId("tokenName")
      .setLabel("Which token do you want ?")
      .setPlaceholder("Etherium")
      .setRequired(true)
      .setMinLength(2)
      .setStyle(TextInputStyle.Short);

    const addressInput = new TextInputBuilder()
      .setCustomId("address")
      .setLabel("Which address near ?")
      .setPlaceholder("Near address")
      .setRequired(true)
      .setMinLength(2)
      .setStyle(TextInputStyle.Short);

    const firstActionRow = new ActionRowBuilder().addComponents(tokenInput);
    const secondActionRow = new ActionRowBuilder().addComponents(addressInput);

    modal.addComponents(firstActionRow, secondActionRow);

    await interaction.showModal(modal);
  },
};
