const axios = require("axios");
const fs = require("fs-extra");
const Youtube = require("youtube-search-api");

module.exports = {
  config: {
    name: "song",
    version: "0.0.2",
    permission: 0,
    prefix: true,
    credits: "Nayan",
    description: "Listen Song",
    category: "user",
    usages: "name",
    cooldowns: 5,
  },

  handleReply: async function ({ api, event, handleReply }) {
    try {
      const { createReadStream, unlinkSync } = require("fs-extra");
      const choice = parseInt(event.body);
      if (isNaN(choice) || choice < 1 || choice > handleReply.link.length) {
        return api.sendMessage("❌ Invalid selection. Please try again.", event.threadID, event.messageID);
      }

      const url = `https://www.youtube.com/watch?v=${handleReply.link[choice - 1]}`;
      const apis = await axios.get('https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json')
      const n = apis.data.api
      const response = await axios.get(`${n}/nayan/download/yt?url=${url}&format=mp3`);
      console.log(response.data)
      const audioUrl = response.data.data.download_url;
      const title = response.data.data.title;

      const audioPath = `${__dirname}/cache/audio.mp3`;
      const audioData = (await axios.get(audioUrl, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(audioPath, audioData);

      const message = `✅ Downloaded Successfully\n🔰 TITLE: ${title}`;
      api.unsendMessage(handleReply.messageID)
      api.sendMessage(
        {
          body: message,
          attachment: createReadStream(audioPath),
        },
        event.threadID,
        () => unlinkSync(audioPath),
        event.messageID
      );
    } catch (err) {
      console.error(err);
      return api.sendMessage("❌ An error occurred while downloading the audio.", event.threadID, event.messageID);
    }
  },

  convertHMS: function (value) {
    const sec = parseInt(value, 10);
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec % 3600) / 60);
    let seconds = sec % 60;
    return [hours, minutes, seconds]
      .map((v) => (v < 10 ? "0" + v : v))
      .filter((v, i) => v !== "00" || i > 0)
      .join(":");
  },

  start: async function ({ nayan, events, args }) {
    try {
      if (!args[0]) {
        return nayan.sendMessage("❌ Please provide a YouTube link or search keyword.", events.threadID, events.messageID);
      }

      const input = args.join(" ");
      const path = `${__dirname}/cache/audio.mp3`;
      if (fs.existsSync(path)) fs.unlinkSync(path);

      if (input.startsWith("https://")) {

        const apis = await axios.get('https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json')
        const n = apis.data.api
        
        const response = await axios.get(`${n}/nayan/download/yt?url=${input}&format=mp3`);
        console.log(response.data)
        const audioUrl = response.data.data.download_url;
        const title = response.data.data.title;

        const audioData = (await axios.get(audioUrl, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(path, audioData);

        return nayan.sendMessage(
          {
            body: `✅ Downloaded Successfully\n🔰 TITLE: ${title}`,
            attachment: fs.createReadStream(path),
          },
          events.threadID,
          () => fs.unlinkSync(path),
          events.messageID
        );
      } else {
        
        const results = await Youtube.GetListByKeyword(input, false, 6);
        if (!results.items || results.items.length === 0) {
          return nayan.sendMessage("❌ No results found. Please try another keyword.", events.threadID, events.messageID);
        }

        const link = [];
        let msg = "🔍 Search Results:\n";
        results.items.forEach((video, index) => {
          link.push(video.id);
          msg += `${index + 1}. ${video.title} (${video.length.simpleText})\n\n`;
        });

        msg += "➡️ Reply with the number of the video you want to download.";
        return nayan.sendMessage(
          { body: msg },
          events.threadID,
          (error, info) =>
            global.client.handleReply.push({
              type: "reply",
              name: this.config.name,
              messageID: info.messageID,
              author: events.senderID,
              link,
            }),
          events.messageID
        );
      }
    } catch (err) {
      console.error(err);
      return nayan.sendMessage("❌ An error occurred. Please try again later.", events.threadID, events.messageID);
    }
  },
};
