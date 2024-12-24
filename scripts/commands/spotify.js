const axios = require("axios");
const fs = require("fs");
const { createReadStream, unlinkSync } = require("fs-extra");

module.exports = {
  config: {
    name: "spotify",
    version: "1.0.0",
    permission: 0,
    credits: "Nayan",
    description: "Download music from Spotify by URL or search",
    prefix: true,
    category: "Media",
    usages: "spotify [url|search]",
    cooldowns: 5,
    dependencies: {
      axios: ""
    }
  },

  handleReply: async function ({ api, event, handleReply, NAYAN}) {
    try {
      const songData = handleReply.results[event.body - 1];
      const response = await axios.get(
        `https://nayan-video-downloader.vercel.app/spotifyDl?url=${songData.link}`
      );
      const { title, artistNames, duration, download_url } = response.data.data;

      const filePath = `${__dirname}/cache/${title}.mp3`;
      const writer = fs.createWriteStream(filePath);

      const fileStream = await axios({
        url: download_url,
        method: "GET",
        responseType: "stream"
      });
      fileStream.data.pipe(writer);

      writer.on("finish", async () => {
        const fileSize = fs.statSync(filePath).size;
        if (fileSize > 26214400) {
          api.sendMessage(
            "The file is too large to send (over 25MB).",
            event.threadID,
            event.messageID
          );
          return unlinkSync(filePath);
        }

        api.unsendMessage(handleReply.messageID);
        api.setMessageReaction("✔️", event.messageID, (err) => {}, true);

        api.sendMessage(
          `🎵 Title: ${title}\n🎤 Artist(s): ${artistNames.join(", ")}\n🕒 Duration: ${duration}\n`,
          event.threadID,
          async () => {
            api.sendMessage(
              {
                attachment: createReadStream(filePath)
              },
              event.threadID,
              () => unlinkSync(filePath),
              event.messageID
            );
          }
        );
      });
    } catch (error) {
      api.setMessageReaction("❌", event.messageID, (err) => {}, true);
      
      api.sendMessage(
        "An error occurred while processing your request. Please try again later.",
        event.threadID,
        event.messageID
      );
    }
  },

  start: async function ({ nayan, events, args, NAYAN }) {
    const input = args.join(" ");
    if (!input) {
      return nayan.sendMessage(
        "Please provide a Spotify URL or a search keyword.",
        events.threadID,
        events.messageID
      );
    }

    if (input.startsWith("https://open.spotify.com/")) {
      
      try {
        const response = await axios.get(
          `https://nayan-video-downloader.vercel.app/spotifyDl?url=${input}`
        );
        const { title, artistNames, duration, download_url } =
          response.data.data;

        NAYAN.react("✔️")
        const filePath = `${__dirname}/cache/${title}.mp3`;
        const writer = fs.createWriteStream(filePath);

        const fileStream = await axios({
          url: download_url,
          method: "GET",
          responseType: "stream"
        });
        fileStream.data.pipe(writer);

        writer.on("finish", async () => {
          const fileSize = fs.statSync(filePath).size;
          if (fileSize > 26214400) {
            nayan.sendMessage(
              "The file is too large to send (over 25MB).",
              events.threadID,
              events.messageID
            );
            return unlinkSync(filePath);
          }

          nayan.sendMessage(
            `🎵 Title: ${title}\n🎤 Artist(s): ${artistNames.join(", ")}\n🕒 Duration: ${duration}\n`,
            events.threadID,
            async () => {
              nayan.sendMessage(
                {
                  attachment: createReadStream(filePath)
                },
                events.threadID,
                () => unlinkSync(filePath),
                events.messageID
              );
            }
          );
        });
      } catch (error) {
        NAYAN.react("❌")
        
        nayan.sendMessage(
          "Failed to download the song. Please check the URL and try again.",
          events.threadID,
          events.messageID
        );
      }
    } else {
    
      try {
        const response = await axios.get(
          `https://nayan-video-downloader.vercel.app/spotify-search?name=${encodeURIComponent(
            input
          )}&limit=5`
        );

        const results = response.data.results;
        if (!results.length) {
          return nayan.sendMessage(
            "No results found for your search.",
            events.threadID,
            events.messageID
          );
        }

        let message = "🎧 Search Results:\n\n";
        results.forEach((song, index) => {
          message += `${index + 1}. ${song.name} by ${song.artists}\n\n`;
        });
        message += "Reply with the number to select a song to download.";
        NAYAN.react("✅")

        nayan.sendMessage(
          {
            body: message
          },
          events.threadID,
          (error, info) =>
            global.client.handleReply.push({
              type: "reply",
              name: this.config.name,
              messageID: info.messageID,
              author: events.senderID,
              results
            }),
          events.messageID
        );
      } catch (error) {
        NAYAN.react("❌")
        
        nayan.sendMessage(
          "Failed to search for the song. Please try again later.",
          events.threadID,
          events.messageID
        );
      }
    }
  }
};
