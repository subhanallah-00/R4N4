module.exports = {
  config:{
    name: "fbvideo",
    version: "0.0.2",
    permission: 0,
    prefix: true,
    credits: "Nayan",
    description: "fb video",
    category: "user",
    usages: "",
    cooldowns: 5,
},

  languages: {
    "vi": {},
        "en": {
            "missing": '[ ! ] Input link.',
            "wait": '┏━━━━━<𝗠𝗘𝗗𝗜𝗔>━━━━━┓\n┃𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗜𝗡𝗚 𝗩𝗜𝗗𝗘𝗢 \n┃𝗙𝗢𝗥 𝗬𝗢𝗨 📥\n┃    ↻ ◁ || ▷ ↺\n┃  𝗣𝗟𝗘𝗔𝗦𝗦𝗘 𝗪𝗔𝗜𝗧\n┗━━━━[ 𝗥𝗔𝗡𝗔 𝗕𝗢𝗧 ]━━━┛',
          "down": '𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟 ✅',
          "error": '❌Error'
        }
    },

start: async function({ nayan, events, args, lang }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
  const { ytdown, ndown, tikdown, twitterdown } = require("rana-all-media-downloader")
    const { messageID, threadID } = events;
  if (!args[0]) return nayan.reply(lang("missing"), threadID, messageID);


    let np = args.join(" ");
   if (!args[1]) nayan.reply(lang("wait"), events.threadID, (err, info) => setTimeout(() => { nayan.unsendMessage(info.messageID) }, 20000));

 try {
    const res = await ndown(`${np}`);
console.log(res)
    var msg = [];
    let img1 = `${res.data[0].url}`;


    let imgs1 = (await axios.get(`${img1}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/fbvideo.mp4", Buffer.from(imgs1, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/fbvideo.mp4"));

    {
        msg += lang("down")
    }

    return nayan.reply({
        body: msg,
        attachment: allimage
    }, events.threadID, events.messageID);
} catch (err) {
    nayan.reply(lang("error"), events.threadID, events.messageID);  
   }
}
};
