module.exports.config = {

    name: "4k",

    version: "1.0.0",

    permission: 0,

    credits: "Nayan",

    description: "Photo Convert HD",

    prefix: 'awto',

    category: "user",

    usages: "4k [Reply photo]",

    cooldowns: 10,

    dependencies: {

       'nayan-server': ''

    }

};

module.exports.run = async function({ api, event, args }) {

  

    const axios = require("axios")

    const request = require("request")

    const fs = require("fs-extra")

    const {upscale} = require('nayan-server')

          if (event.type !== "message_reply") return api.sendMessage("[❗]➜ You must reply to a photo", event.threadID, event.messageID);

        if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("[❗]➜ You must reply to a photo", event.threadID, event.messageID);

        if (event.messageReply.attachments[0].type != "photo") return api.sendMessage("[❓]➜ This is not an image", event.threadID, event.messageID);

  const content = (event.type == "message_reply") ? event.messageReply.attachments[0].url : args.join(" ");

  

  const mod = args[0];

  

const model = mod

  try {

const res = await upscale(content, model)

  console.log(res)

  api.setMessageReaction("✅", event.messageID, (err) => {

      }, true);

  const img1 = res.image_url

  const job = res.job_id

        var msg = [];

  const pic = (

    await axios.get(`https://images.prodia.xyz/${job}.png`,

      { responseType: 'stream' }

    )

  ).data;

        {

            msg += `✅HERE YOUR PHOTO`

        }

        return api.sendMessage({

            body: msg,

            attachment: pic

        }, event.threadID, event.messageID);

     } catch (err) {

     api.setMessageReaction("❌", event.messageID, (err) => {

    }, true);

      api.sendMessage(`🔰Use ${global.config.PREFIX}${this.config.name} [model]\n🔰Example:${global.config.PREFIX}${this.config.name} 1\n\n🔥Total Model limit 2...`, event.threadID, event.messageID);  

     }

  };
