const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const sendFeedback = require("../graphql/mutations/sendFeedback");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("feedback")
    .setDescription("Send a feedback")
    .addStringOption((option) =>
      option
        .setName("feedback")
        .setDescription("Send a feedback")
        .setRequired(true)
    ),

  async execute(interaction) {
    const { user } = interaction;

    const serverId = interaction.member.guild.id;

    const feedback = interaction.options.getString("feedback");

    const message = new EmbedBuilder()
      .setTitle("Feedback")
      .setDescription(feedback)
      .setFooter({
        text: user.tag,
        iconURL: user.displayAvatarURL({ format: "png" }),
      })
      .setColor("Random");

    await sendFeedback(user.id, serverId, user.username, feedback);

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
