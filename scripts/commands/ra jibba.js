const fs = require("fs");
module.exports = {
  config:{
  name: "😋",
        version: "1.0.1",
        prefix: false,
  permssion: 0,
  credits: "nayan", 
  description: "Fun",
  category: "no prefix",
  usages: "😋",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("😋")==0 || body.indexOf("😜")==0 || body.indexOf("🤪")==0 || body.indexOf("😝")==0) {
    var msg = {
        body: "জি্ঁব্বা্ঁ দে্ঁখা্ঁও্ঁ কে্ঁটে্ঁ দি্ঁমু্ঁ 😒🥀",
        attachment: fs.createReadStream(__dirname + `/Nayan/jibba.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🔔", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {

  }
} 