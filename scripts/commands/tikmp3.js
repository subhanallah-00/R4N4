module.exports.config = {
  name: "tikmp3",
  version: "2.0.0",
  permission: 0,
  credits: "Nayan",
  description: "Download video from facebook",
  prefix: true,
  category: "admin",
  usages: "link",
  cooldowns: 5,
  dependencies: {
        'image-downloader': '',
  }
};
module.exports.run = async function({ api, event, args }) {

  api.setMessageReaction("✅", event.messageID, (err) => {
  }, true);
  api.sendTypingIndicator(event.threadID, true);

  const { messageID, threadID } = event;
  const { nayan } = global.apiNayan;
  const fs = require("fs");
  const axios = require("axios");
  const request = require("request");
  const { ytdown, ndown, tikdown, twitterdown } = require("rana-all-media-downloader")
  const prompt = args.join(" ");
  if (!args[0]) return api.sendMessage("[ ! ] Input link.", threadID, messageID);

  const content = args.join(" ");
  if (!args[1]) api.sendMessage(`┏━━━━━<𝗠𝗘𝗗𝗜𝗔>━━━━━━┓\n┃  𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗜𝗡𝗚 𝗩𝗜𝗗𝗘𝗢 \n┃  𝗙𝗢𝗥 𝗬𝗢𝗨 📥\n┃    ↻ ◁ || ▷ ↺\n┃  𝗣𝗟𝗘𝗔𝗦𝗦𝗘 𝗪𝗔𝗜𝗧\n┗━━━━[ 𝗥𝗔𝗡𝗔 𝗕𝗢𝗧 ]━━━━┛`, event.threadID, (err, info) => setTimeout(() => { api.unsendMessage(info.messageID) }, 10000));

 try {
  const res = await tikdown(`${content}`);
console.log(res)
   var file = fs.createWriteStream(__dirname + '/cache/tik.mp3');

        const { audio, title, duration, author } = res.data;
        const rqs = request(encodeURI(`${audio}`));



  rqs.pipe(file);  
  file.on('finish', () => {

    setTimeout(function() {

      return api.sendMessage({
        body: `┏━━<𝐌𝐔𝐒𝐈𝐂 𝐓𝐈𝐊𝐓𝐎𝐊 >━━┓\n┃𝗧𝗶𝘁𝗹𝗲 𝗮𝘂𝗱𝗶𝗼: ${title}\n┃𝐍𝐈𝐂𝐊𝐍𝐀𝐍𝐄: ${author.nickname}\n┃𝐓𝐢𝐦𝐞: ${duration} second\n┃⇆ㅤ ㅤ◁ㅤ ❚❚ ㅤ▷ ㅤㅤ↻\n┗━━━━[ 𝗥𝗔𝗡𝗔 𝗕𝗢𝗧 ]━━━━┛`,
        attachment: fs.createReadStream(__dirname + '/cache/tik.mp3')
      }, threadID, messageID)
    }, 5000)
  })
    } catch (err) {
    api.sendMessage(`error`, event.threadID, event.messageID);  
   }
};
