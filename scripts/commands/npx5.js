const fs = require("fs");
module.exports = {
config:{
name: "npx5",
version: "1.0.1",
prefix: false,
permssion: 0,
credits: "RANA", 
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
	const NAYAN = ['https://i.imgur.com/rztWmL1.mp4','https://i.imgur.com/nR7U3mO.mp4','https://i.imgur.com/giMsMV5.mp4','https://i.imgur.com/8PQrQmR.mp4','https://i.imgur.com/QowFfoY.mp4','https://i.imgur.com/vMAtWIU.mp4']
		var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
		await axios.get(
			`${rndm}`,
			{ responseType: 'stream' }
		)
	).data;

	if (body.indexOf("🙍🏻‍♀️")==0 || body.indexOf("💁🏻‍♀️")==0 || body.indexOf("🙆🏻‍♀️")==0 || body.indexOf("🙇🏻‍♀️")==0 || body.indexOf("🙅🏻‍♀️")==0 || body.indexOf("👩‍❤️‍💋‍👩")==0 || body.indexOf("🙎🏻‍♀️")==0 || body.indexOf("👩🏻")==0 || body.indexOf("🙋🏻‍♀️")==0 || body.indexOf("🙆🏻‍♀️")==0) {
		var msg = {
				body: "__মিয়া খলিফার...!!🥵\n😫>কষ্টের কয়েকটা নাটক দেখলাম_<🌚\n__হায়রে চিল্লানিরে মামা...!!🙂 ",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
		api.setMessageReaction("🥵", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}    
