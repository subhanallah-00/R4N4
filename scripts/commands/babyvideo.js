module.exports.config = {
  name: "baby",
  version: "1.0.0",
  permission: 0,
  credits: "farhan",
  description: "Random sad video",
  prefix: true,
  category: "Media",
  usages: "video",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "request": ""
  }
};

module.exports.run = async ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];

  var hi = ["--BABY-VIDEO--FARHAN-ISLAM--"];
  var know = hi[Math.floor(Math.random() * hi.length)];

  var link = [
    "https://drive.google.com/uc?id=1ow-ovOSIJakvKK9MznNFE00hFXalVV49",
    "https://drive.google.com/uc?id=1p9bO4FUVY2MblvNBBloW9m127oQfhjEv",
    "https://drive.google.com/uc?id=1pTalyTBu6xEHUxYMAWq6ym7TOE7qe71-",
    "https://drive.google.com/uc?id=1pIJNNj5CIq29RVLdYsHc-s-anXSAMc_j",
    "https://drive.google.com/uc?id=1pWM16k9jlRrSa7-BPhI2SyIxN30V9Ji0",
    "https://drive.google.com/uc?id=1qMR0Aj9ImRqrlnETpO50iTqLFPnNsrJ4",
    "https://drive.google.com/uc?id=1q6u8MVJ2XvC9OIf5fOK-WqH7JNn5YHZ5",
    "https://drive.google.com/uc?id=1qCiT_GfxXxXOTb8vicJQIaS72Q_9Pxsb",
    "https://drive.google.com/uc?id=1qDrNXtrpbDrjkhl90-etaCsidGRM-eV-",
    "https://drive.google.com/uc?id=1ptCYaDb_DebvtcbG0yFivC_Vis_CfvjO",
    "https://drive.google.com/uc?id=1pC1Qqh30wIqo_XErnGtNbmquA3-HcR3M",
    "https://drive.google.com/uc?id=1pthPw6esQvMx_Kurbzk1KMhedryRYD40",
    "https://drive.google.com/uc?id=1qXK0VLfbVaes11tVCB8JxsEmelq90Dc7",
    "https://drive.google.com/uc?id=1qTBFIhjKiVysFIw7IL-o-enhz4QFuabl",
    "https://drive.google.com/uc?id=1pp7nTCuRlGEy4-CK3k4p4LPZkxA8xVWE",
    "https://drive.google.com/uc?id=1qIsNO4cSriiE_llkFCY6YGTqk-wEMsd0",
    "https://drive.google.com/uc?id=1ox5jQFrcFtlBkZQhnqEB8aDlAaxS2hGh"
  ];

  var callback = () => {
    api.sendMessage({ body: `「 ${know} 」`, attachment: fs.createReadStream(__dirname + "/cache/15.mp4") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));
  };

  return request({ url: encodeURI(link[Math.floor(Math.random() * link.length)]), encoding: null }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      fs.writeFile(__dirname + "/cache/15.mp4", body, "binary", callback);
    }
  });
};
