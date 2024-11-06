/** THIS FULL BOT COMMAND FILE AND ALL API CREATE BY ISLAMICK CYBET CHAT DONT CHINGE THE MY ANY CODE 🤙🖤📿  **/
module.exports.config = {
  name: "islamicstatus",
  version: "1.0.0",
  permssion: 0,
  credits: "Islamick Cyber Chat",
  prefix:true,
  description: "islamick stutus  VEDIO",
  category: "I C C",
  usages: "islamickstutus",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["✰❥⏤͟͟͞͞◆🤍🪽\n\n\●❥𝄞⋆⃝🌺✨━𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐒𝐭𝐮𝐭𝐮𝐬𝐕𝐢d𝐞𝐨━●❥𝄞⋆⃝🌺\n\n\n•⎯͢⎯⃝🩷🫶🏻"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link =[

"https://i.imgur.com/AjgBkEh.mp4",
"https://i.imgur.com/OxoTm2d.mp4",
"https://i.imgur.com/GMasG5f.mp4",
"https://i.imgur.com/dcZoRHy.mp4",
"https://i.imgur.com/sKTVJ5r.mp4",
"https://i.imgur.com/KdHTMuL.mp4",
"https://i.imgur.com/r3O5pNg.mp4",
"https://i.imgur.com/40hAIk4.mp4",
"https://i.imgur.com/oLp4wRE.mp4",
"https://i.imgur.com/0ICcmOr.mp4",
"https://i.imgur.com/OMkNFwk.mp4",
"https://i.imgur.com/gmmphkY.mp4",
"https://i.imgur.com/JAn4yNd.mp4",
"https://i.imgur.com/URMDUfW.mp4",
"https://i.imgur.com/XlM7H2k.mp4",
"https://i.imgur.com/W4edE9G.mp4",
"https://i.imgur.com/feeraA1.mp4",
"https://i.imgur.com/0AvpYTT.mp4",
"https://i.imgur.com/r2kA7Mg.mp4",
"https://i.imgur.com/r2kA7Mg.mp4",
"https://i.imgur.com/NpgcLzB.mp4",
"https://i.imgur.com/cGPsgY2.mp4"
];
     var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
