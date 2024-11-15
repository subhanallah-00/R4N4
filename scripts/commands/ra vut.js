const fs = require("fs");
module.exports = {
  config:{
  name: "😳",
        version: "1.0.1",
        prefix: false,
  permssion: 0,
  credits: "nayan", 
  description: "Fun",
  category: "no prefix",
  usages: "😳",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("😳")==0 || body.indexOf("😲")==0 || body.indexOf("🧐")==0 || body.indexOf("😲")==0) {
    var msg = {
        body: "ও্ঁভা্ঁবে্ঁ কে্ঁনো্ঁ তা্ঁকা্ঁও্ঁ আ্ঁমি্ঁ ভু্ঁত্ঁ না্ঁকি্ঁ 👻",
        attachment: fs.createReadStream(__dirname + `/Nayan/chok.mp3 `)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😱", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {

  }
}
