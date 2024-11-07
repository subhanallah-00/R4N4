/** THIS FULL BOT COMMAND FILE AND ALL API CREATE BY ISLAMICK CYBET CHAT DONT CHINGE THE MY ANY CODE 🤙🖤📿  **/
module.exports.config = {
  name: "natural4 video",
  version: "1.0.0",
  permssion: 0,
  credits: "Islamick Cyber Chat",
  prefix:true,
  description: "NATURAL4  VEDIO",
  category: "I C C",
  usages: "Natural4 vedio",
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
   var hi = ["...!✨🤍🌸🍂\n\n\n⚊ফুলের আলাদা কোন ক্যাপশন হয় না\n ফুলের ক্যাপশন তার সৌন্দর্যই। ❯ 🦋🩷🪽\n\n\n...!✨🤍🌸🍂"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://i.imgur.com/qkWLIcB.mp4",
"https://i.imgur.com/LxgMw4v.mp4",
"https://i.imgur.com/gFikegj.mp4",
"https://i.imgur.com/joGj9PK.mp4",
"https://i.imgur.com/M2IAXUW.mp4",
"https://i.imgur.com/BZmbdqq.mp4", 
"https://i.imgur.com/7zGi8qk.mp4",
"https://i.imgur.com/Bxxxhx7.mp4",
"https://i.imgur.com/y48JOJ4.mp4",
"https://i.imgur.com/9Tp7DLu.mp4",

];
     var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
