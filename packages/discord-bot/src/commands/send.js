const { SlashCommandBuilder } = require("discord.js");
const listServerTokens = require("../graphql/queries/listServerTokens");
const findUserWallet = require("../graphql/queries/findUserWallet");
const findToken = require("../graphql/queries/findToken");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("send")
    .setDescription("Transfer tokens to your friends")
    .addStringOption((option) =>
      option
        .setName("token")
        .setDescription("Select your token from the list")
        .setAutocomplete(true)
        .setRequired(true)
    )
    .addNumberOption((option) =>
      option
        .setName("amount")
        .setDescription("The amount of Tokens to be sent")
        .setRequired(true)
    )
    .addUserOption((option) =>
      option
        .setName("address")
        .setDescription("The receiving user (wallet must be saved)")
        .setRequired(true)
    ),

  async autocomplete(interaction) {
    const serverId = interaction.member.guild.id;

    const tokens = await listServerTokens(serverId);

    const focusedValue = interaction.options.getFocused();

    const filtered = tokens.filter((choice) =>
      choice.metadata.name.startsWith(focusedValue)
    );

    await interaction.respond(
      filtered.map((token) => ({ name: token.metadata.name, value: token.id }))
    );
  },

  async execute(interaction) {
    const burnWallet = null;

    const { user: username } = interaction;

    const serverId = interaction.member.guild.id;

    const amount = interaction.options.getNumber("amount");

    const address = interaction.options.getUser("address");

    const tokenId = interaction.options.getString("token");

    const userWallet = await findUserWallet(address.id, serverId);

    const token = await findToken(tokenId, serverId);

    if (!token) {
      await interaction.reply({
        content:
          "That token is unavalible. Please, pick one of the tokens listed on this server",
        ephemeral: true,
      });

      return;
    }

    if (!userWallet) {
      await interaction.reply({
        content: `Hey ${address}, ${username} is trying to send you ${amount} ${token.metadata.name}. Please, register your wallet using /setwallet `,
        ephemeral: false,
      });

      return;
    }

    await interaction.reply({
      content: `Click the link to transfer: https://peterthebot.com?token=${token.metadata.name}&amount=${amount}&receiver=${userWallet.node.wallet}&burner=${burnWallet}`,
      ephemeral: true,
    });
  },
};
