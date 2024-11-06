module.exports.config = {
  name: "brazil",
  version: "1.0.0",
  permission: 0,
  credits: "SK-SIDDIK-KHAN",
  description: "Team Brazil Pic",
  prefix: true, 
  category: "user", 
  usages: "brazil",
  cooldowns: 5,
  dependencies: {
	}
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
   "https://i.postimg.cc/zvmG096Y/a7ec3e08df4717243529d5a126effd02.jpg",

  "https://i.postimg.cc/pXzqGz9w/1902f645efbba2b6366315678ba345d4.jpg",

  "https://i.postimg.cc/4yThm7Jc/60edec79aa018850735c05de1767ba97.jpg",

  "https://i.postimg.cc/kg5wnZYm/77351b4570db20f05610a7ff38266239.jpg",

  "https://i.postimg.cc/RVWN4L1Y/8476e033ba74233943a9aab4db3b5e17.jpg",

  "https://i.postimg.cc/JhpLs9M5/cc489072d487e701e893b065738f11e9.jpg",

  "https://i.postimg.cc/XJy4ts6K/895b2587afbfb46bb0012be58abb32cf.jpg",

  "https://i.postimg.cc/pVqqgRkZ/c19c037b5d58ff6c2be1becf076077d1.jpg",

  "https://i.postimg.cc/vZ97Hs7C/f7626c193ac7718f6885ce23ad8bcc5c.jpg",

  "https://i.postimg.cc/52qHRNS9/afecb61980d1ac2da4931d4f28cf4b81.jpg",

  "https://i.postimg.cc/85FhFJqk/332ba6bb668993bcb37282acef99d9ab.jpg",

  "https://i.postimg.cc/d1M0BhhV/fbb1e960e4d68231e418311e27701bd8.jpg",

  "https://i.postimg.cc/VL5cJYNG/8a36f3f603d523f5934c128444911c67.jpg",
  
"https://i.postimg.cc/KjPQz3Mk/e2124da928da96760cdf9425a2109ff7.jpg",

  "https://i.postimg.cc/6514Z5fy/264da0996d2bc3a6ebdea3ba4ada3af3.jpg",

"https://i.postimg.cc/R0mS6jyW/147d39887fabe307dce5a0e760fbefd3.jpg",

"https://i.postimg.cc/yNJNzFMP/FB-IMG-16679607419744906.jpg",

"https://i.postimg.cc/L4g0Znpb/FB-IMG-16681709901842562.jpg",

"https://i.postimg.cc/8cGW5KDD/IMG-20221026-124718.jpg",

"https://i.postimg.cc/13kkfwgM/FB-IMG-16679597375681068.jpg",

"https://i.postimg.cc/zXCNKdr6/d43b68d645779cdf02a75b43089b885f.jpg",

"https://i.postimg.cc/N047XvJF/images-5.jpg",

"https://i.postimg.cc/k5fK4FGt/images-4.jpg",

"https://i.postimg.cc/Hsw2mMwb/images-3.jpg",

"https://i.postimg.cc/vTNdHjFS/images-9.jpg",

"https://i.postimg.cc/rmfBQbmF/images-8.jpg",

"https://i.postimg.cc/4yKSwxqB/images-7.jpg",

"https://i.postimg.cc/3w1rQtRz/images-17.jpg",

"https://i.postimg.cc/d0ZM4nC8/images-13.jpg",

"https://i.postimg.cc/3xS7LdcH/images-14.jpg",

"https://i.postimg.cc/R0YS0N7T/images-15.jpg",

"https://i.postimg.cc/QNTtHknK/images-16.jpg",

"https://i.postimg.cc/3w1rQtRz/images-17.jpg",

"https://i.postimg.cc/44B8HV7Z/images-12.jpg",

"https://i.postimg.cc/43QvkRpZ/images-10.jpg",

"https://i.postimg.cc/j2bD4Z85/images-18.jpg",

"https://i.postimg.cc/7YgSTTZX/images-24.jpg",

"https://i.postimg.cc/CKQVH5x6/images-21.jpg",

"https://i.postimg.cc/L5FBrksY/images-20.jpg",

"https://i.postimg.cc/qMf5TnFG/images-22.jpg",

"https://i.postimg.cc/7YgSTTZX/images-24.jpg",

"https://i.postimg.cc/j2bD4Z85/images-18.jpg",

"https://i.postimg.cc/2y8k2Mf0/images-32.jpg",

"https://i.postimg.cc/DzP3H66H/images-31.jpg",

"https://i.postimg.cc/JhqSPn4W/images-30.jpg",

"https://i.postimg.cc/BngGwNMy/images-29.jpg",

"https://i.postimg.cc/nhdPDWdH/images-28.jpg",

"https://i.postimg.cc/mkRwq3dX/images-27.jpg",

"https://i.postimg.cc/y6PXxZpK/images-26.jpg",

"https://i.postimg.cc/PqQNymwr/images-25.jpg",

"https://i.postimg.cc/9zHjsk33/images-33.jpg",
    ];
   var callback = () => api.sendMessage({body:`Brazil 50+ ✨♦️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
