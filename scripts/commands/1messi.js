module.exports.config = {
  name: "messi",
  version: "1.0.0",
  permssion: 0,
  credits: "Mohammad RANA",
  description: "Team Argentina pic",
  prefix: true,
  category: "user",
  usages: "messi",
  cooldowns: 5,
  dependencies: {
   }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["Messi 50+♦️✨"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/SKyn3RW9/images-52.jpg",
  "https://i.postimg.cc/8crcM6V2/images-51.jpg",
  "https://i.postimg.cc/8zGdk1Rp/images-50.jpg",
  "https://i.postimg.cc/Z5jNT6YH/Lionel-Messi-20180626.jpg",
  "https://i.postimg.cc/zfcRh5gR/images-43.jpg",
  "https://i.postimg.cc/Y0k2GybW/images-42.jpg",
  "https://i.postimg.cc/NMvBSzhz/images-41.jpg",
  "https://i.postimg.cc/9QvhwnfQ/images-40.jpg",
  "https://i.postimg.cc/WpXcw34K/images-38.jpg",
  "https://i.postimg.cc/gJjH9Nv3/images-37.jpg",
  "https://i.postimg.cc/zXrpvS5Y/images-61.jpg",
  "https://i.postimg.cc/BvXBkm5H/images-60.jpg",
  "https://i.postimg.cc/BbG58srB/images-59.jpg",
  "https://i.postimg.cc/tRhtKZ6S/images-58.jpg",
  "https://i.postimg.cc/pXs8vDLZ/images-57.jpg",

"https://i.postimg.cc/cHGthhFs/images-56.jpg",

"https://i.postimg.cc/R0KNWf42/images-55.jpg",

"https://i.postimg.cc/yxYdpbcz/images-54.jpg",

"https://i.postimg.cc/mDT2h5dF/images-63.jpg",

"https://i.postimg.cc/RCsVVGwN/images-62.jpg",
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
