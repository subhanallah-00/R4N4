/** THIS FULL BOT COMMAND FILE AND ALL API CREATE BY ISLAMICK CYBET CHAT DONT CHINGE THE MY ANY CODE 🤙🖤📿  **/
module.exports.config = {
  name: "natural3 video",
  version: "1.0.0",
  permssion: 0,
  credits: "Islamick Cyber Chat",
  prefix:true,
  description: "NATURAL3  VEDIO",
  category: "I C C",
  usages: "Natural3 vedio",
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
   var hi = ["_*•⎯͢⎯⃝🩵\n\n\nতারপর একদিন হঠাৎ ফুলের প্রেমে পড়ে গেলাম 🌸\nএরপর থেকে পৃথিবীর কোন সৌন্দর্য্যই আমাকে আর আকৃষ্ট করে না! ❤️‍🩹\n\n\n•⎯͢⎯⃝🩵*_"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://i.imgur.com/s0enSFR.mp4",
"https://i.imgur.com/G10APIS.mp4",
"https://i.imgur.com/JCR8tC2.mp4",
"https://i.imgur.com/nxYfqih.mp4",
"https://i.imgur.com/eFVgw1Q.mp4",
"https://i.imgur.com/TygOziE.mp4",
"https://i.imgur.com/7XWsucf.mp4",
"https://i.imgur.com/Joil59R.mp4",
"https://i.imgur.com/ZtX1PXj.mp4",
"https://i.imgur.com/Sxmc9vr.mp4",
"https://i.imgur.com/DoH02UH.mp4",
"https://i.imgur.com/1YPakcd.mp4",
"https://i.imgur.com/Hj4ifk4.mp4",
"https://i.imgur.com/pnzQX3o.mp4",
"https://i.imgur.com/DKKCNTN.mp4",

];
     var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
