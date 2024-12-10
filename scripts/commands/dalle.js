const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports.config = {
  name: "dalle",
  version: "1.0",
  credits: "RANA",
  permssion: 2,
  prefix: true,
  description: "generate image by dalle api",
  category: "download",
  usages:
    "[text] \nJamon [A 17/18/19 years old boy/girl watching football match on tv and written 𝑹𝑨𝑯𝑨𝑻 𝑲𝑯𝑨𝑵 and 69 on the back of his Dress , 4k]",
  cooldowns: 5,
},

module.exports.run = async function ({ api, event, args }) {
  const prompt = event.messageReply?.body.split("dalle")[1] ||  args.join(" ");
  if (!prompt) {
   return api.sendMessage("❌| Wrong Formet .✅ | Use 17/18 years old boy/girl watching football match on tv and written 𝑹𝑨𝑯𝑨𝑻 𝑲𝑯𝑨𝑵 and 69 on the back of his Dress , 4k",event.threadID,event.messageID);
  }
    try {
      const w = await api.sendMessage("𝙥𝙡𝙚𝙖𝙨𝙚 𝙬𝙞𝙩𝙝𝙚 𝙥𝙧𝙤𝙘𝙚𝙨𝙨𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙞𝙢𝙖𝙜𝙚 \n\𝙰𝚍𝚖𝚒𝚗 :\n╰┈➤ ❝ 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰 ❞", event.threadID);

const response = await axios.get(`https://www.noobs-api.000.pe/dipto/dalle?prompt=${prompt}&key=dipto008&cookies=1sgtcfEs2Lk-uxkTXKxxZl8E08p74cmNXg6luQKtC25L2pFe_BuCrjiut0dWAm9gg7pfOhx7BFhMMvfsXkIbHemrJ4kTtI4tHMH5RJZYTnure-8qpf54f-7KG5_FvrudPdxR6QuTphq0nizyqO2IOmqSkUh0NIV5NmFRj_RghARE1hP0DhsqZCPv9IEi1Iw7KXZQxtO8Dot2WQWqjlXE5bw`)
      const data = response.data.imgUrls;
      if (!data || data.length === 0) {
        api.sendMessage("Empty response or no images generated.",event.threadID,event.messageID);
      }
      const diptoo = [];
      for (let i = 0; i < data.length; i++) {
        const imgUrl = data[i];
        const imgResponse = await axios.get(imgUrl, { responseType: 'arraybuffer' });
        const imgPath = path.join(__dirname, 'dalle', `${i + 1}.jpg`);
        await fs.outputFile(imgPath, imgResponse.data);
        diptoo.push(fs.createReadStream(imgPath));
      }
      await api.unsendMessage(w.messageID);
      await api.sendMessage({
  body: `𝚂𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕 𝚈𝚘𝚞𝚛 𝙸𝚖𝚊𝚐𝚎 \n𝙰𝚍𝚖𝚒𝚗 :\n╰┈➤ ❝ 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰 ❞`,
        attachment: diptoo
      },event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      await api.sendMessage(`Generation failed!\nError: ${error.message}`,event.threadID, event.messageID);
    }
  };
