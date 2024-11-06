module.exports = {
  config: {
        name: "ephoto",
        version: "2.0.0",
        permission: 0,
        credits: "Nayan",
        description: "",
        prefix: true,
        category: "user",
        usages: "text",
        cooldowns: 5,
        dependencies: {
    'nayan-server': ''
  }
},
  
start: async function({ nayan, events, args, NAYAN }) {

  if (!NAYAN) {
    return nayan.reply(`[❌] Unsupported this file your bot`, events.threadID);
  }

  NAYAN.react("⏳️")
  const { messageID, threadID } = events;
  const fs = require("fs");
  const axios = require("axios");
  const request = require("request");

  const prompt = args.join(" ");
  if (!args[0]) return nayan.reply(`🔰Use ${global.config.PREFIX}${this.config.name} [no.] [text]\n🔰Example:${global.config.PREFIX}${this.config.name} 1 rana\n\n🔥Total Edit limit 50...`, threadID, messageID);


  const content = args.join(" ");
const msg = content.split(" ");
const number = msg[0].trim();
let name = msg[1] ? msg.slice(1).join(" ").trim() : "Mohammad RANA";

  const {ephoto} = require('nayan-server')


  if (number == "1"){ var url = "https://ephoto360.com/hieu-ung-chu/tao-hieu-ung-chu-mam-anh-sang-74.html"}
  if (number == "2"){ var url = "https://ephoto360.com/hieu-ung-chu/chu-kim-loai-tong-vang-ruc-215.html"}
  if (number == "3"){ var url = "https://ephoto360.com/tao-hieu-ung-chu-neon-da-sac-truc-tuyen-985.html"}
  if (number == "4"){ var url = "https://ephoto360.com/hieu-ung-chu-phong-cach-logo-naruto-shippuden-1001.html"}
  if (number == "5"){ var url = "https://ephoto360.com/hieu-ung-chu/chu-kim-loai-tong-mau-tim-175.html"} 
  if (number == "6"){ var url = "https://ephoto360.com/tao-avatar-video-theo-cac-bieu-tuong-online-629.html"} 
  if (number == "7"){ var url = "https://ephoto360.com/hieu-ung-chu-neon-canh-ac-quy-online-808.html"} 
  if (number == "8"){ var url = "https://ephoto360.com/hieu-ung-viet-chu-len-cua-so-mua-truc-tuyen-806.html"}
  if (number == "9"){ var url = "https://ephoto360.com/hieu-ung-tao-chu-ky-anh-sang-nhieu-mau-sac-686.html"} 
  if (number == "10"){ var url = "https://ephoto360.com/hieu-ung-ve/viet-chu-galaxy-bat-17.html"}
  if (number == "11"){ var url = "https://ephoto360.com/hieu-ung-chu-anh-sang-theo-phong-cach-cong-nghe-tuong-lai-769.html"} 
  if (number == "12"){ var url = "https://ephoto360.com/tao-logo-phong-cach-pornhub-612.html"} 
  if (number == "13"){ var url = "https://ephoto360.com/tao-hinh-nen-cho-dien-thoai-theo-phong-cach-galaxy-cuc-chat-586.html"} 
  if (number == "14"){ var url = "https://ephoto360.com/tao-logo-mascot-phong-cach-galaxy-462.html"} 
  if (number == "15"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-galaxy-canh-thien-than-moi-289.html"} 
  if (number == "16"){ var url = "https://ephoto360.com/tao-logo-phong-cach-pornhub-612.html"} 
  if (number == "17"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-da-quy-hong-ngoc-3d-281.html"} 
  if (number == "18"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-cam-thach-hoa-van-275.html"} 
  if (number == "19"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-mau-sac-160.html"} 
  if (number == "20"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-sao-online-85.html"} 
  if (number == "21"){ var url = "https://ephoto360.com/tao-avatar-video-theo-cac-bieu-tuong-online-629.html"} 
  if (number == "22"){ var url = "https://ephoto360.com/hieu-ung-lua/hieu-ung-chu-canh-lua-372.html"} 
  if (number == "23"){ var url = "https://ephoto360.com/tao-anh-bia-7-vien-ngoc-rong-dragon-ball-online-dep-doc-chat-nhat-476.html"} 
  if (number == "24"){ var url = "https://ephoto360.com/sinh-nhat/ghi-loi-chuc-len-banh-sinh-nhat-229.html"} 
  if (number == "25"){ var url = "https://ephoto360.com/tao-avatar-video-theo-cac-bieu-tuong-online-629.html"} 
  if (number == "26"){ var url = "https://ephoto360.com/tao-anh-bia-one-piece-dao-hai-tac-truc-tuyen-cuc-dep-626.html"} 
  if (number == "27"){ var url = "https://ephoto360.com/tao-avatar-video-pubg-phong-cach-nhieu-song-glitch-627.html"}
  if (number == "28"){ var url = "https://ephoto360.com/che-video-trung-thu-fa-voi-ten-cua-ban-700.html"} 
  if (number == "29"){ var url = "https://ephoto360.com/hieu-ung-chu/tao-chu-phong-cac-retro-67.html"} 
  if (number == "30"){ var url = "https://ephoto360.com/tao-logo-theo-ten-phong-cach-galaxy-460.html"} 
  if (number == "31"){ var url = "https://ephoto360.com/tao-logo-phong-cach-may-chieu-3d-518.html"} 
  if (number == "32"){ var url = "https://ephoto360.com/tao-logo-hoa-ma-vang-de-xay-dung-thuong-hieu-719.htmll"} 
  if (number == "33"){ var url = "https://ephoto360.com/tao-logo-avatar-du-lich-phong-cach-den-trang-643.html"} 
  if (number == "34"){ var url = "https://ephoto360.com/hieu-ung-chu/tao-chu-bang-tuyet-107.html"} 
  if (number == "35"){ var url = "https://ephoto360.com/tao-hieu-ung-chu-digital-glitch-truc-tuyen-941.html"} 
  if (number == "36"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-phao-bong-356.html"} 
  if (number == "37"){ var url = "https://ephoto360.com/hieu-ung-chu/chu-canh-thien-than-176.html"} 
  if (number == "38"){ var url = "https://ephoto360.com/hieu-ung-chu/tao-chu-duoi-nuoc-73.html"} 
  if (number == "39"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-giot-nuoc-106.html"} 
  if (number == "40"){ var url = "https://ephoto360.com/hieu-ung-ve/tao-hieu-ung-chu-ban-dem-hieu-ung-lend-cho-chu-147.html"} 
  if (number == "41"){ var url = "https://ephoto360.com/hieu-ung-chu/viet-chu-vang-ngoc-online-285.html"} 
  if (number == "42"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-typography-online-dark-green-typo-359.html"} 
  if (number == "43"){ var url = "https://ephoto360.com/hieu-ung-viet-chu-3d-len-bai-bien-814.html"} 
  if (number == "44"){ var url = "https://ephoto360.com/hieu-ung-ve/mau-logo-avatar-galaxy-wolf-cuc-chat-366.html"} 
  if (number == "45"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-dance-text-312.html"} 
  if (number == "46"){ var url = "https://ephoto360.com/hieu-ung-chu/tao-avatar-gold-pro-303.html"} 
  if (number == "47"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-anh-long-chu-217.html"} 
  if (number == "48"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-equalizer-music-259.html"} 
  if (number == "49"){ var url = "https://ephoto360.com/tao-hieu-ung-chu-may-tren-bau-troi-711.html"} 
  if (number == "50"){ var url = "https://ephoto360.com/tao-logo-phong-cach-blackpink-kem-chu-ky-cac-thanh-vien-1002.html"} 
  if (number == "51"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-cat-giay-184.html"}
   if (number == "52"){ var url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-sao-online-85.html"}
// you added more link same as above


 try { 
  let data = await ephoto(url, [name]);
  console.log(data);
  var file = fs.createWriteStream(__dirname + '/cache/ephoto.jpg');

  const link = data.url;
  const rqs = request(encodeURI(`${link}`));
   NAYAN.react("✅")
  rqs.pipe(file);  
  file.on('finish', () => {

    setTimeout(function() {

      return nayan.reply({
        body: `❐ THIS IS YOUR NAME EDIT ✌️\n\n___________________________________\n\n❐ This Bot Name : ${global.config.BOTNAME} 🤖\n❐ This Bot Owner : Mohammad RANA😘\n❐ Your Input Name : ${name}\n\n___________________________________`,
        attachment: fs.createReadStream(__dirname + '/cache/ephoto.jpg')
      }, threadID, messageID)
    }, 5000)
  })
    } catch (err) {
   NAYAN.react("❌")
    nayan.reply(`🔰Use ${global.config.PREFIX}${this.config.name} [no.] [text]\n🔰Example:${global.config.PREFIX}${this.config.name} 1 rana\n\n🔥Total Edit limit 50...`, events.threadID, events.messageID);  
   }
}
} 
