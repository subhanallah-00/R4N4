const fs = require("fs");
module.exports.config = {
  name: "iloveu5",
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
	if (event.body.indexOf("oi")==0 || (event.body.indexOf("bbz")==0 || (event.body.indexOf("afru")==0 || (event.body.indexOf("af ru")==0)))) {
		var msg = {
				body: "━━━━━━━━━━━━━━━━━━━━\n╭┈ ❒ 💬 | 𝐌𝐄𝐒𝐒𝐀𝐆𝐄:\n╰┈➤ কি হয়েছে জানু আমার... !!😗\n━━━━━━━━━━━━━━━━━━━━━━\n✿◕𝗠𝗢𝗛𝗔𝗠𝗠𝗔𝗗 𝗥𝗔𝗡𝗔"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
