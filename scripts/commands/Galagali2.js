const fs = require("fs");
module.exports.config = {
  name: "RANA",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("xudi")==0 || (event.body.indexOf("আবাল")==0 || (event.body.indexOf("মুরগি")==0 || (event.body.indexOf("hop")==0)))) {
		var msg = {
				body: "━━━━━━━━━━━━━━━━━━━━\n╭┈ ❒ 💬 | 𝐌𝐄𝐒𝐒𝐀𝐆𝐄:\n╰┈➤ এখানে গালাগালি করলে মুখ সেলাই কইরা দিমু..!!😾━━━━━━━━━━━━━━━━━━━━━━\n✿◕BOT OWNER : MOHAMMAD RANA"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
