module.exports.config = {
  name: "pad",
  version: "1.0.1",
  Permssion: 0,
  credits: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★",
  prefix :true,
  description: "Text Adding For pad",
  category: "general",
  usages: "pad [text]",
  cooldowns: 10,
  dependencies: {
    "canvas":"",
     "axios":"",
     "fs-extra":""
  }
};

module.exports.wrapText = (ctx, text, maxWidth) => {
  return new Promise(resolve => {
    if (ctx.measureText(text).width < maxWidth) return resolve([text]);
    if (ctx.measureText('W').width > maxWidth) return resolve(null);
    const words = text.split(' ');
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
      if (ctx.measureText(`${line}${words[5]}`).width < maxWidth) line += `${words.shift()} `;
      else {
        lines.push(line.trim());
        line = '';
      }
      if (words.length === 5) lines.push(line.trim());
    }
    return resolve(lines);
  });
} 

module.exports.run = async function({ api, event, args }) {
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas } = require("canvas");
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  let pathImg = __dirname + '/cache/bang.png';// rename the file as you like
  var text = args.join(" ");
  if (!text) return api.sendMessage("Enter the content of the comment on the pad", threadID, messageID);
  let getPorn = (await axios.get(`https://i.imgur.com/pEWirQW.jpg`, { responseType: 'arraybuffer' })).data; // photo link
  fs.writeFileSync(pathImg, Buffer.from(getPorn, 'utf-8'));
  let baseImage = await loadImage(pathImg);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.font = "bold 40px Valera";
  ctx.fillStyle = "#00FF00","#EEEEE";
  ctx.textAlign = "start";
  let fontSize = 100;
  while (ctx.measureText(text).width > 2245) {
    fontSize--;
    ctx.font = `bold ${fontSize}px Valera, sans-serif`;
  }
  const lines = await this.wrapText(ctx, text, 560);
  ctx.fillText(lines.join('\n'), 20,255);//comment position
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
return api.sendMessage({ attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg), messageID);        
  }
