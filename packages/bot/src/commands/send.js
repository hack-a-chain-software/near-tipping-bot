const { SlashCommandBuilder } = require("discord.js");
const getSendParameters = require("../graphql/queries/getSendParameters");
const listServerTokens = require("../graphql/queries/listServerTokens");

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
    .addStringOption((option) =>
      option
        .setName("amount")
        .setDescription("The amount of Tokens to be sent")
        .setRequired(true)
    )
    .addUserOption((option) =>
      option
        .setName("receiver")
        .setDescription("The receiving user (wallet must be saved)")
        .setRequired(true)
    ),

  async autocomplete(interaction) {
    const serverId = interaction.member.guild.id;

    const tokens = await listServerTokens(serverId);

    const focusedValue = interaction.options.getFocused();

    const filtered = tokens.filter((choice) => {
      const { name = "", symbol = "" } = choice?.metadata || {};

      const focusedLowerCase = focusedValue.toLowerCase();

      return (
        name.toLowerCase().includes(focusedLowerCase) ||
        symbol.toLowerCase().includes(focusedLowerCase)
      );
    });

    await interaction.respond(
      filtered.map((token) => ({ name: token.metadata.name, value: token.id }))
    );
  },

  async execute(interaction) {
    const burnWallet = null;

    const { user: sender } = interaction;
    const serverId = interaction.member.guild.id;

    const tokenId = interaction.options.getString("token");
    const amount = interaction.options.getString("amount");
    const receiver = interaction.options.getUser("receiver");

    const {
      token,
      wallet,
      // TODO: make it work without autocomplete (fetch by token name if necessary)
    } = await getSendParameters(serverId, receiver.id, tokenId);

    if (!token) {
      await interaction.reply({
        content:
          "That token is unavailable. Please, pick one of the tokens listed on this server",
        ephemeral: true,
      });

      return;
    }

    if (!wallet) {
      await interaction.reply({
        content: `Hey ${receiver}, ${sender} is trying to send you ${amount} ${token.metadata.name}. Please, register your wallet using /setwallet`,
        ephemeral: false,
      });

      return;
    }

    await interaction.reply({
      content: `Click the link to transfer: https://peterthebot.com/transaction?token=${
        token.id
      }&amount=${amount.replace(
        /,/g,
        "."
      )}&receiver=${wallet}&burner=${burnWallet}`,
      ephemeral: true,
    });
  },
};
