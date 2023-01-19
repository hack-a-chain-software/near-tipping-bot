const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { formatDecimals } = require("../utils/formatDecimals");
const { viewFunction } = require("../utils/viewFunction");
const listServerTokens = require("../graphql/queries/listServerTokens");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lastservertips")
    .setDescription("Check out the latest transactions made on the server"),

  async execute(interaction) {
    const serverId = interaction.member.guild.id;

    const lastServerTips = await viewFunction("view_last_server_tips", {
      server: serverId,
    });

    const tokens = await listServerTokens(serverId);

    await interaction.member.guild.members.fetch();

    if (lastServerTips.length > 0) {
      const embed = new EmbedBuilder()
        .setTitle("Last server tips")
        .setColor("Random");

      lastServerTips.forEach(async ({ sender, receiver, coin, amount }) => {
        const userSender = interaction.member.guild.members.cache.find(
          (member) => member.user.id === sender
        );
        const userReceiver = interaction.member.guild.members.cache.find(
          (member) => member.user.id === receiver
        );

        const token = tokens.find(({ id }) => {
          if (coin === "$NEAR") {
            return id === "near";
          }
          return id === coin;
        });

        if (!token) {
          await interaction.reply({
            content: "Choose a token that is on the token list",
            ephemeral: true,
          });

          return;
        }

        if (!userSender || !userReceiver) {
          embed.addFields({
            name: userSender
              ? `Sender: ${userSender.user.tag}\nCoin: ${
                  token.metadata.name
                }\nAmount: ${formatDecimals(
                  amount,
                  token.metadata.decimals
                )}\n${
                  userReceiver
                    ? `Receiver: ${userReceiver.user.username}`
                    : "Receiver: User deleted or it's not part of that server"
                }`
              : "Sender: User deleted or it's not part of that server",
            value: "-------------------------------------------------------",
          });
          return;
        }

        embed.addFields({
          name: `Sender: ${
            userSender.user.username
          }\nCoin: ${coin}\nAmount: ${formatDecimals(
            amount,
            token.metadata.decimals
          )}\nReceiver: ${userReceiver.user.username}`,
          value: "-------------------------------------------------------",
        });
      });

      await interaction.reply({ embeds: [embed], ephemeral: true });
      return;
    }

    await interaction.reply({
      context: "No transaction so far",
      ephemeral: true,
    });
  },
};
