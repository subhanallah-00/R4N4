module.exports.config = {
  name: "dj",
  version: "1.0.0",
  prefix: "true",
  permssion: 0,
  credits: "RANA", // Don't Change Credit Cuz I Made It..😗
  description: "Dj Song By Rana",
  category: "1",
  usages: "dj",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];

  const hi = ["‎❀┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈❀\n‎DJ By MOHAMMAD RANA 🥵\n❀┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈❀"];
  const know = hi[Math.floor(Math.random() * hi.length)];
  const link = [
    "https://drive.google.com/uc?id=10gNGClf02tNvNXLWr_BZMnp9W6li5ggr",
    "https://drive.google.com/uc?id=1168M0s6K9nL2VUzpxiBWrK3NeotM1jgp",
    "https://drive.google.com/uc?id=11-hekCpEX-NskoYHOzpakj8xX8UqRvB7",
    "https://drive.google.com/uc?id=10dRRk6GctDiRyxwpnJXSyrctHicX5DCe",
    "https://drive.google.com/uc?id=10bLhF2V_J_IfN-LLd3629IglvRbK79Oa",
    "https://drive.google.com/uc?id=10ehi3L3xVOuPxCiQFAwmLqN7URzuv-Jn",
    "https://drive.google.com/uc?id=10jMJZaSX6bOxBh1mV3XIlAW3zW0gyW0K",
    "https://drive.google.com/uc?id=10c7lXKVJigRlUgxy6MYG-bCv4gftMQeA",
    "https://drive.google.com/uc?id=10zkPNOC2dwR_A5aeGT0zhIBLGFZm9XRB"
  ];


  api.sendMessage(
    `┏━━━━━<𝗠𝗘𝗗𝗜𝗔>━━━━━┓\n┃𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗜𝗡𝗚 𝗦𝗢𝗡𝗚\n┃𝗙𝗢𝗥 𝗬𝗢𝗨 📥\n┃    ↻ ◁ || ▷ ↺\n┃  𝗣𝗟𝗘𝗔𝗦𝗦𝗘 𝗪𝗔𝗜𝗧\n┗━━━━[ 𝗥𝗔𝗡𝗔 𝗕𝗢𝗧 ]━━━┛`,
    event.threadID,
    (err, info) => {
    
      setTimeout(() => {
        api.unsendMessage(info.messageID);
      }, 20000);


      const callback = () => api.sendMessage(
        {
          body: ` ${know} `,
          attachment: fs.createReadStream(__dirname + "/cache/26.mp3")
        },
        event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/26.mp3")
      );

      request(encodeURI(link[Math.floor(Math.random() * link.length)]))
        .pipe(fs.createWriteStream(__dirname + "/cache/26.mp3"))
        .on("close", () => callback());
    }
  );
};
