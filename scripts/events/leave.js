module.exports.config = {
  name: "leave",
  eventType: ["log:unsubscribe"],
  version: "1.0.0",
  credits: "Nayan",
  description: "notify leave.",
};

module.exports.run = async function({ api, event, Users, Threads }) {
  if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;

  const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { join } = global.nodemodule["path"];
  const { threadID } = event;
  const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
  const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
  const type = (event.author == event.logMessageData.leftParticipantFbId) ? " কিরে কোথায় পালাস আমি রানা bot থাকতে পালাতে পারবি না 🙈😽 দারা তোরে আবার এড দিবো 🤨😁" : "বাল পাকনামির কারণে কিক খাইলো..🤧";
  const path = join(__dirname, "Nayan", "leavemp4");
  const gifPath = join(path, `l.mp4`);
  let msg, formPush;

  // Create directory if it does not exist
  if (!existsSync(path)) mkdirSync(path, { recursive: true });

  if (typeof data.customLeave === "undefined") {
    msg = "ইস {name} {type} 🤖";
  } else {
    msg = data.customLeave;
  }
  msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);

  if (existsSync(gifPath)) {
    formPush = { body: msg, attachment: createReadStream(gifPath) };
  } else {
    formPush = { body: msg };
  }

  return api.sendMessage(formPush, threadID);
};
