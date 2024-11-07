const axios = require("axios");
const fs = require("fs");
const request = require("request");

const link = [
  "https://i.imgur.com/fdRd9vI.mp4",
  "https://i.imgur.com/yhv5zVI.mp4",
  "https://i.imgur.com/56TGyyE.mp4",
  "https://i.imgur.com/NSRExD4.mp4",
  "https://i.imgur.com/K2KQ2y2.mp4",
  "https://i.imgur.com/5lDLSuj.mp4",
  "https://i.imgur.com/2je41fd.mp4",
  "https://i.imgur.com/EMxmniZ.mp4",
  "https://i.imgur.com/p9EyFMi.mp4",
  "https://i.imgur.com/wPdNU3f.mp4",
  "https://i.imgur.com/LnbLONQ.mp4",
  "https://i.imgur.com/mnJtr0Z.mp4",
  "https://i.imgur.com/fMwFdeU.mp4",
  "https://i.imgur.com/0Ri0KHf.mp4",
  "https://i.imgur.com/tYACH9Z.mp4",
  "https://i.imgur.com/mP150p6.mp4",
  "https://i.imgur.com/QkpG3LZ.mp4",
  "https://i.imgur.com/U4Cjes3.mp4",
  "https://i.imgur.com/c7uLHLE.mp4",
  "https://i.imgur.com/SkSAwhL.mp4"
];

module.exports.config = {
  name: "😒",
  version: "1.0.0",
  permission: 0,
  credits: "Rahad",
  description: "",
  prefix: true, 
  category: "no prefix", 
  usages: "😒",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.startsWith("😒")) {
    const rahad = [
      "_ওই দিকে কি দেখো এ দিকে দেখো..!🫂😍",
      " উম্মম্মমমমমমহহহ..বেবি ওই দিকে কি 😒"
    
    ];
    const rahad2 = rahad[Math.floor(Math.random() * rahad.length)];

    const callback = () => api.sendMessage({
      body: `${rahad2}`,
      attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);
    
    const requestStream = request(encodeURI(link[Math.floor(Math.random() * link.length)]));
    requestStream.pipe(fs.createWriteStream(__dirname + "/cache/2024.mp4")).on("close", () => callback());
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
  if (typeof data["😒"] === "undefined" || data["😒"]) data["😒"] = false;
  else data["😒"] = true;
  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["😒"]) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};
