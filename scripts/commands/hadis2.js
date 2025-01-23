const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: `proverbgame`,
  version: "1.0.0", 
  permission: 0,
  credits: "Rahad",
  description: "বাংলা প্রবাদ বাক্য গেম", 
  prefix: true,
  category: "user",
  usages: "প্রবাদ দাও",
  cooldowns: 5, 
  dependencies: {}
};

module.exports.handleEvent = async function({ api, event }) {
  const { threadID, messageID, body } = event;

  // প্রবাদ বাক্য এবং তাদের সঠিক উত্তরগুলোর অ্যারে
  const proverbs = [
    { question: "জলে কুমির, ডাঙায় ...", answer: "বাঘ" },
    { question: "নাচতে না জানলে ...", answer: "উঠান বাঁকা" },
    { question: "যার লাঠি ...", answer: "তার ভৈরব" },
    { question: "অতি লোভে ...", answer: "তাঁতি নষ্ট" },
    { question: "চোর পালালে ...", answer: "বুদ্ধি বাড়ে" }
  ];

  // র‍্যান্ডম প্রবাদ বাক্য নির্বাচন
  const randomProverb = proverbs[Math.floor(Math.random() * proverbs.length)];

  // যদি ব্যবহারকারী "প্রবাদ দাও" বলে
  if (body.toLowerCase() === "প্রবাদ দাও") {
    return api.sendMessage(
      `📝 *প্রশ্ন*: "${randomProverb.question}" বাক্যটি সম্পূর্ণ করো।`,
      threadID,
      (err, info) => {
        // প্রবাদটির উত্তর সেভ করা হচ্ছে ভবিষ্যতের উত্তর চেক করার জন্য
        global._currentProverb = {
          threadID: threadID,
          correctAnswer: randomProverb.answer.toLowerCase()
        };
      }
    );
  }

  // ব্যবহারকারীর উত্তর চেক করা
  if (global._currentProverb && global._currentProverb.threadID === threadID) {
    const userAnswer = body.toLowerCase();
    const correctAnswer = global._currentProverb.correctAnswer;

    if (userAnswer === correctAnswer) {
      global._currentProverb = null; // প্রবাদ গেমটি রিসেট করা
      return api.sendMessage(`দারুণ! সঠিক উত্তর। 🎉`, threadID, messageID);
    } else {
      return api.sendMessage(`উফ! ভুল উত্তর। আবার চেষ্টা করো! 🙁`, threadID, messageID);
    }
  }
};

module.exports.run = function({ api, event }) {
  api.sendMessage("প্রবাদ গেম শুরু করতে 'প্রবাদ দাও' বলো!", event.threadID);
};
