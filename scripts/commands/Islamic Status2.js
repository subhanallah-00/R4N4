/** THIS FULL BOT COMMAND FILE AND ALL API CREATE BY ISLAMICK CYBET CHAT DONT CHINGE THE MY ANY CODE 🤙🖤📿  **/
module.exports.config = {
  name: "islamic video",
  version: "1.0.0",
  permssion: 0,
  credits: "Islamick Cyber Chat",
  prefix:true,
  description: "islamick  VEDIO",
  category: "I C C",
  usages: "islamic vedio",
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
   var hi = ["✰❥⏤͟͟͞͞◆🤍🪽\n\n\●❥𝄞⋆⃝🌺✨━𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐕𝐢d𝐞𝐨━●❥𝄞⋆⃝🌺\n\n\n•⎯͢⎯⃝🩷🫶🏻"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link =[

"https://i.imgur.com/ydiLocz.mp4",
"https://i.imgur.com/lCtItXr.mp4",
"https://i.imgur.com/PbBa6W9.mp4",
"https://i.imgur.com/mZvbNRZ.mp4",
"https://i.imgur.com/fljfIWV.mp4",
"https://i.imgur.com/ML2we6E.mp4",
"https://i.imgur.com/ML2we6E.mp4",
"https://i.imgur.com/oxYEI8J.mp4",
"https://i.imgur.com/sFEAbZY.mp4",
"https://i.imgur.com/6uPsQ4C.mp4",
"https://i.imgur.com/MCA4duI.mp4",
"https://i.imgur.com/yhJZHp2.mp4",
"https://i.imgur.com/Iix6A7f.mp4",
"https://i.imgur.com/S5hluTk.mp4",
"https://i.imgur.com/pWbvRzB.mp4",
"https://i.imgur.com/q771gcD.mp4",
"https://i.imgur.com/nwsKKir.mp4",
];
     var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
