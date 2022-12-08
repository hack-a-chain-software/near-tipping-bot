const commandsHandler = require("./commands");
const eventsHandler = require("./events");

const handlers = [commandsHandler, eventsHandler];

module.exports = {
  async initializeHandlers(client) {
    await Promise.all(handlers.map((handler) => handler(client)));
  },
};
