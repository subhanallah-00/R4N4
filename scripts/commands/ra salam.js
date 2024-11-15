const fs = require("fs");
module.exports = {
  config:{
  name: "salam",
        version: "1.0.1",
        prefix: false,
  permssion: 0,
  credits: "nayan", 
  description: "Fun",
  category: "no prefix",
  usages: "salam",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("Walaikumussalam")==0 || body.indexOf("আসসালামু আলাইকুম")==0 || body.indexOf("Assalamualaikum")==0 || body.indexOf("Salam")==0) {
    var msg = {
        body: "আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ আ্ঁলা্ঁই্ঁকু্ঁম্ঁ স্ঁবা্ঁই্ঁ কে্ঁম্ঁন্ঁ আ্ঁছে্ঁন্ঁ 🖤🥀",
        attachment: fs.createReadStream(__dirname + `/Nayan/salam.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("❣️", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {

  }
} 