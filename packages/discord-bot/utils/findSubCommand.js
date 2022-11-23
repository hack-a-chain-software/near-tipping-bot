const help = [
  {
    id: 1,
    commandName: "addtoken",
    message:
      "This command is used to add a new token to your server's token list. To use simply select a token from the list of available tokens and send the command.",
  },
  {
    id: 2,
    commandName: "alltokens",
    message:
      "This command is only for listing all tokens in your server's token list. To use just select it, send the command and a list of tokens will be displayed to you.",
  },
  {
    id: 3,
    commandName: "commands",
    message:
      "This command is used to list all available bot commands. To use just select it, send the command and a list of commands will be displayed to you.",
  },
  {
    id: 4,
    commandName: "feedback",
    message:
      "This command is to send feedback to our team of developers. To use just select the command, enter your message and send the command, with this your feedback will be sent to our team.",
  },
  {
    id: 5,
    commandName: "newtoken",
    message:
      "This command is to make a request to add a token of interest to our token list if the token is not already in the list. To use, select the command, so you will open a modal with two fields for you to fill, the name of the token you want, and the near address of the same. After sending, your request will arrive to our team and will be analyzed.",
  },
  {
    id: 6,
    commandName: "register",
    message:
      "This command serves to register your server in our bot and be able to use the commands freely. It is quite simple to use, just select it and send the command that your server will be registered in the bot if it is not yet.",
  },
  {
    id: 7,
    commandName: "removetoken",
    message:
      "This command is used to remove a token from the token list from your server. To use simply select the token you want to remove from the list and send the command.",
  },
  {
    id: 8,
    commandName: "send",
    message:
      "This command is used to make transfers between server users. To use it you must select the token you want, inform the quantity and finally inform which user you want to transfer to.",
  },
  {
    id: 9,
    commandName: "setwallet",
    message:
      "This command is used to setar your wallet in our bot so that you can receive transfers. To use just select the command and send.",
  },
  {
    id: 10,
    commandName: "verifyserver",
    message:
      "This command serves to verify that your server is already registered in our bot. To use simply select the command, send it and then a message will be displayed whether or not it is registered.",
  },
  {
    id: 11,
    commandName: "verifywallet",
    message:
      "This command serves to verify that you already have a registered wallet in the bot. To use simply select the command, send it and then a message will be displayed whether or not you have a registered wallet.",
  },
];

module.exports = (subcommand) => {
  const { message } = help.find(
    ({ commandName }) => commandName === subcommand
  );

  return message;
};
