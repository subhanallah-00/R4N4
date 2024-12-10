module.exports.config = {
  name: "fblink",
  version: "1.0.1",
  prefix: true,
  permssion: 0,
  credits: "RANA", 
  description: "Mention Fblink",
  category: "fun",
  usages: "Tag Facebook Link💝",
  cooldowns: 5, 
},

module.exports.run = function({ api, event }) {
	if (Object.keys(event.mentions) == 0) return api.sendMessage(`https://www.facebook.com/profile.php?id=${event.senderID}`, event.threadID, event.messageID);
	else {
		for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: https://www.facebook.com/profile.php?id=${Object.keys(event.mentions)[i]}`, event.threadID);
		return;
	}
  }
