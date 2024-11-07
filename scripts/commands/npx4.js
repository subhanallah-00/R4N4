const fs = require("fs");
module.exports = {
  config:{
	name: "npx4",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "Mohammad Rana", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
const media = (
    await axios.get(
      'https://i.imgur.com/6Gk5If2.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("miss")==0 || body.indexOf("⌛")==0 || body.indexOf("⏳")==0 || body.indexOf("⌚")==0 || body.indexOf("⏰")==0 || body.indexOf("⏱️")==0 || body.indexOf("⏲️")==0 || body.indexOf("🕰️")==0 || body.indexOf("🕛")==0 || body.indexOf("wait")==0) {
		var msg = {
				body: "তোমাকে সত্যিই অনেক miss করি প্রিয়  🥹🥹",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥺", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
  }
