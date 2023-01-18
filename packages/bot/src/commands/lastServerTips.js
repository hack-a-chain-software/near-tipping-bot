const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { viewFunction } = require("../utils/viewFunction");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lastservertips")
    .setDescription(
      "Veja as ultimas 5 transacoes que foram feitas no servidor"
    ),

  async execute(interaction) {
    const serverId = interaction.member.guild.id;

    const lastServerTips = await viewFunction("view_last_server_tips", {
      server: serverId,
    });

    console.log(lastServerTips);

    const embed = new EmbedBuilder()
      .setTitle("Last server tips")
      .setDescription("Aqui esta as 5 ultimas transcoes feitas no servidor");

    [1, 2, 3, 4, 5].forEach((item) =>
      embed.addFields({ name: item, value: item })
    );

    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
