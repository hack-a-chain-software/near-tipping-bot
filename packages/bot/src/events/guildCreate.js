const { Events, EmbedBuilder } = require("discord.js");

const steps = [
  {
    name: "1 - Register server",
    value:
      "An administrator must use the command /register to enable the server utilization - you won't be able to use the bot without registering it",
  },
  {
    name: "2 - Enable tokens",
    value:
      "Use the /addtoken command to choose which tokens to make available on your server.",
  },
  {
    name: "3 - Set wallet",
    value:
      "Use the /setwallet command to add the address of the wallet you want to receive tokens from other users.",
  },
  {
    name: "4 - Send tokens",
    value: "Use the /send command to send tokens to anyone on your server.",
  },
];

module.exports = {
  name: Events.GuildCreate,
  async execute(guild) {
    const tutorial = new EmbedBuilder()
      .setTitle("Configuration tutorial")
      .setDescription(
        "Hi, thanks for inviting me to this server. Here is a tutorial on my configuration:"
      )
      .setColor("Random");

    steps.forEach(({ name, value }) => tutorial.addFields({ name, value }));

    const channel = guild.channels.cache.find((channel) => channel.type === 0);

    channel.send({ embeds: [tutorial] });
  },
};
