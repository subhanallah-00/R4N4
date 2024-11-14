const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs");
module.exports.config = {
  name: "day",
  version: "1.0.2",
  permission: 0,
  credits: "nazrul",
  description: "beginner's guide",
  prefix: true,
  category: "guide",
  usages: "[Shows Commands]",
  cooldowns: 5,
  envConfig: {
    autoUnsend: true,
    delayUnsend: 60
  }
};

module.exports.run = async function ({ api, event, args, Currencies, Users }) {
   const axios = require("axios")
var { threadID, messageID, body } = event,{ PREFIX } = global.config;
  async function streamURL(url, mime='jpg') {
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`,
    downloader = require('image-downloader'),
    fse = require('fs-extra');
    await downloader.image({
        url, dest
    });
    setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
    return fse.createReadStream(dest);
};
const moment = require("moment-timezone");
var ngay = moment.tz('Asia/Dhaka').format('D/MM/YYYY');
var gio = moment.tz('Asia/Dhaka').format('HH:mm:ss');
var thu = moment.tz('Asia/Dhaka').format('dddd');
  var thang = moment.tz("Asia/Dhaka").format('MM');
  var nam = moment.tz("Asia/Dhaka").format('YYYY');
if (thu == 'Sunday') thu = 'রবিবার'
if (thu == 'Monday') thu = 'সোমবার'
if (thu == 'Tuesday') thu = 'মঙ্গলবার'
if (thu == 'Wednesday') thu = 'বুধবার'
if (thu == "Thursday") thu = 'বৃহস্পতিবার'
if (thu == 'Friday') thu = 'শুক্রবার'
if (thu == 'Saturday') thu = 'শনিবার'
  const res = await axios.get(`https://golike.com.vn/func-api.php?user=${event.senderID}`);
  const finduid = res.data.data.uid
  const finddate = res.data.data.date
let name = await Users.getNameUser(event.senderID);
   let
  s = process.uptime(),u = [s/3600<<0, s/60%60<<0, s%60<<0].map(el => el < 10?'0'+el: el);
return api.sendMessage({body:`🌀𝗛𝗲𝗹𝗹𝗼: ${name}\n
🌀𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: ${name}\n
🌀𝗛𝗼𝘂𝗿: ${gio}\n
🌀𝗗𝗮𝘆: ${ngay} ${thu}\n
🌀𝗬𝗲𝗮𝗿: ${nam}\n
🌀𝗥𝘂𝗻𝗻𝗶𝗻𝗴: ${u.join(':')}\n━━━━━━━━━━━━━━━━━━ 🌿 𝗖𝗥𝗘𝗗𝗜𝗧: 𝗠𝗢𝗛𝗔𝗠𝗠𝗔𝗗 𝗥𝗔𝗡𝗔 🌿\n`, attachment: await streamURL(`https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)},event.threadID,event.messageID);
	    }
