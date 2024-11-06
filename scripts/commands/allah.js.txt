module.exports.config = {
  name: "allah",
  version: "1.0.0",
  permssion: 0,
  credits: "Islamick Cyber Chat",
  prefix:true,
  description: "Allaha text gif",
  category: "Text gif",
  usages: "allah",
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
  var link = [
"https://i.imgur.com/7zLmJch.gif",
"https://i.imgur.com/U07Yd3U.gif",
"https://i.imgur.com/DHoZ9A1.gif",
"https://i.imgur.com/oV4VMvm.gif",
"https://i.imgur.com/ScGCmKE.gif",
"https://i.imgur.com/r0ZE7lx.gif",
"https://i.imgur.com/C2a3Cj3.gif",
"https://i.imgur.com/98PjVxg.gif",
"https://i.imgur.com/LvUF38x.gif",
"https://i.imgur.com/2eewmJm.gif",
  ];
    var callback = () => api.sendMessage({body:`•—»✨ [ 𝗔𝗹𝗹𝗮𝗵 𝗚𝗜𝗙 ] ✨«—•\n•┄┅════❁🌺❁════┅┄•\n\n\n✿┼─আল্লাহু আকবর┼─✿ \n\n\n•┄┅════❁🌺❁════┅┄•`,attachment: fs.createReadStream(__dirname + "/cache/5.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.gif")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.gif")).on("close",() => callback());
   }; 