/** THIS FULL BOT COMMAND FILE AND ALL API CREATE BY ISLAMICK CYBET CHAT DONT CHINGE THE MY ANY CODE 🤙🖤📿  **/
module.exports.config = {
  name: "natural5 video",
  version: "1.0.0",
  permssion: 0,
  credits: "Islamick Cyber Chat",
  prefix:true,
  description: "NATURAL5  VEDIO",
  category: "I C C",
  usages: "Natural5 vedio",
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
   var hi = ["...!✨💜🍂\n\n\n⚊পৃথিবীর সকল ফুলের সাথে আমার দেখা হোক।  🦋💛🪽\n\n\n...!✨💜🍂"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://i.imgur.com/TJurQ47.mp4",
"https://i.imgur.com/6LLQxly.mp4",
"https://i.imgur.com/dATStnq.mp4",
"https://i.imgur.com/weYk1QH.mp4",
"https://i.imgur.com/Np6Dj1J.mp4",
"https://i.imgur.com/2jM2tzo.mp4",
"https://i.imgur.com/87RhcIJ.mp4",
"https://i.imgur.com/XkqHb5x.mp4",
];
     var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
