/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: `me`,
  version: "1.0.0", 
  permission: 2,
  credits: "nayan",
  description: "", 
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5, 
  dependencies: {
	}
};


module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link = [
 "https://i.imgur.com/hY18qS8.jpeg",
"https://i.imgur.com/za28z5z.jpeg",
"https://i.imgur.com/dZz8j2W.jpeg",
"https://i.imgur.com/ANbGIOu.jpeg",
"https://i.imgur.com/DBOyRIm.jpeg",
"https://i.imgur.com/7Eu306K.jpeg",
"https://i.imgur.com/cqbX8cc.jpeg",
"https://i.imgur.com/jX1OL8l.jpeg",
"https://i.imgur.com/55W8RiV.jpeg",
"https://i.imgur.com/6pUEqkE.jpeg"


  
];
	 var callback = () => api.sendMessage({body:` 𝗛𝗲𝘆 𝗧𝗵𝗲𝗿𝗲 𝗜𝘁𝘀 𝗠𝗲 𝗥𝗔𝗡𝗔\n 𝗠𝘆 𝗧𝗼𝘁𝗮𝗹 𝗜𝗺𝗮𝗴𝗲  :${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
