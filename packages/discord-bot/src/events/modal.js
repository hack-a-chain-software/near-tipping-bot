const { Events, EmbedBuilder } = require("discord.js");

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (!interaction.isModalSubmit()) return;

    const token = interaction.fields.getTextInputValue("tokenName");

    const address = interaction.fields.getTextInputValue("address");

    const { user } = interaction;

    const message = new EmbedBuilder()
      .setTitle("New token request")
      .setDescription(token)
      .setFooter({
        text: user.tag,
        iconURL: user.displayAvatarURL({ format: "png" }),
      })
      .setColor("Random");

    message.addFields({ name: "Address", value: address });

    await interaction.client.guilds.cache
      .get(process.env.SERVER_ID)
      .channels.cache.get(process.env.REQUEST_CHANNEL_ID)
      .send({ embeds: [message] });

    await interaction.reply({
      content: "Your request has been sent",
      ephemeral: true,
    });
  },
};
