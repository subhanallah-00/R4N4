// Fix by Mohammad Nayan. Dont Change Credit


const fs = require('fs');
const ytdl = require('ytdl-core');
const { resolve } = require('path');
const nayan = require("nayan-media-downloader")
const axios = require("axios")
async function downloadMusicFromYoutube(link, path) {
  if (!link) return 'Link Not Found';

  const timestart = Date.now();

  try {
    const data = await nayan.ytdown(link);
    console.log(data)
    const audioUrl = data.data.video;

    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: audioUrl,
        responseType: 'stream'
      }).then(response => {
        const writeStream = fs.createWriteStream(path);

        response.data.pipe(writeStream)
          .on('finish', async () => {
            try {
              const info = await ytdl.getInfo(link);
              const result = {
                title: info.videoDetails.title,
                dur: Number(info.videoDetails.lengthSeconds),
                viewCount: info.videoDetails.viewCount,
                likes: info.videoDetails.likes,
                author: info.videoDetails.author.name,
                timestart: timestart
              };
              resolve(result);
            } catch (error) {
              reject(error);
            }
          })
          .on('error', (error) => {
            reject(error);
          });
      }).catch(error => {
        reject(error);
      });
    });
  } catch (error) {
    return Promise.reject(error);
  }
}



module.exports = {
  config: {
    
  name: "song", 
  version: "1.0.0", 
  permission: 0,
  credits: "Nayan",
  description: "example",
  prefix: true,
  category: "Media", 
  usages: "user", 
  cooldowns: 5,
  dependencies: {
    "axios":"",
    "fs":"",
    "nayan-media-downloader":"",
	  "ytdl-core":"",
    "simple-youtube-api":""
	}
},

handleReply: async function ({ api, event, handleReply }) {
    const axios = require('axios')
    const { createReadStream, unlinkSync, statSync } = require("fs-extra")
    try {
        var path = `${__dirname}/cache/1.mp3`
        var data = await downloadMusicFromYoutube('https://www.youtube.com/watch?v=' + handleReply.link[event.body -1], path);
        if (fs.statSync(path).size > 26214400) return api.sendMessage('The file cannot be sent because the capacity is greater than 25MB.', event.threadID, () => fs.unlinkSync(path), event.messageID);
        api.unsendMessage(handleReply.messageID)
        return api.sendMessage({ 
		body: `🎵 Title: ${data.title}\n🎶 Name Channel : ${data.author}\n⏱️ Time: ${this.convertHMS(data.dur)}\n👀 Views: ${data.viewCount}\n🥰 Likes: ${data.likes}\n⏱️Processing time: ${Math.floor((Date.now()- data.timestart)/1000)} second\n💿====DISME PROJECT====💿`,
            attachment: fs.createReadStream(path)}, event.threadID, ()=> fs.unlinkSync(path), 
         event.messageID)
            
    }
    catch (e) { return console.log(e) }
},
  
convertHMS: function(value) {
    const sec = parseInt(value, 10); 
    let hours   = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60); 
    let seconds = sec - (hours * 3600) - (minutes * 60); 
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return (hours != '00' ? hours +':': '') + minutes+':'+seconds;
},
  
  start: async function ({ nayan, events, args }) {
    if (args.length == 0 || !args) return nayan.reply('» উফফ আবাল কি গান শুনতে চাস তার ২/১ লাইন তো লেখবি নাকি 🥵 empty!', events.threadID, events.messageID);
    const keywordSearch = args.join(" ");
    var path = `${__dirname}/cache/1.mp3`
    if (fs.existsSync(path)) { 
        fs.unlinkSync(path)
    }
    if (args.join(" ").indexOf("https://") == 0) {
        try {
            var data = await downloadMusicFromYoutube(args.join(" "), path);
            if (fs.statSync(path).size > 26214400) return nayan.reply('Unable to send files because the capacity is greater than 25MB .', events.threadID, () => fs.unlinkSync(path), events.messageID);
            return nayan.reply({ 
                body: `🎵 Title: ${data.title}\n🎶 Name Channel: ${data.author}\n⏱️ Time: ${this.convertHMS(data.dur)}\n👀 Views: ${data.viewCount}\n👍 Likes: ${data.likes}\n⏱️ Processing time: ${Math.floor((Date.now()- data.timestart)/1000)} second\n💿====DISME PROJECT====💿`,
                attachment: fs.createReadStream(path)}, events.threadID, ()=> fs.unlinkSync(path), 
            events.messageID)

        }
        catch (e) { return console.log(e) }
    } else {
          try {
            var link = [],
                msg = "",
                num = 0
            const Youtube = require('youtube-search-api');
            var data = (await Youtube.GetListByKeyword(keywordSearch, false,6)).items;
            for (let value of data) {
              link.push(value.id);
              num = num+=1
              msg += (`${num} - ${value.title} (${value.length.simpleText})\n\n`);
            }
            var body = `»🔎 There's ${link.length} the result coincides with your search keyword:\n\n${msg}» Reply(feedback) select one of the searches above `
            return nayan.reply({
              body: body
            }, events.threadID, (error, info) => global.client.handleReply.push({
              type: 'reply',
              name: this.config.name,
              messageID: info.messageID,
              author: events.senderID,
              link
            }), events.messageID);
          } catch(e) {
            return nayan.reply('An error has occurred, please try again in a moment!!\n' + e, events.threadID, events.messageID);
        }
    }
                                                                                                                                                                                                       }}
