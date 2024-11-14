const dipto = require('axios');
const fs = require('fs-extra');
const path = require('path');
const moment = require('moment-timezone');
const pathFile = __dirname + '/cache/d1pt0.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'true');
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  permission: 2,
  credits: "dipto",
  prefix:true,
  description: "when send ,prefix then response",
  category: "bot prefix",
  usages: "prefix",
  cooldowns: 5,
};
module.exports.handleEvent = async ({ api, event }) => {
  if (isEnable == "true"){
  const dipto2 = event.body ? event.body.toLowerCase() : '';
    const GP = "🤍✨𝐑𝐎𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗✨🤍";
     let d1PInfo = await api.getThreadInfo(event.threadID);
  let diptoName = d1PInfo.threadName;
    var time = moment.tz("Asia/Dhaka").format("LLLL");
  const text = `╭•┄┅═══❁🌺❁═══┅┄•╮\n${GP}\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\n╭─━━━━━━━━━━━━━━━─╮\n❏ 𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 : ${global.config.BOTNAME}\n❏ 𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗 : ｢ ${global.config.PREFIX} ｣\n❏ 𝐁𝐎𝐓 𝐂𝐌𝐃: ｢ ${client.commands.size} ｣\n❏ 𝐓𝐈𝐌𝐄 : ${time}\n❏ 𝐆𝐑𝐎𝐔𝐏 𝐍𝐀𝐌𝐄: ${diptoName}\n╰─━━━━━━━━━━━━━━━─╯\n`
  //const text2 = text[Math.floor(Math.random() * text.length)];
const imgur = ["https://i.imgur.com/7tUwItr.mp4",               "https://i.imgur.com/Qky4DLk.mp4",    "https://i.imgur.com/dDtDOaQ.mp4",  "https://i.imgur.com/yoMHJC4.mp4",  "https://i.imgur.com/OXOg1MT.mp4",  "https://i.imgur.com/A9sSrhk.mp4",  "https://i.imgur.com/mWguxte.mp4", "https://i.imgur.com/jhzYV7S.mp4",  "https://i.imgur.com/i2EW0X5.mp4",  "https://i.imgur.com/2LP5lZ4.mp4"]
  const link = imgur[Math.floor(Math.random() * imgur.length)];
  const res = await dipto.get(link, { responseType: 'arraybuffer' })
const ex = path.extname(link);
  const filename = __dirname + `/cache/dipto3${ex}`;
  fs.writeFileSync(filename, Buffer.from(res.data, 'binary'));
  if (dipto2.indexOf("prefix") ===0|| dipto2.indexOf("Prefix") ===0 )
  {
api.sendMessage({body:`${text}`,attachment: fs.createReadStream(filename)},event.threadID,() => fs.unlinkSync(filename),event.messageID)
  }
 }
}
module.exports.run = async ({api,args, event}) => {
try {
  if (args[0] == 'on') {
    fs.writeFileSync(pathFile, 'true');
    api.sendMessage('no prefix on successfully', event.threadID, event.messageID);
  }
  else if (args[0] == 'off') {
    fs.writeFileSync(pathFile, 'false');
    api.sendMessage('no prefix off successfully', event.threadID, event.messageID);
  }
  else if (!args[0]){
    api.sendMessage(`Wrong format ${this.config.name}use off/on`, event.threadID, event.messageID);
  }
  }
  catch(e) {
    console.log(e);
  }

}
