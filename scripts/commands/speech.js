module.exports = {
  config: {
    name: "speech",
    version: "1.0.0",
    permission: 0,
    credits: "NAYAN",
    prefix: 'awto',
    description: "text to voice",
    category: "user",
    usages: "text",
    cooldowns: 0,
    dependencies: {
      "fs": "",
      "axios": "",
      "nayan-server": "^2.4.2"
    },
    envConfig: {
      name: 'Nabanita'
    }
  },

  languages: {
    "vi": {},
    "en": {
      "error": '❌ Something Went Wrong🐱'
    }
  },

  start: async function ({ nayan, args, events, lang }) {
    const { text2voice } = require('nayan-server');
    const fs = require('fs');
    const path = require('path');
    var content = (events.type == "message_reply") ? events.messageReply.body : args.join(" ");
    const filePath = path.join(__dirname, "Nayan/text.mp3");

    try {
      const d = await text2voice(content, global.configModule[this.config.name].name, filePath);
      console.log(d);

      const voice = fs.createReadStream(filePath);
      var audioss = [voice];
      var msg = { body: content, attachment: audioss };

      await nayan.reply(msg, events.threadID, events.messageID);

    } catch (error) {
      console.log(error)
      nayan.reply(lang("error"), events.threadID, events.messageID);
    }
  }
}
