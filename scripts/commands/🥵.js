module.exports.config = {
	name: "🥵",
	version: "1.0.2",
	permission: 2,
	credits: "nayan cp by rana",
	prefix: true,
	description: "",
	category: "without prefix",
	usages: "[tag]",
	cooldowns: 5
};


module.exports.run = async function({ api, args, Users, event}) {
  var mention = Object.keys(event.mentions)[0];
  if(!mention) return api.sendMessage("দয়া করে ১জনকে ম্যানশন করুন", event.threadID);
let name =  event.mentions[mention];
  var arraytag = [];
      arraytag.push({id: mention, tag: name});
  var a = function (a) { api.sendMessage(a, event.threadID); }
a("Let's go sexy 🥵࿐");
setTimeout(() => {a({body: "__তোমার ঠোট উফফফ 🙈🥰࿐" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "__জান তুমি এত কিউট কেনো 🥵࿐" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "__Ummah নেও জান তাহ্ আমার 🥵💋࿐" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "__জান তুমি রানা বসের কাছে চলে জাও 😌🥵࿐" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "__জা্ঁন্ঁ তো্ঁমা্ঁর্ঁ ও্ঁলি্ঁতে্ঁ গ্ঁলি্ঁতে্ঁ আ্ঁই্ঁ লা্ঁভ্ঁ ই্ঁউ্ঁ 🙈💋࿐" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "__Uff তোমারে দেখে খুব প্রেম প্রেম ফিলিংস হচ্ছে 🥵😻࿐" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "__ও্ই্ঁ জা্ঁন্ঁ তু্ঁমি্ঁ তা্ঁকা্ঁই্ঁ  আ্ঁছ্ঁ কে্ঁন্ঁ কো্ঁলে্ঁ উ্ঁঠ্ঁবা্ঁ না্ঁকি্ঁ 🙈😹࿐" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "__তুমি যে এতো sexy মনে চায় সারাদিন তোমাকে আদর করি 🥵🙈࿐" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "__জান তুমি এতো sexy কেন রানা  বস তো পাগল হইয়া গেছে 😍😻࿐" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "__ওই sexy মাইয়া সুনো না আমার রানা বস তোমাকে পটাতে চাই 😌😋࿐" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "__তাকাই আছ কেন এইসব তো তোমাকেই বললাম 😻🙈࿐" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "__আচ্ছা যাও জান আর বলবো না এবার খুশি 😛🍆࿐" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "__দেখছো আমি চুপ হয়ে গেছি উম্মাহ জান 😘🥰࿐" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a("Creator ==MOHAMMAD RANA==🤍💚🥀࿐")} , 20000);


  }
