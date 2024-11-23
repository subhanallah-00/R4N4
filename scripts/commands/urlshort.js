const tinyurl = require("tinyurl-api");

module.exports.config = {
  name: "short",
  version: "1.0.0",
  permission: 0,
  credits: "Rahad",
  description: "Shorten a URL using TinyURL",
  prefix: true, 
  category: "utility", 
  usages: "[URL]",
  cooldowns: 5,
  dependencies: {}
};

module.exports.run = async function ({ api, event, args }) {
    const url = args[0];

    if (!url) {
        api.sendMessage('Please provide a URL to shorten.', event.threadID, event.messageID);
        return;
    }

    try {
        const shortenedUrl = await tinyurl(url);
        api.sendMessage(shortenedUrl, event.threadID, event.messageID);
    } catch (error) {
        console.error(error);
        api.sendMessage('An error occurred while shortening the URL. Please try again later.', event.threadID, event.messageID);
    }
};
