const fs = require("fs");
const DIG = require("discord-image-generation"); 
const usersData = require("yourUserDataModule"); 

module.exports.config = {
  name: "jail",
  version: "1.0.1",
  permission: 0,
  prefix: true,
  credits: "SK-SIDDIK-KHAN",
  category: "fun",
  usages: "user",
  cooldowns: 5,
};

module.exports.handleEvent = async function({ api, event, client, __GLOBAL }) {
  const uid1 = event.senderID;
  const uid2 = Object.keys(event.mentions)[0];

  if (!uid2) return api.sendMessage("Please tag a user to send them to jail!", event.threadID);

  try {
    const avatarURL1 = await usersData.getAvatarUrl(uid1);
    const avatarURL2 = await usersData.getAvatarUrl(uid2);

    const img = await new DIG.Jail().getImage(avatarURL2);
    const pathSave = `${__dirname}/tmp/${uid2}_Jail.png`;

    fs.writeFileSync(pathSave, Buffer.from(img));

    const content = event.body.replace(Object.keys(event.mentions)[0], "").trim() || "You're in jail! 🚔";

    api.sendMessage(
      {
        body: content,
        attachment: fs.createReadStream(pathSave),
      },
      event.threadID,
      () => {
        fs.unlinkSync(pathSave);
      }
    );
  } catch (err) {
    console.error("Error processing jail image:", err);
    api.sendMessage("An error occurred while processing the request.", event.threadID);
  }
};
