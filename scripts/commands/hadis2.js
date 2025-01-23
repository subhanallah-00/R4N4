const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: `truth`,
  version: "1.0.0", 
  permission: 0,
  credits: "RANA",
  description: "Play Truth or Dare in the chat", 
  prefix: true,
  category: "user",
  usages: "truth or dare",
  cooldowns: 5, 
  dependencies: {}
};

module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  const { threadID, messageID, senderID } = event;

  const truthQuestions = [
    "What’s the most embarrassing thing you’ve ever done?",
    "Have you ever lied to someone important?",
    "What’s a secret you’ve never told anyone?",
    "Who do you have a crush on right now?",
    "What’s the craziest thing you’ve done for love?"
  ];

  const dareTasks = [
    "Send a funny selfie to the group!",
    "Act like a chicken for the next 30 seconds.",
    "Change your profile picture to something silly for an hour.",
    "Send 'I love you' to someone random on your contact list.",
    "Type the alphabet backward in the chat!"
  ];

  const message = event.body.toLowerCase();

  if (message === "truth or dare") {
    const choices = ["Truth", "Dare"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];

    if (randomChoice === "Truth") {
      const randomTruth = truthQuestions[Math.floor(Math.random() * truthQuestions.length)];
      return api.sendMessage(`📝 *Truth*: ${randomTruth}`, threadID, messageID);
    } else {
      const randomDare = dareTasks[Math.floor(Math.random() * dareTasks.length)];
      return api.sendMessage(`🔥 *Dare*: ${randomDare}`, threadID, messageID);
    }
  }
};

module.exports.run = function({ api, event, client, __GLOBAL }) {};
