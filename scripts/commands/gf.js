const axios = require("axios");
const fs = require("fs");
const request = require("request");

const link = [
  "https://i.imgur.com/IC9zjVq.jpeg",
  "https://i.imgur.com/r0Ksgwm.jpeg",
  "https://i.imgur.com/b8GBQF3.jpeg",
  "https://i.imgur.com/b4RwCkO.jpeg",
  "https://i.imgur.com/39q1VO3.jpeg ",
  "https://i.imgur.com/llyOW3C.jpeg ",
  "https://i.imgur.com/Mv5zu3h.jpeg",
  "https://i.imgur.com/nasSwNe.jpeg ",
  "https://i.imgur.com/yxoOd8o.jpeg",
  "https://i.imgur.com/Dt6Cokc.jpeg",
  "https://i.imgur.com/nriKSE9.jpeg ",
  "https://i.imgur.com/flUAZT0.jpeg",
  "https://i.imgur.com/HSFylAY.jpeg",
  "https://i.imgur.com/tUIrO6n.jpeg ",
  "https://i.imgur.com/QD6L0XW.jpeg"

];

module.exports.config = {
  name: "gf",
  version: "1.0.0",
  permssion: 0,
  credits: "Islamick Cyber Chat",
  prefix :true,
  description: "auto reply to gf",
  category: "noprefix",
  usages: "gf",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.handleEvent = async ({ api, event, Threads }) => {
  const content = event.body ? event.body : '';
    const body = content.toLowerCase();
  if (body.startsWith("gf de")) {
    const rahad = [
      "___ღ❥︎🦋💚ツ༉এই নে তোর Gf দিছি তাও লুচ্চামি করা বন্ধ কর ꨄ︎⁂༄🤟🤟🖤\n\nhttps://facebook.com/RANA.IS.BUSY.OKAY \n\n𝗔𝗗𝗠𝗜𝗡\n╰┈➤ ❝ [𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰] ❞",

"༊༎এই নে তোর Gf খুশি থাক তাও বারবাতারির পিছনে ঘুরিস নাহ─༅༎•😁😹༅༎•\n\nhttps://facebook.com/RANA.IS.BUSY.OKAY \n\n𝗔𝗗𝗠𝗜𝗡\n╰┈➤ ❝ [𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰] ❞ ",

"༄⁂🤍♡︎এই নে তরে Gf দিয়ে বাচাইয়া দিছি-!!😹 \n এখন থেকে আর কারো গ্রুপ ঝাইয়া কান্দিস না︵🦋❤️‍🩹🤧\n\nhttps://facebook.com/RANA.IS.BUSY.OKAY \n\n𝗔𝗗𝗠𝗜𝗡\n╰┈➤ ❝ [𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰] ❞",

"༄❥︎এই নে তোরে Gf দিছি তাও ভাই মেয়েদের ওই দিকে তাকাইস নাহ-!!🥺 ❞༏༏\n\n https://facebook.com/RANA.IS.BUSY.OKAY \n\n𝗔𝗗𝗠𝗜𝗡\n╰┈➤ ❝ [𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰] ❞",

"❞༎༊এই নে তোরে Gf দিলাম চিন্তা করিস না খুব সুখে রাখবে তোরে কান্দিস নাহ আর-!!🤧🫣࿐🌚🐸\n\nhttps://facebook.com/RANA.IS.BUSY.OKAY \n\n𝗔𝗗𝗠𝗜𝗡\n╰┈➤ ❝ [𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰] ❞",
"এই নে তোর Gf এখন থেকে আমারে Respect দিয়া কথা বলবি-!!😾😾👈\n\nhttps://facebook.com/RANA.IS.BUSY.OKAY \n\n𝗔𝗗𝗠𝗜𝗡\n╰┈➤ ❝ [𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰] ❞",

"ღ᭄✨🍓>-এই নে তোর  GF এখন থেকে পাঁচ ওয়াক্ত নামাজ পরবি_______😾🦋࿐\n\nhttps://facebook.com/RANA.IS.BUSY.OKAY \n\n𝗔𝗗𝗠𝗜𝗡\n╰┈➤ ❝ [𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰] ❞",

"❥┈•༏༏༏❝এই নে তোর Gf এখন থেকে সবার পোস্টে রিয়েক্ট দিবি-!!😾😈\n\nhttps://facebook.com/RANA.IS.BUSY.OKAY \n\n𝗔𝗗𝗠𝗜𝗡\n╰┈➤ ❝ [𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰] ❞",

"༊❝এই নে তোর Gf আজকের পর থেকে কোনো মেয়েদের দিকে তাকালে ঘুসি দিয়ে তোর নাক ফাটিয়ে ফেলবো-!! 😾👊༆᭄\n\nhttps://facebook.com/RANA.IS.BUSY.OKAY \n\n𝗔𝗗𝗠𝗜𝗡\n╰┈➤ ❝ [𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰] ❞",

"⎯͢⎯⃝─•💙᭄🌸এই নে তোরে Gf দিলাম আজ থেকে বুইড়া বুইড়া বেডি গুলার দিকে আর তাকাইস না-|ღ᭄😌\n\nhttps://facebook.com/RANA.IS.BUSY.OKAY \n\n𝗔𝗗𝗠𝗜𝗡\n╰┈➤ ❝ [𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰] ❞",

"𝄞⋆⃝✿এই নে তোরে Gf দিছি আজ থেকে আর খারাপ কাজ করিস নাহ-!!✨💜\n\n https://facebook.com/RANA.IS.BUSY.OKAY \n\n𝗔𝗗𝗠𝗜𝗡\n╰┈➤ ❝ [𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰] ❞",


"༆᭄😐__এই নে তোর Gf একে নিয়ে তর জীবন টাকে সুন্দর  করে তোল ⋆⃝𝄞✿🦋༊࿐\n\nhttps://facebook.com/RANA.IS.BUSY.OKAY \n\n𝗔𝗗𝗠𝗜𝗡\n╰┈➤ ❝ [𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰] ❞", 

"💚🌸ღ᭄এই নে তোকে Gf দিলাম আজ থেকে আল্লাহর কালাম ছারিস নাহ︵🩷🪽🌼︵┼🩵🪽─\n\nhttps://facebook.com/RANA.IS.BUSY.OKAY \n\n𝗔𝗗𝗠𝗜𝗡\n╰┈➤ ❝ [𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰] ❞",

"︵❝།།💖🌸নে তোর Gf  আজ থেকে আর হারাম কাজ করিস না....!🖤🤲📿\n\n https://facebook.com/RANA.IS.BUSY.OKAY \n\n𝗔𝗗𝗠𝗜𝗡\n╰┈➤ ❝ [𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰] ❞",

"༉༎༉💙🐰এই নে তোর Gf আজ থেকে আর অন্যের Gf কে দেখে কান্দিস না🫣🌚🐸࿐\n\nhttps://facebook.com/RANA.IS.BUSY.OKAY \n\n𝗔𝗗𝗠𝗜𝗡\n╰┈➤ ❝ [𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰] ❞"

    ];
    const rahad2 = rahad[Math.floor(Math.random() * rahad.length)];

    const callback = () => api.sendMessage({
      body: `${rahad2}`,
      attachment: fs.createReadStream(__dirname + "/cache/2024.jpeg")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.jpeg"), event.messageID);

    const requestStream = request(encodeURI(link[Math.floor(Math.random() * link.length)]));
    requestStream.pipe(fs.createWriteStream(__dirname + "/cache/2024.jpeg")).on("close", () => callback());
    return requestStream;
  }
};

module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
    "successText": `🧠`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
};

module.exports.run = async ({ api, event, Threads, getText }) => {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["gf"] === "undefined" || data["gf"]) data["gf"] = false;
  else data["gf"] = true;
  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["gf"]) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};
