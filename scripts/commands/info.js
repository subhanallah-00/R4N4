module.exports.config = {
    name: "info",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
╭──✦ 𝗔𝗗𝗠𝗜𝗡  𝗜𝗡𝗙𝗢 ✦──╮
├‣𝙽𝙰𝙼𝙴     : 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰
├‣𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 : 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰
├‣𝚁𝙴𝙻𝙸𝙶𝙸𝙾𝙽 : 𝙸𝚂𝙻𝙰𝙼
├‣𝙰𝙳𝙳𝚁𝙴𝚂𝚂  : 𝙿𝙾𝙽𝙲𝙷𝙰𝙶𝙰𝚁𝙷
├‣𝙶𝙴𝙽𝙳𝙴𝚁   : 𝙼𝙰𝙻𝚎
├‣𝙰𝙶𝙴      : 18+
├‣𝚁𝙴𝙻𝙰𝚃𝙸𝙾𝙽 : 𝚂𝙸𝙽𝙶𝙻𝙴
├‣𝚆𝙾𝚁𝙺     : 𝚂𝚃𝚄𝙳𝙴𝙽𝚃
├‣𝙼𝙰𝙸𝚕   : rsrana609@gmail.com
├‣𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿: 01752865115
├‣𝚃𝙴𝙻𝙸𝙶𝚁𝙰𝙼 : ar.rana007
├‣𝙵𝙱 𝙻𝙸𝙽𝙺 : https://facebook.com/RANA.IS.BUSY.OKAY
╰────────────────♡彡`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100063487970328/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
