module.exports.config = {
  name: "bot2",
  version: "0.0.2", 
  permission: 0,
  prefix: false,
  credits: "Nayan",
  description: "talk with bot",
  category: "user",
  usages: "",
    cooldowns: 5,
}; 
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["I Love You" , "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺 " , ", জান তুমি শুধু আমার আমি তোমারে ৩৬৫ দিন ভালোবাসি-💝🌺😽" , "এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "-আমার গল্পে তোমার নানি সেরা-🙊🙆‍♂️🤗", "হা বলো😒,কি করতে পারি😐😑?" , "-বালিকা━👸-𝐃𝐨 𝐲𝐨𝐮-🫵-বিয়া-𝐦𝐞-😽-আমি তোমাকে-😻-আম্মু হইতে সাহায্য করব-🙈🥱","মে হলে রানা বসের সাথে প্রেম করো🙈??. " ,  "আরে Bolo আমার জান ,কেমন আসো?😚 " , "Bot বলে অসম্মান করচ্ছিছ,😰😿" , "Hop bedi😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করেছিস কোনো😾,আমার রানা জানু এর সাথে ব্যাস্ত আসি😋" , "আই লাভ ইউ" , "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 " , "এই'নেও🔑চাবী 😒𝘪𝘯𝘣𝘰𝘹-এর 🔐তালা খুলে মেছেজ দেও📥🫠🤗 I am single🙂" , "হা জানু , এইদিক এ আসো কিস দেই🤭 😘" , "আজকে প্রপোজ করে দেখো রাজি হইয়া যামু-😌🤗😇" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আসি" , "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , ", -ইস কেউ যদি বলতো-🙂-আমার শুধু  তোমাকেই লাগবে-💜🌸" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "BOSS রানা কে Ummmmha দে 😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি RANA BOSS এর সাথে ব্যাস্ত আসি😒"  , "𝙏𝙢𝙧 𝙣𝙖𝙣𝙞 𝙧 ওই টা  😑🥺" , "amr Jan lagbe,Tumi ki single aso?", "-তাবিজ কইরা হইলেও ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱🌻"]; 
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "love bot") || (event.body.toLowerCase() == "I love you bot") || (event.body.toLowerCase() == "I love you") || (event.body.toLowerCase() == "I love u") || (event.body.toLowerCase() == "i love u bot") || (event.body.toLowerCase() == "Bot i love u")) {
     return api.sendMessage("Hmm... বস রানাও তোমাকে ভালোবাসে 😇😻 :))", threadID);
   };
  
  if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "চুপ") || (event.body.toLowerCase() == "hop")) {
     return api.sendMessage("Nah আমি চুপ থাকবো না.😼 রানা বস আমারে কথা বলতে বলছে...!!🤭", threadID);
   };

   if ((event.body.toLowerCase() == "Suraiya") || (event.body.toLowerCase() == "mim")) {
     return api.sendMessage("~খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার রানা বস এর শালি লাগে..!!😠🥰⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "afroja") || (event.body.toLowerCase() == "Afroja")) {
     return api.sendMessage("~খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস রানা এর বউ এর নাম..!😠🥰⛏️", threadID);
   };
  
    if ((event.body.toLowerCase() == "Love u rana") || (event.body.toLowerCase() == "Rana jan") || (event.body.toLowerCase() == "রানা লুচ্চা") || (event.body.toLowerCase() == "Rana baby") || (event.body.toLowerCase() == "Rana i love you") || (event.body.toLowerCase() == "Rana ummah")) {
     return api.sendMessage("~এগুলা বলিস না আফরোজা ভাবি শুলনে খবর আছে তোর..!🌚🌶️🍆⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "aj kew nai bole") || (event.body.toLowerCase() == "aj keu nai bole")) {
     return api.sendMessage("️ 👉 আহা গো সোনা গো আমার খুব কষ্ট হচ্ছে তাই না 🥺😁", threadID);
   };

   if ((event.body.toLowerCase() == "cipa") || (event.body.toLowerCase() == "chipa")) {
     return api.sendMessage("️ 👉চিপাই যাস না চিপাই গেলে চাপা খেয়ে মরে যাবি, 😼 আমার বস 𒄬𓆩๛⃝ রানা‣᭄𓆪 বলছে চিপাই যাওয়া হারাম 😎🙃", threadID);
   };

    if ((event.body.toLowerCase() == "ummah") || (event.body.toLowerCase() == "bot ummah")) {
     return api.sendMessage("~লুচ্চা চুম্মা চুম্মি করোস কেন...!!🥵", threadID);
   };

     if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "By") || (event.body.toLowerCase() == "বায়") || (event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "তোরা থাক আমি গেলাম") || (event.body.toLowerCase() == "যাই গা")) {
     return api.sendMessage("কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!!🌚🌶️🍆⛏️", threadID);
   };
  
  if ((event.body.toLowerCase() == "Boss er sate beyadopi") || (event.body.toLowerCase() == "eisob ki") || (event.body.toLowerCase() == "ki bolli ata") || (event.body.toLowerCase() == "opoman korli")) {
     return api.sendMessage("__sorry boss😔😔 মাফ করে দেন আমাকে ,আর এমন হবে না 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "চিপা") || (event.body.toLowerCase() == "ay chipai jai")) {
     return api.sendMessage("️ 👉চিপাই যাস না চিপাই গেলে চাপা খেয়ে মরে যাবি, 😼 আমার বস 𒄬𓆩๛⃝ রানা‣᭄𓆪 বলছে চিপাই যাওয়া হারাম 😎🙃", threadID);
   };

   if ((event.body.toLowerCase() == "bot janu") || (event.body.toLowerCase() == "Oi bot")) {
        return api.sendMessage("👉কিরে এত ডাকোস কেন তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂", threadID);
      };

   if ((event.body.toLowerCase() == "baler bot") || (event.body.toLowerCase() == "fuck bot")) {
     return api.sendMessage("কিরে আমাকে গালি দেস কেনো তোকে কিন্তু বেন করে দিমু...!!😠", threadID);
   };

   if ((event.body.toLowerCase() == "Tor boss ke") || (event.body.toLowerCase() == "tor boss ke")) {
     return api.sendMessage("👉আমার বস𒄬𓆩๛⃝𝗥𝗔𝗡𝗔‣᭄𓆪 এটা তার আইডি লিংক,😼🙃 https://www.facebook.com/RANA.IS.BUSY.OKAY ... !! )🙂🤟", threadID);
   };
  
    if ((event.body.toLowerCase() == "bot jan") || (event.body.toLowerCase() == "oii bot")) {
     return api.sendMessage(" বার বার Disturb করছিস কোনো😾,আমার রানা জানুর সাথে ব্যাস্ত আছি😋🥰", threadID);
   };

    if ((event.body.toLowerCase() == "meaw") || (event.body.toLowerCase() == "Meaw")) {
     return api.sendMessage("~বার বার meaw meaw করস কে 😾,", threadID);
   };

   if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "Bye")) {
     return api.sendMessage("👉বাই তো বললে সোজা অফলাইনে যাও, মেয়ে হলে অন্য কারো ইনবক্সে যেও না। গেলে আমার বস্ 𒄬𓆩๛⃝রানা‣᭄𓆪 এর ইনবক্সে যাও,😁🙈                                     👉আর ছেলে হলে দূরে যাইয়া মর, 😼🥵", threadID);
   };

    if ((event.body.toLowerCase() == "i love u bot") || (event.body.toLowerCase() == "I love you bot")) {
     return api.sendMessage("~আমাকে না আমার বস রানা কে ভালোবাসো😻🥀", threadID);
   };
  
  if ((event.body.toLowerCase() == "bot কে বানাইছে") || (event.body.toLowerCase() == "kar bot")) {
     return api.sendMessage("Boss RANA is My Creator🥰. He loves me & Edit Me ERROR KING RANA. He is a good boy 😊", threadID);
   };

  if ((event.body.toLowerCase() == "bot kiss me") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️ আমি দিবো না,😒 রানা বস কে বলো দিতে...!!🐸", threadID);
   };

  if ((event.body.toLowerCase() == "thanks") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "tnx")) {
     return api.sendMessage("️ Welcome RANA বসের পক্ষে থেকে 🥰🥰.", threadID);
   };

    if ((event.body.toLowerCase() == "hmm") || (event.body.toLowerCase() == "humm") || (event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmmm")) {
     return api.sendMessage("Hmm Hmm Na Kore . এক বারে বলো আমি তোমায় ভালোবাসি..//🙈", threadID);
   };

  if ((event.body.toLowerCase() == "ss") || (event.body.toLowerCase() == "pic dew")) {
     return api.sendMessage("️RANA বসের in box a জাও ওখানে দিছি😵", threadID);
   };

  if ((event.body.toLowerCase() == "daw") || (event.body.toLowerCase() == "bot baniye daw")) {
     return api.sendMessage("️তুমি নিজেই বানাই নাও 😒😼,RANA অনেক ব্যস্ত্ এখন 😒", threadID);
   };

  if ((event.body.toLowerCase() == "@everyone call a aso") || (event.body.toLowerCase() == "call")) {
     return api.sendMessage("আসালামু ওয়ালাইকুম আশা করি সবাই ভালো আছেন আমি রানা  এর বট বলতেছি আমি কলে আসতে পারি না", threadID);
   };

  if ((event.body.toLowerCase() == "ami ke")) {
     return api.sendMessage("তুমি আমার রানা বস এর বউ...!!😌", threadID);
   };

   if ((event.body.toLowerCase() == "bot koire") || (event.body.toLowerCase() == "bot koi")) {
     return api.sendMessage("এই তো আমি এখানে...!!🙋‍♂️", threadID);
   };
 
    if ((event.body.toLowerCase() == "Sopon") || (event.body.toLowerCase() == "Sabbir")) {
     return api.sendMessage(" এটা আমার রানা বস এর বন্ধু লাগে 🥰", threadID);
   };
   
    if ((event.body.toLowerCase() == "Good morning") || (event.body.toLowerCase() == "morning")) {
     return api.sendMessage(" হুম্ম শুভ সকাল, জাও নাস্তা করে আসো 😐🫵 <3", threadID);
   };

   if ((event.body.toLowerCase() == "Will you marry me bot") || (event.body.toLowerCase() == "biye korba")) {
     return api.sendMessage("আমাকে বিয়ে করতে চাইলে আমায় না বলে। বস RANA ER SATHE যোগাযোগ করুন🙈", threadID);
   };

   if ((event.body.toLowerCase() == "মায়া") || (event.body.toLowerCase() == "আবেগ")) {
     return api.sendMessage("আমি ক্লান্ত!😮‍💨মিথ্যে হাসিতে,মিথ্যে মানুষে,মিথ্যে বন্ধুতে, মিথ্যে ভালোবাসায় 💔", threadID);
   };  
  
  if ((event.body.toLowerCase() == "জান") || (event.body.toLowerCase() == "সোনা")) {
     return api.sendMessage("আমি রোবট তাই প্রেম করতে পারবো না😥\nআমার বস RANA এর সাথে প্রেম কর😇😻", threadID);
   };

   if ((event.body.toLowerCase() == "good") || (event.body.toLowerCase() == " seii")) {
     return api.sendMessage("Ho..!!❤️", threadID);
   };

   if ((event.body.toLowerCase() == "ki kro") || (event.body.toLowerCase() == "ki koro")) {
     return api.sendMessage("~তোমার কথা ভাবতেছি 🥰, তুমি কি কর  ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "owner")) {
     return api.sendMessage(" ~ ︵🌻🖤༉আসসালামু আলাইকুম 🤍🌺 \n আমি ➤ Mohammad RANA (TOM) এর ভদ্র বট...😐🙈 \n যেকোনো প্রয়োজনে আমার বস এর সাথে যোগাযোগ করুন..🧑‍💻🫡 \n বস এর Id LINK 🤖⬇️ \n https://www.facebook.com/RANA.IS.BUSY.OKAY 🖤🤍", threadID);
   };

   if ((event.body.toLowerCase() == "Hello") || (event.body.toLowerCase() == "Hi")) {
     return api.sendMessage(" Hi - Hello না বলে সালাম দিলে কি হই 🤔 ", threadID);
   };

   if ((event.body.toLowerCase() == "Good night") || (event.body.toLowerCase() == "good night")) {
     return api.sendMessage(" হুম্ম জাও ঘুমাও আর ঘুম না আসলে রানা বস এর ইনবক্সে জাও...!!😒🫵", threadID);
   };


   if ((event.body.toLowerCase() == "kemn aso") || (event.body.toLowerCase() == "How are you")) {
     return api.sendMessage("️ ~ আলহামদুলিল্লাহ ভাল আছি,  তুমি কেমন আছো :))))", threadID);
   };

   if ((event.body.toLowerCase() == "error-king") || (event.body.toLowerCase() == "ERROR-KING")) {
     return api.sendMessage("️ ~Yeah It's My Boss....ERROR-KING-RANA..🥰 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "Bot rana ke") || (event.body.toLowerCase() == "Who is rana")) {
     return api.sendMessage("️My Creator.  তার সাথে প্রেম করবা নি 😬  https://facebook.com/RANA.IS.BUSY.OKAY :))))", threadID);
   };

   if ((event.body.toLowerCase() == "saku") || (event.body.toLowerCase() == "সাকু")) {
     return api.sendMessage(" না না না তাকে সাকু বলিও না , সে হচ্ছে আমাদের সাকু বাবাজি...!!🤣🐸 call him saku babaji ..🤣🐸", threadID);
   };

   if ((event.body.toLowerCase() == "tt go mn") || (event.body.toLowerCase() == "tt go mn")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "flop over") || (event.body.toLowerCase() == "flop over")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "cc") || (event.body.toLowerCase() == "ccc")) {
     return api.sendMessage("️কিরে ছিছি করিস কেন 😡\nতরা যেবাবে আমাকে ব্যবহার করবি আমিতো সেভাবেই  সার্ভিস  দিবো😈", threadID);
   };
  
  if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
     return api.sendMessage("️কিরে ছিছি করিস কেন 😡\n তরা যেবাবে আমাকে ব্যবহার করবি আমিতো সেভাবেই  সার্ভিস  দিবো😈", threadID);
   };

   if ((event.body.toLowerCase() == "আসসালামুয়ালাইকুম") || (event.body.toLowerCase() == "আসসালামুয়ালাইকুম")) {
     return api.sendMessage("️ - ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };
  
   if ((event.body.toLowerCase() == "assalamualaikum") || (event.body.toLowerCase() == "assalamualaikum")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "assalamu alaikum") || (event.body.toLowerCase() == "assalamu alaikum")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "আস-সালামু আলাইকুম") || (event.body.toLowerCase() == "আসসালামু আলাইকুম")) {
     return api.sendMessage("- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };
  
   if ((event.body.toLowerCase() == "সালাম") || (event.body.toLowerCase() == "salam")) {
     return api.sendMessage("কিরে সালাম দিতে কষ্ট হয়😡\nকষ্ট হলে দিস না🙂\n তাউ পাপ কামাই করিস না🙂", threadID);
   };
  
   if ((event.body.toLowerCase() == "Kemn aso") || (event.body.toLowerCase() == "কেমন আছো")) {
     return api.sendMessage("Hmm..আলহামদুলিল্লাহ অনেক ভালো আছি তুমি কেমন আছো 🥰😻", threadID);
   };
  
   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
     return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
   };

   if ((event.body.toLowerCase() == "খাওয়া দাওয়া করছো") || (event.body.toLowerCase() == "khaiso")) {
     return api.sendMessage("~একজন রোবট আমি খাওয়া-দাওয়া করতে পারি না ", threadID);
   };

   if ((event.body.toLowerCase() == "valobasa") || (event.body.toLowerCase() == "ভালোবাসা")) {
     return api.sendMessage("~এই শহরে কেউ কারোর নয়.!💔কিছুটা মায়া আর বাকিটা অভিনয়.!😔🌸", threadID);
   };

   if ((event.body.toLowerCase() == "bal") || (event.body.toLowerCase() == "Bal") || (event.body.toLowerCase() == "বাল")) {
     return api.sendMessage("~এখনো বাল উঠে নাই নাকি?❌", threadID);
   };

   if ((event.body.toLowerCase() == "I Love you") || (event.body.toLowerCase() == "I love you")) {
     return api.sendMessage("Hmm... বস RANA ও তোমাকে ভালোবাসে😇😻", threadID);
   };

  if ((event.body.toLowerCase() == "ummah") || (event.body.toLowerCase() == "উম্মাহ😽")) {
     return api.sendMessage("লুচ্চা চুম্মা চুম্মি করোস কেন🥵", threadID);
   };

  if ((event.body.toLowerCase() == "bot koire") || (event.body.toLowerCase() == "bot koi")) {
     return api.sendMessage("এই তো আমি এখানে🙋‍♂️", threadID);
   };

  if ((event.body.toLowerCase() == "kiss bot") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("আমি ভালো তুমি পঁচা😌", threadID);
   };

  if ((event.body.toLowerCase() == "suraia") || (event.body.toLowerCase() == "সাদিয়া")) {
     return api.sendMessage("Hmm... ওইদিকে কেউ নজর দিবি না। ওইটা আমার শালী লাগে 😇😻", threadID);
   };

   if ((event.body.toLowerCase() == "Jumma mubarak") || (event.body.toLowerCase() == "Jumma")) {
     return api.sendMessage("ꖴؖؖؖؖؖؖؖؖؖꔰ⃟❤️জুম্মা🦋ꕬ⃢ꖴؖؖؖؖؖؖؖؖؖꔰ⃟ꖴؖؖؖؖؖؖؖؖؖমোবারকꔰ⃟ꔹꕬ⃢💖ꖴؖؖؖؖؖؖؖؖ", threadID);
   };
  
  if (event.body.indexOf("বট") == 0 || (event.body.indexOf("রোবট") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { } 
