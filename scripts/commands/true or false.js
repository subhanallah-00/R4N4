const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: `truefalsegame`,
  version: "1.0.0", 
  permission: 0,
  credits: "RANA",
  description: "সত্যি-মিথ্যা গেম খেলুন!", 
  prefix: true,
  category: "fun",
  usages: "true-false",
  cooldowns: 5, 
  dependencies: {}
};

module.exports.handleEvent = async function({ api, event }) {
  const { threadID, messageID, body } = event;

  // প্রশ্ন এবং তাদের সঠিক উত্তর
  const trueFalseQuestions = [
    { statement: "বাংলাদেশ বিশ্বের সবচেয়ে বড় ম্যানগ্রোভ বন সুন্দরবনের অধিকারী।", answer: "true" },
    { statement: "তুমি আমাকে ভালোবাসো তাইনা.. 🥰🫶", answer: "false" },
    { statement: "পৃথিবী সূর্যের চারদিকে ঘোরে।", answer: "true" },
    { statement: "মানুষের হৃদয় দিনে ১ লক্ষ বার স্পন্দিত হয়।", answer: "false" },
    { statement: "আমার বস রানা একজন ভালো মনের মানুষ..🥰🫶", answer: "true" }
  ];

  // ব্যবহারকারীর বার্তা
  const message = body.toLowerCase();

  // গেম শুরু: সত্যি-মিথ্যা দাও
  if (message === "true-false") {
    const randomQuestion = trueFalseQuestions[Math.floor(Math.random() * trueFalseQuestions.length)];
    global._currentQuestion = {
      threadID: threadID,
      statement: randomQuestion.statement,
      correctAnswer: randomQuestion.answer.toLowerCase()
    };

    return api.sendMessage(`📝 প্রশ্ন: "${randomQuestion.statement}" এটি কি সত্যি নাকি মিথ্যা?`, threadID, messageID);
  }

  // উত্তর চেক
  if (global._currentQuestion && global._currentQuestion.threadID === threadID) {
    const userAnswer = message;
    const correctAnswer = global._currentQuestion.correctAnswer;

    if (userAnswer === correctAnswer) {
      global._currentQuestion = null; // গেমটি রিসেট করা
      return api.sendMessage("🎉 একদম ঠিক বলেছো!", threadID, messageID);
    } else if (userAnswer === "true" || userAnswer === "false") {
      global._currentQuestion = null; // গেমটি রিসেট করা
      return api.sendMessage("🙁 উফ! ভুল উত্তর।", threadID, messageID);
    }
  }
};

module.exports.run = function({ api, event }) {
  api.sendMessage("সত্যি-মিথ্যা গেম শুরু করতে 'সত্যি-মিথ্যা দাও' বলো!", event.threadID);
};
