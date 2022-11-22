const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("feedback")
    .setDescription("Send a feedback")
    .addStringOption((option) =>
      option
        .setName("feedback")
        .setDescription("send a feedback")
        .setRequired(true)
    ),

  async execute(interaction) {
    const { user } = interaction;

    // const serverId = interaction.member.guild.id;

    const feedback = interaction.options.getString("feedback");

    const message = new EmbedBuilder()
      .setTitle("Feedback")
      .setDescription(feedback)
      .setFooter({
        text: user.tag,
        iconURL: user.displayAvatarURL({ format: "png" }),
      })
      .setColor("Random");

    // await addFeedback(user.id, serverId, feedback);

    await interaction.client.guilds.cache
      .get(process.env.SERVER_ID)
      .channels.cache.get(process.env.FEEDBACK_CHANNEL_ID)
      .send({ embeds: [message] });

    await interaction.reply({
      content: "Your feedback has been sent",
      ephemeral: true,
    });
  },
};
