const fs = require("fs");
module.exports = {
  config:{
  name: "farhan",
        version: "1.0.1",
        prefix: false,
  permssion: 0,
  credits: "nayan", 
  description: "Fun",
  category: "no prefix",
  usages: "farhan",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("Farhan")==0 || body.indexOf("FARHAN")==0 || body.indexOf("ফারহান")==0 || body.indexOf("farhan")==0) {
    var msg = {
        body: "ফা্ঁর্ঁহা্ঁন্ঁ এ্ঁখ্ঁন্ঁ খু্ঁব্ঁ বি্ঁজি্ঁ 🥰❤️🥀",
        attachment: fs.createReadStream(__dirname + `/Nayan/boss.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {

  }
} 