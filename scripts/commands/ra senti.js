const fs = require("fs");
module.exports = {
  config:{
  name: "🙃",
        version: "1.0.1",
        prefix: false,
  permssion: 0,
  credits: "nayan", 
  description: "Fun",
  category: "no prefix",
  usages: "🤣",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("🙂")==0 || body.indexOf("🙃")==0 || body.indexOf("🫠")==0 || body.indexOf("😊")==0) {
    var msg = {
        body: "কি্ঁ হ্ঁই্ঁছে্ঁ সু্ঁনা্ঁ সে্ঁন্টি্ঁ খা্ঁও্ঁ কে্ঁনো্ঁ 😒",
        attachment: fs.createReadStream(__dirname + `/Nayan/santiy.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🫠", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {

  }
} 