module.exports.config = {
  name: "npm",
  prefix: true,
  version: "1.1.1",
  permission: 0,
  credits: "Nayan",
  description: "Fetch information or install an NPM package",
  category: "system",
  usages: "[info/install] [package name]",
  cooldowns: 5
};

module.exports.language = {
  en: {
    missing_args: "Usage: /npm [info/install] [package name]",
    notHavePermission: "You don't have permission to use the 'install' command.",
    fetching_info: "🔄 Fetching package information for: ",
    info_result:
      "📦 Package Information:\nName: {name}\nVersion: {version}\nDescription: {description}\nHomepage: {homepage}\nAuthor: {author}\nTotal Downloads: {downloads}",
    installing: "🔄 Installing package: ",
    installed: "✅ Successfully installed: ",
    install_error: "❌ Error while installing the package: ",
    fetch_error: "❌ Error while fetching package information: "
  },
  bn: {
    missing_args: "ব্যবহার: /npm [info/install] [প্যাকেজের নাম]",
    notHavePermission: "'install' কমান্ড ব্যবহারের অনুমতি নেই।",
    fetching_info: "🔄 প্যাকেজ তথ্য আনছে: ",
    info_result:
      "📦 প্যাকেজ তথ্য:\nনাম: {name}\nসংস্করণ: {version}\nবর্ণনা: {description}\nহোমপেজ: {homepage}\nলেখক: {author}\nমোট ডাউনলোড: {downloads}",
    installing: "🔄 প্যাকেজ ইনস্টল হচ্ছে: ",
    installed: "✅ সফলভাবে ইনস্টল হয়েছে: ",
    install_error: "❌ প্যাকেজ ইনস্টল করার সময় ত্রুটি: ",
    fetch_error: "❌ প্যাকেজ তথ্য আনতে ত্রুটি: "
  }
};

module.exports.run = async ({ api, event, args, getText, permssion }) => {
  const { exec } = require("child_process");
  const axios = require("axios");
  const { threadID, messageID } = event;

  const gl = global.config.language;
  const lang = module.exports.language[gl] || module.exports.language.en;

  if (args.length < 2) {
    return api.sendMessage(lang.missing_args, threadID, messageID);
  }

  const command = args[0].toLowerCase();
  const packageName = args.slice(1).join(" ").trim();

  if (!packageName) {
    return api.sendMessage(lang.missing_args, threadID, messageID);
  }

  if (command === "info") {
    const fetchingMessageID = await new Promise((resolve) =>
      api.sendMessage(`${lang.fetching_info}${packageName}`, threadID, (err, info) => {
        if (!err) resolve(info.messageID);
      })
    );

    try {
      const [packageData, downloadData] = await Promise.all([
        axios.get(`https://registry.npmjs.org/${packageName}`),
        axios.get(`https://api.npmjs.org/downloads/point/1970-01-01:9999-12-31/${packageName}`)
      ]);

      const data = packageData.data;
      const downloads = downloadData.data.downloads || 0;

      const infoMessage = lang.info_result
        .replace("{name}", data.name || "N/A")
        .replace("{version}", data["dist-tags"]?.latest || "N/A")
        .replace("{description}", data.description || "N/A")
        .replace("{homepage}", data.homepage || "N/A")
        .replace("{author}", data.author?.name || "N/A")
        .replace("{downloads}", downloads.toLocaleString());

      await api.unsendMessage(fetchingMessageID);
      return api.sendMessage(infoMessage, threadID, messageID);
    } catch (error) {
      console.error(error);
      await api.unsendMessage(fetchingMessageID);
      return api.sendMessage(`${lang.fetch_error}${error.message}`, threadID, messageID);
    }
  } else if (command === "install") {
  if (permssion != 2) return api.sendMessage(lang.notHavePermission, threadID, messageID);
    const installingMessageID = await new Promise((resolve) =>
      api.sendMessage(`${lang.installing}${packageName}`, threadID, (err, info) => {
        if (!err) resolve(info.messageID);
      })
    );

    exec(`npm install ${packageName}`, { cwd: process.cwd() }, async (error, stdout, stderr) => {
      if (error) {
        console.error(stderr);
        await api.unsendMessage(installingMessageID);
        return api.sendMessage(`${lang.install_error}${stderr}`, threadID, messageID);
      }

      await api.unsendMessage(installingMessageID);
      return api.sendMessage(`${lang.installed}${packageName}`, threadID, messageID);
    });
  } else {
    return api.sendMessage(lang.missing_args, threadID, messageID);
  }
};
