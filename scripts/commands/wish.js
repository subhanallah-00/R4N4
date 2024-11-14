module.exports.config = {
  name: "wish",
  version: "1.0.0",
  Permssion: 0,
  credits: "Islamick Cyber Chat",
  prefix :true,
  description: "wish for happy birthday",
  category: "wish",
  usages: "@mention",
  dependencies: {
        "axios": "",
        "fs-extra": ""
  },
  cooldowns: 0
};

module.exports.wrapText = (ctx, name, maxWidth) => {
  return new Promise(resolve => {
    if (ctx.measureText(name).width < maxWidth) return resolve([name]);
    if (ctx.measureText('W').width > maxWidth) return resolve(null);
    const words = name.split(' ');
    const lines = [];
    let line = '';
    while (words.length > 0) {
      let split = false;
      while (ctx.measureText(words[0]).width >= maxWidth) {
        const temp = words[0];
        words[0] = temp.slice(0, -1);
        if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
        else {
          split = true;
          words.splice(1, 0, temp.slice(-1));
        }
      }
      if (ctx.measureText(`${line}${words[0]}`).width < maxWidth) line += `${words.shift()} `;
      else {
        lines.push(line.trim());
        line = '';
      }
      if (words.length === 0) lines.push(line.trim());
    }
    return resolve(lines);
  });
} 

module.exports.run = async function ({ args, Users, Threads, api, event, Currencies }) {
  const { loadImage, createCanvas } = require("canvas");
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  let pathImg = __dirname + "/cache/background.png";
  let pathAvt1 = __dirname + "/cache/Avtmot.png";


  var id = Object.keys(event.mentions)[0] || event.senderID;
  var name = await Users.getNameUser(id);
  var ThreadInfo = await api.getThreadInfo(event.threadID);

  var background = [

    "https://i.imgur.com/aUyYnBw.jpg"
];
  var rd = background[Math.floor(Math.random() * background.length)];

  let getAvtmot = (
    await axios.get(
      `https://graph.facebook.com/${id}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathAvt1, Buffer.from(getAvtmot, "utf-8"));

  let getbackground = (
    await axios.get(`${rd}`, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathImg, Buffer.from(getbackground, "utf-8"));

  let baseImage = await loadImage(pathImg);
  let baseAvt1 = await loadImage(pathAvt1);

  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
    ctx.font = "400 23px Arial";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "start";


    const lines = await this.wrapText(ctx, name, 1160);
    ctx.fillText(lines.join('\n'), 120,592);//comment
    ctx.beginPath();


  ctx.drawImage(baseAvt1, 124, 254, 230, 231);

  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAvt1);
  return api.sendMessage({ body: `╭•┄┅═══❁🌺❁═══┅┄•╮\n         𝐇𝐀𝐏𝐏𝐘 𝐁𝐈𝐑𝐓𝐇𝐃𝐀𝐘 \n╰•┄┅═══❁🌺❁═══┅┄•╯\n\n┏╮/╱\n╰ 🌺•••✿🦋༎࿐• \n╱/ ╰🦋༎࿐\n\n\n━༊জন্মদিনের༉༎⊱ অনেক༉༎⊱\nঅনেক༉༎⊱ শুভ-কামনা-!!✨🧡\n\n༊_সুন্দর༎ এই༎ পৃথিবীতে༎\n সুন্দরতম༎ জীবন༎ হোক༎ তোমার༎࿐___❤️😍\n\n__~শুভ༎࿔ জন্মদিন༎࿔ ডিয়ার༎࿔~__🎂🍫\n\n•.¸¸.•°»̶̶͓͓͓̽̽̽⑅⃝🧡✨${name}✨🧡❥᭄»̶̶͓͓͓̽̽̽-🎊🎈࿐͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌\n\n_তুমার জীবনের প্রতিটা ক্ষণ আনন্দময় হোক এই কামনা করি-!!🤲🍒\n_আশা করি সারা জীবন এমনই থাকো সবসময় ভালো থাকো, এই কামনাই করি-!!💜😊\n_আজকের এই দিনে সবকিছু হউক নতুন করে-!!😌\nসুখের স্মৃতি টুকু থাক কাছে-!!🤗\nদুঃখ গুলা যাক দূরে-!!❤️🌼\n\n\n┏╮/╱\n╰ 🌺•••✿🦋༎\n╱/ ╰┛🦋\n𝐖𝐈𝐒𝐇 𝐅𝐎𝐑𝐌 ✿🦋༎ ${global.config.BOTNAME} ༎ ✨🧡`, attachment: fs.createReadStream(pathImg) },
      event.threadID,
      () => fs.unlinkSync(pathImg),
      event.messageID);
    }
