const fs = require("fs");
module.exports = {
  config:{
  name: "rana",
  version: "1.0.1",
  prefix: false,
  permssion: 0,
  credits: "nayan", 
  description: "Fun",
  category: "no prefix",
  usages: "rana",
  cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("Rana")==0 || body.indexOf("RANA")==0 || body.indexOf("রানা")==0 || body.indexOf("rana")==0) {
    var msg = {
        body: "__〲 রানা বস এখন বিজি আছে ' যা বলার আমাকে বলুন..!!😙",
        attachment: fs.createReadStream(__dirname + `/Nayan/Rana.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😻", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {

  }
} 
