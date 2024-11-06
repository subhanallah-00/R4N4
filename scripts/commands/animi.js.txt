const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "anime",
    version: "1.0.0",
    permission: 2,
    credits: "nayan",
    description: "Fetch Anime data",
    prefix: 'awto',
    category: "Anime",
    usages: "[name]",
    cooldowns: 5,
  },

  handleReply: async function ({ api, event, handleReply }) {
    try {
      const kl = await axios.get(`https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json`);
      const apiUrl = kl.data.api2;
      const { messageID, threadID } = event;

      if (handleReply.Episode) {
        const selectedEpisodeIndex = parseInt(event.body.trim()) - 1;

        if (isNaN(selectedEpisodeIndex) || selectedEpisodeIndex < 0 || selectedEpisodeIndex >= handleReply.Episode.length) {
          return api.sendMessage('Invalid selection. Please choose a valid number.', threadID, messageID);
        }

        const selectedEpisode = handleReply.Episode[selectedEpisodeIndex];
        const nnn = selectedEpisode.episode || selectedEpisode.name;

        try {
          const downloadData = await axios.get(`${apiUrl}/nayan/anime?type=download&url=${selectedEpisode.url}`);
          const downloadLinks = downloadData.data.videos;

          let downloadMessage = `Download Links for Episode ${nnn}:\n\nPlay Url:\n`;

          if (downloadLinks && downloadLinks.length > 0) {
            downloadLinks.forEach((video, index) => {
              downloadMessage += `${index + 1}» Link: ${video.videoLink}\n`;
            });
          } else {
            downloadMessage += "No Play URLs available.\n";
          }

          downloadMessage += `\nDownload Links:\n`;

          if (downloadLinks && downloadLinks.length > 0) {
            downloadLinks.forEach((video, index) => {
              downloadMessage += `${index + 1}» Link: ${video.downloadLink || 'N/A'}\n`;
            });
          } else {
            downloadMessage += "No download links available.\n";
          }

          return api.sendMessage(downloadMessage, threadID, messageID);
        } catch (downloadError) {
          console.error('Error fetching download links:', downloadError);
          return api.sendMessage('An error occurred while fetching the download links. Please try again later.', threadID, messageID);
        }
      }

      const { link } = handleReply;
      try {
        const data = await axios.get(`${apiUrl}/nayan/anime?type=episode&url=${link[event.body - 1]}`);
        const categorizedLinks = data.data.episodes;

        let EpisodeMessage = `Select Episode:\n\n`;
        let availableQualities = [];

        categorizedLinks.forEach((item, index) => {
          const nm = item.episode;
          EpisodeMessage += `${index + 1}» Episode ${nm}\n`;
          availableQualities.push({ episode: nm, url: item.link });
        });

        if (availableQualities.length === 0) {
          EpisodeMessage = "Sorry, no episodes are available for this anime.";
        }

        api.sendMessage({ body: EpisodeMessage }, threadID, (error, info) => {
          if (error) {
            console.error('Error replying to user:', error);
            return api.sendMessage('An error occurred while processing your request. Please try again later.', threadID, messageID);
          }

          global.client.handleReply.push({
            type: 'reply',
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            Episode: availableQualities
          });
        }, messageID);
      } catch (EpisodeError) {
        console.error('Error fetching available Episode:', EpisodeError);
        return api.sendMessage('An error occurred while fetching available Episode. Please try again later.', threadID, messageID);
      }

    } catch (error) {
      console.log(error);
      return api.sendMessage('An error occurred while processing your request.', threadID, messageID);
    }
  },

  start: async function ({ nayan, events, args }) {
    try {
      const kl = await axios.get(`https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json`);
      const apiUrl = kl.data.api2;
      const msg = args.join(" ");
      const { messageID, threadID } = events;

      if (!args[0]) {
        return nayan.reply(`Usage:\n${global.config.PREFIX}${this.config.name} [anime name]`, events.threadID, events.messageID);
      }

      const response = await axios.get(`${apiUrl}/nayan/anime?type=searchName&name=${encodeURIComponent(msg)}`);
      const animes = response.data.results;

      if (animes.length === 0) {
        return nayan.reply('No Anime found for the search query.', events.threadID, events.messageID);
      }

      let message = 'Here are the Anime you searched for:\n\n';
      let imgData = [];
      let li = [];

      for (let num = 0; num < animes.length; num++) {
        const anime = animes[num];
        message += `» ${num + 1} - ${anime.title}\n`;
        li.push(anime.link);

        const imageResponse = await axios.get(anime.imageUrl, { responseType: 'arraybuffer' });
        const imagePath = path.join(__dirname, `/cache/${num + 1}.jpg`);
        fs.writeFileSync(imagePath, imageResponse.data);
        imgData.push(fs.createReadStream(imagePath));
      }

      nayan.reply({ body: message, attachment: imgData }, events.threadID, (error, info) => {
        if (error) {
          return nayan.reply('An error occurred while processing your request. Please try again later.', events.threadID, events.messageID);
        }

        global.client.handleReply.push({
          type: 'reply',
          name: this.config.name,
          messageID: info.messageID,
          author: events.senderID,
          link: li,
        });
      }, events.messageID);

    } catch (error) {
      console.log(error);
      nayan.reply('An error occurred while fetching anime data. Please try again later.', events.threadID, events.messageID);
    }
  }
};
