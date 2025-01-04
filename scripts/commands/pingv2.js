module.exports = {
  config: {
    name: 'pingv2',
    aliases: ['p'],
    permission: 0,
    prefix: 'both'
  },
  start: async ({ event, api }) => {
    await api.sendMessage(event.threadId, { text: 'Pong!' });
  },
};
