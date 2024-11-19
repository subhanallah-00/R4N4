module.exports.config = {
  name: "namaz",
  version: "1.0.0",
  permission: 0,
  credits: "ryuko",
  prefix: true,
  description: "rules",
  category: "rules",
  usages: "",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const prompt = args.join(" ");

  if (!prompt) return api.sendMessage("[ ! ] Input Your address", event.threadID, event.messageID);


 const RAHAD = `https://api.aladhan.com/v1/timingsByAddress/16-03-2024?address=${encodeURIComponent(prompt)}`;

  try {
    const response = await axios.get(RAHAD);
    const timings = response.data.data.timings;


    const RahadApiUrl = "https://i.imgur.com/HMls9p5.mp4";
    const videoResponse = await axios.get(RahadApiUrl);
    const videoUrl = videoResponse.data.url.url;

    const videoBuffer = await axios.get(videoUrl, { responseType: 'arraybuffer' });

    fs.writeFileSync(__dirname + "/cache/video.mp4", Buffer.from(videoBuffer.data, "utf-8"));
    const videoReadStream = fs.createReadStream(__dirname + "/cache/video.mp4");

    const msg = `═══════▣ 𝚁𝙰𝙽𝙰 ▣═══════\n\nনামাযের-সময়:${prompt}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n╰┈► ফজর: ${timings.Fajr}\n\n╰┈► যহর: ${timings.Dhuhr}\n\n╰┈► আছর: ${timings.Asr}\n\n╰┈► সূর্যাস্ত: ${timings.Sunset}\n\n╰┈► মাগরিব: ${timings.Maghrib}\n\n╰┈► ইশা: ${timings.Isha}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n╰┈► ইমসাক: ${timings.Imsak}\n\n╰┈► মধ্যরাত: ${timings.Midnight}\n\n═══════▣ 𝚁𝙰𝙽𝙰 ▣═══════`;

    return api.sendMessage(
      {
        body: msg,
        attachment: videoReadStream,
      },
      event.threadID,
      event.messageID
    );
  } catch (error) {

    console.error("API request error:", error);
    return api.sendMessage("[ ! ] An error occurred while fetching data.", event.threadID, event.messageID);
  }
};
