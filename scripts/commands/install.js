module.exports.config = {
  name: "install",
  prefix: true,
  version: "1.0.0",
  permission: 2,
  credits: "Nayan",
  description: "Install and create new command files",
  category: "system",
  usages: "[file name] [script]",
  cooldowns: 5
};

module.exports.language = {
  en: {
    missing_args: "Usage: /install [file name] [script]",
    missing_config: "❌ Script must include 'module.exports.config'.",
    missing_run_start: "❌ Script must include either 'module.exports.run' or 'module.exports.start'.",
    missing_packages: "❌ Script includes 'dependencies' but the required packages are not installed.",
    file_exists: "❌ File already exists. Give React to overwrite.",
    file_created: "✅ Successfully created the file: ",
    script_error: "❌ An error occurred while processing the script: ",
    general_error: "❌ An error occurred while creating the file: "
  },
  bn: {
    missing_args: "ব্যবহার: /install [ফাইলের নাম] [স্ক্রিপ্ট]",
    missing_config: "❌ স্ক্রিপ্টে 'module.exports.config' অন্তর্ভুক্ত করতে হবে।",
    missing_run_start: "❌ স্ক্রিপ্টে 'module.exports.run' বা 'module.exports.start' অন্তর্ভুক্ত করতে হবে।",
    missing_packages: "❌ স্ক্রিপ্টে 'dependencies' অন্তর্ভুক্ত রয়েছে কিন্তু প্রয়োজনীয় প্যাকেজগুলি ইনস্টল করা হয়নি।",
    file_exists: "❌ ফাইল ইতিমধ্যে বিদ্যমান। 👍 ওভাররাইট করতে বা ❌ বাতিল করতে চাপুন।",
    file_created: "✅ ফাইল সফলভাবে তৈরি হয়েছে: ",
    script_error: "❌ স্ক্রিপ্ট প্রসেস করার সময় একটি ত্রুটি ঘটেছে: ",
    general_error: "❌ ফাইল তৈরির সময় একটি ত্রুটি ঘটেছে: "
  }
};

module.exports.run = async ({ api, event, args }) => {
  const fs = require("fs-extra");
  const { threadID, messageID, senderID } = event;

  const gl = global.config.language;
  const lang = module.exports.language[gl] || module.exports.language.en;

  if (args.length < 2) {
    return api.sendMessage(lang.missing_args, threadID, messageID);
  }

  try {
    const fileName = args[0];
    const scriptContent = args.slice(1).join(" ");

    if (!scriptContent.includes("module.exports.config")) {
      return api.sendMessage(lang.missing_config, threadID, messageID);
    }
    if (
      !scriptContent.includes("module.exports.run") &&
      !scriptContent.includes("module.exports.start")
    ) {
      return api.sendMessage(lang.missing_run_start, threadID, messageID);
    }

    const filePath = fileName.endsWith(".js")
      ? `${__dirname}/${fileName}`
      : `${__dirname}/${fileName}.js`;

    if (fs.existsSync(filePath)) {
      const msg = await api.sendMessage(
        lang.file_exists,
        threadID,
        (err, info) => {
          if (!err) {
            global.client.handleReaction.push({
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              filePath,
              scriptContent
            });
          }
        }
      );
      return;
    }

    await fs.writeFile(filePath, scriptContent);
    return api.sendMessage(`${lang.file_created}${fileName}`, threadID, messageID);
  } catch (err) {
    console.error(err);
    return api.sendMessage(
      `${lang.script_error}${err.message}`,
      threadID,
      messageID
    );
  }
};

module.exports.handleReaction = async ({ event, api, Users, handleReaction }) => {
  const fs = require("fs-extra");
  if (parseInt(event.userID) !== parseInt(handleReaction.author)) return;

  const gl = global.config.language;
  const lang = module.exports.language[gl] || module.exports.language.en;

  const { threadID, userID, messageID } = event;

  if (!global.client.handleReaction.some(item => item.messageID === messageID)) return;

  const { filePath, scriptContent } = handleReaction;

  try {
    await fs.writeFile(filePath, scriptContent);
    api.sendMessage(`${lang.file_created}${filePath.split("/").pop()}`, threadID);
    return api.unsendMessage(messageID);
  } catch (err) {
    console.error(err);
    api.sendMessage(`${lang.general_error}${err.message}`, threadID);
  }
};
