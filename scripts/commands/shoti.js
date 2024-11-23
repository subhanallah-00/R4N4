module.exports.config = {
  name: "shoti",
  version: "1.0.0",
  permission: 0,
  credits: "Rahad",
  description: "Generate a random tiktok video",
  prefix: true, 
  category: "Entertainment", 
  usages: "",
  cooldowns: 5,
  dependencies: {}
};

const fs = require("fs");
const axios = require("axios");
const request = require("request");

module.exports.handleEvent = async ({ api, event }) => {
  if (event.body.startsWith(`${module.exports.config.name}`)) {
    try {
      const args = event.body.slice(module.exports.config.prefix.length + module.exports.config.name.length).trim().split(/ +/);
      await module.exports.run({ api, event, args });
    } catch (error) {
      console.error("Error handling shoti command:", error);
    }
  }
};

module.exports.run = async ({ api, event, args }) => {
  api.setMessageReaction("⏳", event.messageID, (err) => {}, true);

  try {
    const response = await axios.post(`https://your-shoti-api.vercel.app/api/v1/get`, { apikey: `$shoti-1hjvb0q3sokk2bvme` });

    const path = __dirname + `/cache/shoti/shoti.mp4`;
    const file = fs.createWriteStream(path);
    const rqs = request(encodeURI(response.data.data.url));
    rqs.pipe(file);

    file.on(`finish`, () => {
      setTimeout(function() {
        api.setMessageReaction("✅", event.messageID, (err) => {}, true);
        return api.sendMessage({
          body: `Downloaded Successfully.\n\nUsername: @${response.data.data.user.username}\nUser Nickname: ${response.data.data.user.nickname}\nUser ID: ${response.data.data.user.userID}\nDuration: ${response.data.data.duration}`,
          attachment: fs.createReadStream(path)
        }, event.threadID);
      }, 5000);
    });

    file.on(`error`, (err) => {
      api.reply(`Error: ${err}`, event.threadID, event.messageID);
    });
  } catch (err) {
    api.reply(`Error: ${err}`, event.threadID, event.messageID);
  }
};
                                  
