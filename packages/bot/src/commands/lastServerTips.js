const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { formatDecimals } = require("../utils/formatDecimals");
const { viewFunction } = require("../utils/viewFunction");
const listServerTokens = require("../graphql/queries/listServerTokens");
const isEmpty = require("lodash/isEmpty");

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

    if (isEmpty(lastServerTips)) {
      await interaction.reply({
        context: "No transactions so far",
        ephemeral: true,
      });

      return;
    }
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
              }\nAmount: ${formatDecimals(amount, token.metadata.decimals)}\n${
                userReceiver
                  ? `Receiver: ${userReceiver.user.username}`
                  : "Receiver: User deleted or is not part of this server"
              }`
            : "Sender: User deleted or is not part of this server",
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
  },
};
