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
	if (event.body.indexOf("murgi")==0 || (event.body.indexOf("আবাল")==0 || (event.body.indexOf("মুরগি")==0 || (event.body.indexOf("hop")==0)))) {
		var msg = {
				body: "┏━━━❌গালি দিস না❌━━━┓\n┃━➤ গালি দিলে পাপ হয়..😤⚠️\n┗━━━━━━━━━━━━━━━━┛"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
