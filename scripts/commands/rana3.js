module.exports.config = {
  name: "rana",
  version: "1.0.0",
  permission: 0,
  credits: "rana-Admin",
  description: "",
  prefix: true, 
  category: "no prefix", 
  usages: "🤗",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.handleEvent = async ({ api, event, Threads }) => {
    if (event.body.indexOf("বউ")==0 || event.body.indexOf("রানা'র বউ")==0 || event.body.indexOf("bow")==0 || event.body.indexOf("bou")==0) {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var link = ["https://scontent.xx.fbcdn.net/v/t42.3356-2/460656149_7679688595464107_5969626696013268111_n.mp4?_nc_cat=109&ccb=1-7&_nc_sid=4f86bc&_nc_eui2=AeG_HEBlPW9pR9BzAM9eCZ1fy8Y-BsTVtsjLxj4GxNW2yNQFMhOnfrYtolh7mTVsx6eRIh68sg7XUCnzPuoDmt1V&_nc_ohc=xMYfde_GrNYQ7kNvgG-f79Y&_nc_ht=scontent.xx&_nc_gid=AfFnvsadRE_Z6HoTEuyewdC&oh=03_Q7cD1QFkz_ID6LKJWu2v0QK0HEHJnFFsxBYHHxrBb6c9Vgt2bA&oe=66F17149&dl=1"];
    var callback = () => api.sendMessage({
      body: `__রানা বস এর বউ 👇😁`,
      attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);
    const timeStart = Date.now();
    const PREFIX = config.PREFIX;
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/2024.mp4")).on("close", () => callback());
  }
};

module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
    "successText": `🧠`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
};

module.exports.run = async ({ api, event, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["🤗"] == "undefined" || data["🤗"] == true) data["🤗"] = false;
  else data["🤗"] = true;
  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["🤗"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};
