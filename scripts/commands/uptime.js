module.exports.config = {
	name: "uptime",
	version: "0.0.2",
	permission: 0,
  prefix: true,
	credits: "Nayan",
	description: "uptime",
	category: "admin",
	usages: "",
    cooldowns: 5,
};
function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event, args }) => {
const time = process.uptime() ,
		hours = Math.floor(time / (100 * 110)),
		minutes = Math.floor((time % (100* 99)) / 88),
		seconds = Math.floor(time % 110);
  var z_1 = (hours < 10) ? '0' + hours : hours;
    var x_1 = (minutes < 10) ? '0' + minutes : minutes;
    var y_1 = (seconds < 10) ? '0' + seconds : seconds;
  const { commands } = global.client;
  const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Dhaka").format("DD/MM/YYYY || HH:mm:s");
    const axios = require('axios')
	const pidusage = await global.nodemodule["pidusage"](process.pid);
	const timeStart = Date.now();
  const fs = require('fs-extra');
   if (!fs.existsSync(__dirname +
        `/nayan/UTM-Avo.ttf`)) {
        let getfont = (await axios.get(`https://github.com/hanakuUwU/font/raw/main/UTM%20Avo.ttf`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/nayan/UTM-Avo.ttf`, Buffer.from(getfont, "utf-8"));
      }
         if (!fs.existsSync(__dirname +
      `/nayan/phenomicon.ttf`)) {
      let getfont2 = (await axios.get(`https://github.com/hanakuUwU/font/raw/main/phenomicon.ttf`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/nayan/phenomicon.ttf`, Buffer.from(getfont2, "utf-8"));
    };
  if (!fs.existsSync(__dirname +
      `/nayan/CaviarDreams.ttf`)) {
      let getfont3 = (await axios.get(`https://github.com/hanakuUwU/font/raw/main/CaviarDreams.ttf`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/nayan/CaviarDreams.ttf`, Buffer.from(getfont3, "utf-8"));
    };
   const { loadImage, createCanvas, registerFont } = require("canvas");
  
  let k = args[0];
   if(args[0] == "list"){
    const alime = (await axios.get('https://raw.githubusercontent.com/mraikero-01/saikidesu_data/main/anilist2.json')).data
    var count = alime.listAnime.length;
      var data = alime.listAnime
      var page = 1;
      page = parseInt(args[1]) || 1;
      page < -1 ? page = 1 : "";
      var limit = 20;
      var numPage = Math.ceil(count/limit);
      var msg = ``;
      for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
         if(i >= count) break;
        msg += `[ ${i+1} ] - ${data[i].ID} | ${data[i].name}\n`;
      }
      msg += `Trang ( ${page}/${numPage} )\nDùng ${global.config.PREFIX}${this.config.name} list < số trang >`;
      return api.sendMessage(msg, event.threadID,event.messageID);
   }
  if(!k){
  var id = Math.floor(Math.random() * 883) +1
  } else {
    var id = k
  }
  const loz = ["https://i.imgur.com/9jbBPIM.jpg","https://i.imgur.com/cPvDTd9.jpg","https://i.imgur.com/ZT8CgR1.jpg","https://i.imgur.com/WhOaTx7.jpg","https://i.imgur.com/BIcgJOA.jpg","https://i.imgur.com/EcJt1yq.jpg","https://i.imgur.com/0dtnQ2m.jpg"]
    const lengthchar = (await axios.get('https://raw.githubusercontent.com/mraikero-01/saikidesu_data/main/imgs_data2.json')).data
    console.log(lengthchar.length)
  const Canvas = require('canvas');
    let pathImg = __dirname + `/nayan/avatar_1111231.png`;
    let pathAva = __dirname + `/nayan/avatar_3dsc11.png`;
    let background = (await axios.get(encodeURI((loz[Math.floor(Math.random() * loz.length)])), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
    let ava = (await axios.get(encodeURI(`${lengthchar[id - 1].imgAnime}`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathAva, Buffer.from(ava, "utf-8"));
    const request = require('request');
    const path = require('path');

  //const a = Math.floor(Math.random() * 820) + 1
  
  
let l1 = await loadImage(pathAva);
    let a = await loadImage(pathImg);
    let canvas = createCanvas(a.width, a.height);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = lengthchar[id - 1].colorBg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(l1, 800, -160, 1100, 1100);
     registerFont(__dirname + `/nayan/phenomicon.ttf`, {
      family: "phenomicon"
    });
    ctx.textAlign = "start";
    ctx.strokeStyle = lengthchar[id - 1].colorBg;
    ctx.filter = "brightness(90%) contrast(110%)";
    ctx.font = "130px phenomicon";
    ctx.fillStyle = lengthchar[id].colorBg;
    ctx.fillText("UPTIME ROBOT", 95, 340);
    ctx.beginPath();
  ////////////////////////////////////////
   registerFont(__dirname + `/nayan/UTM-Avo.ttf`, {
      family: "UTM"
    });
    ctx.textAlign = "start";
    ctx.font = "70px UTM";
    ctx.fillStyle = "#fdfdfd";
    ctx.fillText(`${z_1} : ${x_1} : ${y_1} `, 180, 440);
    ctx.restore();
    ctx.save();
registerFont(__dirname + `/nayan/CaviarDreams.ttf`, {
      family: "time"
    });
    ctx.textAlign = "start";
    ctx.font = "45px time";
    ctx.fillText("@" + "rana.is.busy.okay", 250, 515)
    ctx.fillText("@" + "MOHAMMAD-RANA", 250, 575)
   //ctx.fillText("@" + "DVFB.VietLe.pro", 405, 750)
    ctx.restore();
    ctx.save();
    ctx.beginPath();
    const imageBuffer = canvas.toBuffer();
   fs.writeFileSync(pathImg, imageBuffer);
  return api.sendMessage({
    body: `┏━━━━━━━━━━━━━━━━━┓\n┃━➤ 𝗨𝗣𝗧𝗜𝗠𝗘 𝗥𝗢𝗕𝗢𝗧 ⏰ \n┗━━━━━━━━━━━━━━━━━┛\n\n→ Bot worked  ${hours} hours ${minutes} minutes ${seconds} seconds \n✢•━━━━━━━━━━━━━━━━━•✢\n┃➠ 𝗠𝗢𝗛𝗔𝗠𝗠𝗔𝗗 𝗥𝗔𝗡𝗔\n┃➠ Bo𝐭 Name: ${global.config.BOTNAME}\n┃➠ Bot Prefix: ${global.config.PREFIX}\n┃➠ Commands count: ${commands.size}\n┃➠ Total Users: ${global.data.allUserID.length}\n┃➠ Total thread: ${global.data.allThreadID.length}\n┃➠ CPU in use:: ${pidusage.cpu.toFixed(1)}%\n┃➠ RAM: ${byte2mb(pidusage.memory)}\n┃➠ Ping: ${Date.now() - timeStart}ms\n┃➠ Character ID𝐭: ${id}\n✢•━━━━━━━━━━━━━━━━━•✢\n[ ${timeNow} ]`,
    attachment: fs.createReadStream(pathImg)
  },
    event.threadID,
    () => fs.unlinkSync(pathImg),
    fs.unlinkSync(pathAva),
    event.messageID
);
}
