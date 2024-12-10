module.exports.config = {
  name: "ajan",
  version: "2.0",
  permssion: 0,
  prefix: true,
  credits: "RANA",
  description: "সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!",
  category: "AutoTime",
  countDown: 3
};

module.exports.onLoad = async ({ api }) => {
  const timerData = {
    "01:03 PM": {
      message: "এখন যোহর এর আজান দিবে সবাই নামাজ পড়েন",
      url: "https://i.imgur.com/vtOBIkA.jpeg"
    },
"04:45 AM": {
      message: "এখন ফজর এর আজান দিবে সবাই নামাজ পরে নাও",
      url: "https://i.imgur.com/7K67WOG.jpeg"
    },
    "01:15 PM": {
      message: "Its time to prayer",
      url: "https://i.imgur.com/hprI30O.jpeg"
    },
    "05:45 PM": {
      message: "এখন মাগরিব এর আজান হবে সবাই নামাজ আদায় করবেন",
      url: "https://i.imgur.com/vlFSFL6.jpeg"
    },
    "07:30 PM": {
      message: "এখন এশার আজান দিবে এই সব কাজ অফ করে নামাজ পড়েন",
      url: "https://i.imgur.com/7K67WOG.jpeg"
    }
  };

  const checkTimeAndSendMessage = async () => {
    const currentTime = new Date(Date.now() + 21600000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).split(',').pop().trim();

    if (timerData[currentTime]) {
      console.log(timerData[currentTime].message);
      console.log(timerData[currentTime].url);
      try {
       let messageData = { body: timerData[currentTime].message,attachment:(await require('axios').get(timerData[currentTime].url, { responseType: 'stream' })).data };

        global.data.allThreadID.forEach(i => api.sendMessage(messageData, i));
      } catch (error) {
        console.error(`Failed to send message for time ${currentTime}:`, error);
      }
    }
    setTimeout(checkTimeAndSendMessage, 45000);
  };

  checkTimeAndSendMessage();
};

module.exports.run= ({}) => {};
