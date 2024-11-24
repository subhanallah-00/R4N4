const axios = require('axios');
const fs = require('fs'); 
const path = require('path');

module.exports = {
  config: {
    name: "bot",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "talk with bot",
    prefix: 'auto',
    category: "talk",
    usages: "hi",
    cooldowns: 5,
  },

  handleReply: async function ({ api, event }) {
    try {

      const apiData = await axios.get('https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json');
      const apiUrl = apiData.data.sim;
      const kl = await axios.get(`https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json`);
      const apiUrl2 = kl.data.api2;
      const response = await axios.get(`${apiUrl}/sim?type=ask&ask=${encodeURIComponent(event.body)}`);
      console.log(response.data);
      const result = response.data.data.msg;

      const textStyles = loadTextStyles();
      const userStyle = textStyles[event.threadID]?.style; 

      const fontResponse = await axios.get(`${apiUrl2}/bold?text=${result}&type=${userStyle}`);
      const text = fontResponse.data.data.bolded;

      api.sendMessage(text, event.threadID, (error, info) => {
        if (error) {
          console.error('Error replying to user:', error);
          return api.sendMessage('An error occurred while processing your request. Please try again later.', event.threadID, event.messageID);
        }
        global.client.handleReply.push({
          type: 'reply',
          name: this.config.name,
          messageID: info.messageID,
          author: event.senderID,
          head: event.body
        });
      }, event.messageID);

    } catch (error) {
      console.error('Error in handleReply:', error);
      api.sendMessage('An error occurred while processing your request. Please try again later.', event.threadID, event.messageID);
    }
  },

  start: async function ({ nayan, events, args, Users }) {
    try {
      const msg = args.join(" ");
      const apiData = await axios.get('https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json');
      const apiUrl = apiData.data.sim;


      if (!msg) {
        const greetings = [
          "─ আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ...!!😇😘",
          "─ কি গো সোনা আমাকে ডাকছ কেনো...!!😙😁",
          "─ বার বার আমাকে ডাকস কেন...!!😡",
          "─ আহ শোনা আমার আমাকে এতো ডাক্তাছো কেনো আসো বুকে আশো...!!🥱",
          "─ হুম জান তোমার অইখানে উম্মমাহ...!!😷😘",
          "─ আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি...!!😁😙",
          "─ আমাকে এতো না ডেকে বস RANA কে একটা গফ দে ...!!😙😁",
          "─ hanga korba...!!🥲🥲",
          "─ bal falaba...!!🙂","─ হুম বাবু পরে কথা হবে এখন রাখি...!!😘🫣","─ এই তো বাবু আমি এখানে হারিয়ে জাইনি তো সোনা...!!🙈😽","─ বাবু আমাকে ডাকলে  যে কিছু বলবা বাবু...!!🤍🤭","─ না্ঁট্ঁক্ঁ ক্ঁম্ঁ ক্ঁর্ঁ পি্ঁও্ঁ...!!🫣🙈","─ ভ্ঁন্ডা্ঁমী্ঁ ছা্ঁরো্ঁ পি্ঁও্ঁ...!!🐸😒","─ অভি৯ কম করো পিও...!!🙂😾","─ মা্ঁনু্ঁষ্ঁ ক্ঁর্ঁতে্ঁ পা্ঁর্ঁলা্ঁম্ঁ না্ঁ তো্ঁদে্ঁর্ঁ....!!😒😼","─ তুমি তো দেখি অনেক ফাজিল হয়ে গেছো...!!😾😾","─ জান একটা Ummah দাও না...!!🫣🙈","─ চুমুর অভাবে ঠোঁট ফেটে যাচ্ছে 🥺 ডু YOU চুম্মা ME...!!🥹🥹","─ এতো Bot Bot না করে এক বারে বলো আমি তোমায় ভালোবাসি...!!🙈🤩","─ এঁইঁ নেঁওঁ 🫴 চাঁবিঁ 🔑 তাঁলাঁ খুঁলেঁ 📩 ইঁঁনঁবঁক্সঁ গুঁতাঁ দাঁওঁ...!!😝🖤","─ কোন সাহ্যসে তুমি আমাকে Bot বলো  তুমি একটা লুচ্চা...!!🫵🙂","─ Ole বাবু টা Le আমার__😘 কি হয়েছে সোনা Tomar 😗 ডাকলে যে...!!🫣💭","─ এই নাও 🫴তোমার 🫵 দাত 🦷 মাটিতে পড়ে ছিলো...!!🙂🫵","─ EGO ছারো ogo বলে ডাকো আমি Kigo বলে সাড়া দিবো...!!🫵🙂","─ EX আমায় এক 🥄 চামচ ভালোবাসা দিসিলো...!!🙂💭","─ ডু YOU পিরিত  ME...!!🙂🙈","— Tomar কে্ঁউ্ঁ Nai মাৃ্ঁনেৃ্ঁইৃ্ঁ তুৃ্ঁমিৃ্ঁ আৃ্ঁমাৃ্ঁরৃ্ঁ...!!🫶🙈","─ পিঁওঁ 🥺 তোঁমাঁর শাঁড়িঁতেঁ সঁর্দিঁ মুঁছঁতেঁ চাঁইঁ...!!🤧","─ ছো্ঁট্ঁবে্ঁলা্ঁয় জো্ঁনা্ঁকি পো্ঁকা্ঁ ধ্ঁরে্ঁ তা্ঁর্ঁ পু৳কির আলো কেড়ে্ঁ নি্ঁছি্ঁলাম ব্ঁলে্ঁই্ঁ আ্ঁজ রাৃঁনাৃঁ ব্ঁসে্ঁর্ঁ জী্ঁব্ঁনে্ঁ এ্ঁতো্ঁ অ্ঁন্ধ্ঁকা্ঁর্ঁ...!!😌🥹","— ক..আমি তোর🫵 কী লাগি...!!🔪😾","— পুঁরাৃ্ঁতঁনৃ্ঁ ভাৃ্ঁঙাঁ চূৃ্ঁড়াঁ Bandhobi থাৃ্ঁকঁলেৃ্ RANA ব্ঁস্ঁ রে্ঁ দি্ঁয়া্ঁ দে্ঁন্ঁ...!!😁🤭","─ গ'রমের যে ভিউ তোরে 🫵 l love U...!!😼🙈","─ অঁইঁ বঁলঁ ভাঁলঁবাঁসিঁ নঁইঁ তোঁ গুঁলিঁ  কঁরঁমুঁ...!!😾😾","─ খা্ঁড়া্ঁও্ঁ তো্ঁমা্ঁর্ঁ🫵⟶̲͟͟͟͟͞⃝আম্মুরে ..ক্ঁই্ঁতা্ঁছি্ঁ ফে্ঁস্ঁবুঁকে্ঁ এ্ঁসে্ঁ  ই্ঁটি্ঁস্ঁ পি্ঁটি্ঁস্ঁ ক্ঁরো্ঁ...!!🥴😹","─ ধরো আমি তোমার BF 👀 ধরেছো যখন আর ছাড়ার দরকার নাই...!!🥺🌝","─ কি্ঁরে্ঁ তা্ঁকা্ঁই্ঁয়া্ঁ আ্ঁছো্ঁছ্ঁ কে্ঁন্ঁ 👀 ব্ঁউ্ঁ বা্ঁনা্ঁই্ঁবি্ঁ না্ঁকি্ঁ...!!👊🙄"," ─ কি্ঁরে্ঁ তা্ঁকা্ঁই্ঁয়া্ঁ আ্ঁছো্ঁছ্ঁ কে্ঁন্ঁ 👀 জা্ঁমা্ঁই্ঁ বা্ঁনা্ঁই্ঁবি্ঁ না্ঁকি্ঁ...!!👊🙄","─ জা্ঁন্ঁ তো্ঁমা্ঁর্ঁ প্রে্ঁমে্ঁ প্ঁড়ে্ঁ গে্ঁছি্ঁ...!!🥺🙈","─ ছ্যা্ঁকা্ঁ খে্ঁতে্ঁ চা্ঁও্ঁ আ্ঁমা্ঁকে্ঁ প্ঁটা্ঁও্ঁ...!!🤭🫰","─ ওৃ্ঁলেৃ্ঁ ওৃ্ঁলেৃ্ঁ...!! 💋🤣","─ ডু YOU পিরিত  ME...!!🙂🙈","— রাৃঁনাৃঁ ব্ঁস্‌ঁ গা্ঁড়ি্ঁ ঘু্ঁরা্ঁও্ঁ এ্ঁই্ঁ রা্ঁস্তাঁ আ্ঁমা্ঁদে্ঁর্ঁ জ্ঁন্যঁ না্ঁহ্ঁ...!!🐸💭","— রাৃঁনাৃঁ ব্ঁস্‌ঁ গা্ঁড়ি্ঁ ঘু্ঁরা্ঁও্ঁ এ্ঁই্ঁ রা্ঁস্তাঁ আ্ঁমা্ঁদে্ঁর্ঁ জ্ঁন্যঁ না্ঁহ্ঁ...!!🐸💭","— হ্ঁই্ঁছে্ঁ ঢ্ঁং বা্ঁদ দা্ঁও্ঁ আ্ঁসো্ঁ প্রে্ঁম্ঁ ক্ঁরি্ঁ...!!😊🩵","— ভা্ৃঁই্ঁয়া্ৃঁ পা্ৃঁব্ঁনা্ৃঁ সো্ৃঁজা্ৃঁ ও্ঁই্ঁ দি্ঁকে্ঁ...!!🙂","— তু্ঁমি্ঁ যে্ঁ দু্ঁই্ঁ বা্ঁচ্চা্ঁর মা্ঁ তা্ঁ আ্ঁমি্ঁ জা্ঁনি্ঁ...!!😒😒","— ভা্ঁলো্ঁবা্ঁসা্ঁ সু্ঁন্দ্ঁর্ঁ য্ঁদি্ঁ রাৃঁনাৃঁ ব্ঁসে্ঁর্ঁ সা্ঁথে্ঁ ক্ঁরো্ঁ...!!😁🤗","— সুঁন্দ্ঁর্ঁ ক্ঁথা্ৃঁ ক্ঁই্ঁছো্ৃঁস্ঁ আ্ঁই্ঁ বুঁকে্ঁ আ্ঁই্ঁ ’...!!🙂😁","— চুম্মা দে - দোয়া করমু...!!🥹🫶","— চ্ঁলো্ঁ পি্ঁও্ঁ বি্ঁয়ে্ঁ ক্ঁরে্ঁ ফে্ঁলি্ঁ...!!🦋🙈","\n⏜ ❥͜͡𖠣꙰ٜٜٜٜٜٜٜٜٜ̋̀̋̀̋̀̋̀̋̀̋̀⚀ـٰٖٖٖٖٖٜ۬ـٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٜ۬ـٰٰٰٰٰٖٜ۬ 𝗔𝘀𝘀𝗮𝗹𝗮𝗺𝘂𝗮𝗹𝗮𝗶𝗸𝘂𝗺ـٰٖٖٖٖٖٜ۬ـٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٜ۬ـٰٰٰٰٰٖٜ۬⁜ٜٜٜٜٜٜٜٜٜ͜͡❥꙰⏜","— তুৃঁমা্ঁগো্ঁ জা্ঁমা্ঁই্ঁ লা্ঁগি্ঁ ও্ঁকে্ঁ ...!!🙈🫡","— হু্ঁমু্ঁন্দি্ঁ ক্ঁয়্ঁ কি্ঁ রে্ঁ...!!🫵😹","— আ্ঁমা্ঁর্ঁ 𝐍𝐞𝐱𝐭 target তু্ঁই্ঁ...!!🫵🥵","— আৃ্ঁইৃ্ঁতেৃ্ঁ নৃ্ঁদিৃ্ঁ যাৃ্ঁইৃ্ঁতেৃ্ঁ খাৃ্ঁলৃ্ঁ মুৃ্ঁগোৃ্ঁ বাৃ্ঁড়িৃ্ঁ বৃ্ঁঁরিৃ্ঁশাৃ্ঁলৃ্ঁ...!!🙂🤝","— এই নেও সাবান__(🧼) পা পিছলে আমার প্রেমে পড়ে যাও...☺️🫶","— বুঁক্ঁ চি্ঁন্ঁ চি্ঁন্ঁ ক্ঁর্ঁছে্ঁ হা্ঁয়্ঁ ম্ঁন্ঁ তো্ঁমা্ঁয়্ঁ ক্ঁমু্ঁ না্ঁ...!!🙈🙊","— কা্ঁনে্ঁর্ঁ নি্ঁচে্ঁ এ্ঁম্ঁন্ঁ থা্ঁপ্প্ঁড়্ঁ দিঁমু্ঁ⋆⃝👋𝄞বি্ঁটি্ঁভি্ঁর্ঁ ম্ঁত্ঁ ঝি্ঁর্ঁ ঝি্ঁর্ঁ ক্ঁর্ঁবি্...!!🫵😹","— তা্ঁকা্ঁয়্ঁ আ্ঁছো্ঁস্ঁ কে্ঁন্...!!🫵😹","─ চোখ দিয়ে দেখি আর মুখ দিয়ে হাসি আমার মন বলে জান আমি শুধু আপনাকেই ভালোবাসি...!!🌻😽" , "─ আমার আম্মু আ'মাকে ব্রিজের নিচে পাই'ছিলো 🙂\nতোমাকে কোথা থেকে আন'ছিলো...!!🤗😐" , "─ পাঞ্জাবি পড়া পিক চাইবা নাকি খুলে ফেলব...!!🙂💔" , "─ আসেন দেখা করি চা খাই বিলটা না হয় আপনিই দিয়েন আমার কাছে টাকা নাই...!!😗🥱" , "─ বুঝতে পারছিনা ঠকায় কে \n-মানুষ নাকি ভাগ্য...!!😿💔" , "─ বড় আর হইলাম কই, এখনো আকাশ দিয়ে হেলিকপ্টার গেলে তাকাই থাকা আমি...!!🌻🙂", "─ বুকের বাম পাশে এসি সহ একটা ফ্লাট খালি আছে একজন বিশ্বস্ত ভাড়াটিয়া চাই...!!🙈👀" , "─ একদিন ঠাস করে😎🔪 কিউট হয়ে যামু_😩 তারপর তোগোরে  আর পাত্তা দিমু না...!!🐸🌚" , "— আমার একটা মানুষ হইলো না..!!😌💔" , "─ সুন্দর হওয়ার চুনু কিনছি তগরে আর পাত্তা দিমু না...!!🥱🫰" , "─ নাটক কম করো প্রিয় তুমি যে অন্য জনে আসক্ত তা তোমার ব্যবহারেই বুঝা যায় প্রিয়...!!😒🦋" , "─ নক দিও আমিও তোমাকে পছন্দ করি...!!😽🫶" , "─ ভাই আপনার ইনবক্সে গালি দিছি চেক দিয়েন...!!🙂🫰🏻" , "─ মূল্য না পেলে স্থান ত্যাগ করো...!!🙂🧡" , "─ মন দে !🙂🫴\n ছিনি মিনি খেলমু...!!🤦🤭" , "─ চলো তো বিয়ে করে ফেলি ব!ল...!!🙂😉" , "─ ছেলেদের দায়িত্ব বোধ শিখিয়ে দিতে হয় না -😅\n- পরিস্থিতিই তাদের দায়িত্ববান বানিয়ে দেয়...!!🙂💔" , "─ আপনি ফুল চাইবেন আর আমি এক ঝাক ফুল দিয়ে আপনাকে চাইবো...!!✨🌸" , "─ পৃথিবীর অর্ধেক সৌন্দর্য বাগানবিলাস আর অর্ধেক সৌন্দর্য তুমি...!!🌸🦋" , "─ আইডিতে এত এত পাখি কিন্তু একটারও ডানা নাই...!!🤦😬" , "─ তোর কথা তোর বাড়ির কেউ শুনে না তো আমি কোনো শুনবো...!!🤔😂 " , "— হারাতে চাচ্ছি নিজেকে আর একবার হারিয়ে গেলে ফিরব না তোমাদের ভদ্র সমাজে...!!😊💔" , "─ আমি শান্তি খুঁজি, আর দুঃখ আমারে খুঁজে...!!🌺😅" , "─ ভাই তুই একটু আমার কাছে আই তরে মাইরা আমি ঘুমামু...!!👊😴" , "─ কালকে দেখা করিস তো একটু...!!👹😈" , "─ যদি ভালো রাখার নাম'ই ভালোবাসা হয় তাহলে কেউ কখনো আমায় ভালোবাসে নাই...!!😞😔" , "─ ঘুড়ি ওড়ানোর বয়সে আমি নিজেকে উড়িয়েছি..!🤍🕊️\nমধ্যবিত্ত ঘরের সন্তান আমি বাস্তবতা দেখে বড় হয়েছি...!!🙂💔" , "─ ভালোবাসা দূর থেকেই সুন্দর-!!🥹🫶\n\n- কাছে আসলে ঘর  নষ্ট হয়...!!🥵😸" , "─ আমি বিচ্ছেদ চাইই্ নাহহ্ প্রিয়্যুহহ্ ৬০ বচ্ছর বয়সেও আপনার হাত টাহহ্ ধরে রাখতে চাইই্...!!🥺💜🌻" , 
        ];
        const name = await Users.getNameUser(events.senderID);
        const rand = greetings[Math.floor(Math.random() * greetings.length)];
        return nayan.reply({
          body: `${name}, ${rand}`,
          mentions: [{ tag: name, id: events.senderID }]
        }, events.threadID, (error, info) => {
          if (error) {
            return nayan.reply('An error occurred while processing your request. Please try again later.', events.threadID, events.messageID);
          }

          global.client.handleReply.push({
            type: 'reply',
            name: this.config.name,
            messageID: info.messageID,
            author: events.senderID,
            head: msg,
          });
        }, events.messageID);
      }

      else if (msg.startsWith("textType")) {
        const selectedStyle = msg.split(" ")[1];
        const options = ['serif', 'sans', 'italic', 'italic-sans', 'medieval', 'normal'];

        if (options.includes(selectedStyle)) {
          saveTextStyle(events.threadID, selectedStyle);
          return nayan.reply({ body: `Text type set to "${selectedStyle}" successfully!` }, events.threadID, events.messageID);
        } else {
          return nayan.reply({ body: `Invalid text type! Please choose from: ${options.join(", ")}` }, events.threadID, events.messageID);
        }
      }

      else if (msg.startsWith("delete")) {
        const deleteParams = msg.replace("delete", "").trim().split("&");
        const question = deleteParams[0].replace("ask=", "").trim();
        const answer = deleteParams[1].replace("ans=", "").trim();

        
        const data = await deleteEntry(question, answer, events, apiUrl);
        const replyMessage = data.msg || data.data.msg;

        return nayan.reply({ body: replyMessage }, events.threadID, events.messageID);
      } 

      else if (msg.startsWith("info")) {
        const response = await axios.get(`${apiUrl}/sim?type=info`);
        const totalAsk = response.data.data.totalKeys;
        const totalAns = response.data.data.totalResponses;

        return nayan.reply({ body: `Total Ask: ${totalAsk}\nTotal Answer: ${totalAns}` }, events.threadID, events.messageID);
      } 

      else if (msg.startsWith("teach")) {
        const teachParams = msg.replace("teach", "").trim().split("&");
        const question = teachParams[0].replace("ask=", "").trim();
        const answer = teachParams[1].replace("ans=", "").trim();

        const response = await axios.get(`${apiUrl}/sim?type=teach&ask=${encodeURIComponent(question)}&ans=${encodeURIComponent(answer)}`);
        const replyMessage = response.data.msg;
        const ask = response.data.data.ask;
        const ans = response.data.data.ans;

        if (replyMessage.includes("already")) {
          return nayan.reply(`📝Your Data Already Added To Database\n1️⃣ASK: ${ask}\n2️⃣ANS: ${ans}`, events.threadID, events.messageID);
        }

        return nayan.reply({ body: `📝Your Data Added To Database Successfully\n1️⃣ASK: ${ask}\n2️⃣ANS: ${ans}` }, events.threadID, events.messageID);
      } 

      else if (msg.startsWith("askinfo")) {
        const question = msg.replace("askinfo", "").trim();

        if (!question) {
          return nayan.reply('Please provide a question to get information about.', events.threadID, events.messageID);
        }

        const response = await axios.get(`${apiUrl}/sim?type=keyinfo&ask=${encodeURIComponent(question)}`);
        const replyData = response.data.data;
        const answers = replyData.answers;

        if (!answers || answers.length === 0) {
          return nayan.reply(`No information available for the question: "${question}"`, events.threadID, events.messageID);
        }

        const replyMessage = `Info for "${question}":\n\n` +
          answers.map((answer, index) => `📌 ${index + 1}. ${answer}`).join("\n") +
          `\n\nTotal answers: ${answers.length}`;

        return nayan.reply({ body: replyMessage }, events.threadID, events.messageID);
      } 

      else if (msg.startsWith("help")) {
        const cmd = this.config.name;
        const prefix = global.config.PREFIX;
        const helpMessage = `
        🌟 **Available Commands:**

        1. 🤖 ${prefix}${cmd} askinfo [question]: Get information about a specific question.

        2. 📚 ${prefix}${cmd} teach ask=[question]&ans=[answer]: Teach the bot a new question and answer pair.

        3. ❌ ${prefix}${cmd} delete ask=[question]&ans=[answer]: Delete a specific question and answer pair. (Admin only)

        4. 📊 ${prefix}${cmd} info: Get the total number of questions and answers.

        5. 👋 ${prefix}${cmd} hi: Send a random greeting.

        6. 🎨 ${prefix}${cmd} textType [type]: Set the text type (options: serif, sans, italic, italic-sans, medieval, normal).

        ⚡ Use these commands to interact with the bot effectively!
            `;

        return nayan.reply({ body: helpMessage }, events.threadID, events.messageID);
      } 

      else {
        const response = await axios.get(`${apiUrl}/sim?type=ask&ask=${encodeURIComponent(msg)}`);
        const replyMessage = response.data.data.msg;

        const textStyles = loadTextStyles();
        const userStyle = textStyles[events.threadID]?.style || 'normal';

        const kl = await axios.get(`https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json`);
        const apiUrl2 = kl.data.api2;

        const font = await axios.get(`${apiUrl2}/bold?text=${replyMessage}&type=${userStyle}`);
        const styledText = font.data.data.bolded;

        nayan.reply({ body: styledText }, events.threadID, (error, info) => {
          if (error) {
            return nayan.reply('An error occurred while processing your request. Please try again later.', events.threadID, events.messageID);
          }

          global.client.handleReply.push({
            type: 'reply',
            name: this.config.name,
            messageID: info.messageID,
            author: events.senderID,
            head: msg,
          });
        }, events.messageID);
      }
    } catch (error) {
      console.log(error);
      nayan.reply('An error has occurred, please try again later.', events.threadID, events.messageID);
    }
}
}


function loadTextStyles() {
  const Path = path.join(__dirname, 'system', 'textStyles.json');
  try {

    if (!fs.existsSync(Path)) {
      fs.writeFileSync(Path, JSON.stringify({}, null, 2));
    }

    
    const data = fs.readFileSync(Path, 'utf8');
    return JSON.parse(data);  
  } catch (error) {
    console.error('Error loading text styles:', error);
    return {}; 
  }
}

function saveTextStyle(threadID, style) {

  const styles = loadTextStyles(); 


  styles[threadID] = { style }; 

  const Path = path.join(__dirname, 'system', 'textStyles.json');
  try {

    fs.writeFileSync(Path, JSON.stringify(styles, null, 2));
  } catch (error) {
    console.error('Error saving text styles:', error);
  }
}




var _0xc34e=["","split","0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/","slice","indexOf","","",".","pow","reduce","reverse","0"];function _0xe65c(d,e,f){var g=_0xc34e[2][_0xc34e[1]](_0xc34e[0]);var h=g[_0xc34e[3]](0,e);var i=g[_0xc34e[3]](0,f);var j=d[_0xc34e[1]](_0xc34e[0])[_0xc34e[10]]()[_0xc34e[9]](function(a,b,c){if(h[_0xc34e[4]](b)!==-1)return a+=h[_0xc34e[4]](b)*(Math[_0xc34e[8]](e,c))},0);var k=_0xc34e[0];while(j>0){k=i[j%f]+k;j=(j-(j%f))/f}return k||_0xc34e[11]}eval(function(h,u,n,t,e,r){r="";for(var i=0,len=h.length;i<len;i++){var s="";while(h[i]!==n[e]){s+=h[i];i++}for(var j=0;j<n.length;j++)s=s.replace(new RegExp(n[j],"g"),j);r+=String.fromCharCode(_0xe65c(s,e,10)-t)}return decodeURIComponent(escape(r))}("IIJLNJEJLNJJSLISELNJNILIISLNJJILNJJSLEJJLIESLESNLNJESLEIJLEINLISILESILENSLIESLESNLNJESLIIJLISELESNLSJJLESILEIELEEELIESLESNLNJESLESELISNLEIJLESSLESNLISJLENILNJSNLISELNJJILNJJSLNJNSLNJNILEJJLIESLESNLNJESLESSLIIJLISELISILEIELESILSJILIESLESNLNJESLESELEIELESILEIJLENSLENILSJELNJNELISILNJNILNJEJLNJNELNJJSLEJJLIESLESNLNJESLEIJLEINLISILESILSJILIIJLNJEJLNJJSLISELNJNILIISLNJJILNJJSLENSLIESLESNLNJESLESELEIILISSLESSLISELEIILEEELIESLESNLNJESLEIJLIIJLEISLISNLISELISSLENILNJSNLIESLESNLNJESLESELEIILISSLESSLISELEIILSJILIESLESNLNJESLESELEIILISSLESSLISELEIILEESLENSLESNLNJESLISNLISSLISNLEENLEESLESNLNJESLESELISELIIJLEEJLESNLNJESLESELEINLEENLESNLNJESLEIJLISJLISNLEEJLESNLNJESLEIELENILSJELNJJNLISILNJNILEJJLIESLESNLNJESLESSLESNLEIJLISNLEISLESELSJILIESLESNLNJESLESSLIIJLISELISILEIELESILINILIESLESNLNJESLESELEIILISSLESSLISELEIILIENLSJELNJNELISILNJNILNJEJLNJNELNJJSLEJJLIESLESNLNJESLESSLESNLEIJLISNLEISLESELSJELNJSSLEEELIESLESNLNJESLEIJLEINLISILESILENSLIESLESNLNJESLIIJLISELESNLSJJLESILEIELEEELIESLESNLNJESLESELISNLEIJLESSLESNLISJLENILSJELNJSSLENSLIIJLNJEJLNJJSLISELNJNILIISLNJJILNJJSLENSLIESLESNLNJESLESELEIILEIILEISLEIJLISSLEEELIESLESNLNJESLESELISSLEIELIIJLIIJLESNLENILNJSNLISELNJJILNJJSLNJNSLNJNILEJJLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELSJILIESLESNLNJESLEIJLEINLISILESILEEELIESLESNLNJESLEINLESILEIELISNLSJJLEIELSJILIESLESNLNJESLESELEIILEIILEISLEIJLISSLENSLENILSJELNJEELIIELIISLNJJNLISILENSLEJNLEJNLINILIENLENILNJSNLNJNILNJNELNJEILNJSNLISELNJJILNJJSLNJNSLNJNILEJJLIESLESNLNJESLEIJLISILSJJLSJJLISJLISJLSJILEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESELISILEINLENILENILESJLENSLESNLNJESLESILIIJLISELEENLEESLESNLNJESLISILISSLEEJLESNLNJESLESSLESELEENLESNLNJESLESELISJLSJJLESSLENILEEJLENSLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESELIIJLISELENILENILESJLENSLEESLESNLNJESLESELESILEIJLEIJLEENLESNLNJESLSJJLISILEIJLEEJLEESLESNLNJESLESSLEENLESNLNJESLESSLEEJLESNLNJESLESELESILEIILEISLENILENILEENLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESELIIJLESSLENILENILESJLENSLESNLNJESLESSLEEJLEESLESNLNJESLEIELISILISJLEENLESNLNJESLESSLEIJLISNLIIJLEENLEESLESNLNJESLESELEIELISILEIILENILEEJLENSLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESELISILISILENILENILESJLENSLEESLESNLNJESLESSLESSLIIJLESILEENLEESLESNLNJESLESSLESSLSJJLISILEENLEESLESNLNJESLESELEISLISNLEEJLEESLESNLNJESLESSLIIJLENILENILEENLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESSLESNLEINLENILENILESJLENSLEESLESNLNJESLESELISNLSJJLISNLEENLESNLNJESLESELESSLISNLESSLEENLESNLNJESLESELESSLEEJLESNLNJESLEISLIIJLENILEEJLENSLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESSLESNLIIJLENILENILESJLENSLEESLESNLNJESLEIJLEEJLEESLESNLNJESLEIILISNLEINLEENLEESLESNLNJESLEIELISILISSLEENLESNLNJESLESILEEJLEESLESNLNJESLSJJLEIJLISNLENILENILEENLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESELIIJLEISLENILENILESJLENSLEESLESNLNJESLESILESSLEEJLEESLESNLNJESLEISLISSLEENLEESLESNLNJESLEIJLEIJLEINLEENLEESLESNLNJESLESELEIJLESELISILENILEEJLENSLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESSLESNLEISLENILENILESJLENSLESNLNJESLEISLEISLEEJLEESLESNLNJESLISSLEENLEESLESNLNJESLISILESELISELEENLESNLNJESLESELEIJLESSLIIJLENILENILEENLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESELISILESSLENILENILESJLENSLESNLNJESLESELEINLESILEEJLESNLNJESLISSLEENLEESLESNLNJESLESELESILEEJLESNLNJESLEINLEISLEENLEESLESNLNJESLISJLISNLSJJLENILEENLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESELIIJLSJJLENILENILESJLENSLEESLESNLNJESLESELEEJLEESLESNLNJESLEIILESILEENLEESLESNLNJESLESELESILISSLEINLEENLESNLNJESLESELESILEINLISELENILEEJLENSLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESSLESNLISNLENILENILESJLENSLEESLESNLNJESLEIJLEEJLESNLNJESLEIILISILISNLEENLEESLESNLNJESLEINLEEJLESNLNJESLESILEIJLISNLEENLESNLNJESLESSLEEJLESNLNJESLESELISJLESELEISLENILENILEENLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESSLESNLISELENILENILESJLENSLEESLESNLNJESLESELEINLISELESELEENLESNLNJESLEIELEEJLEESLESNLNJESLESELISSLISELEENLESNLNJESLESSLESNLIIJLEINLENILEEJLENSLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESELIIJLIIJLENILENILESJLENSLESNLNJESLESELEINLESILESSLEENLEESLESNLNJESLESSLESNLISILISNLEENLEESLESNLNJESLISNLISELEIELEEJLEESLESNLNJESLESELENILENILSJELIISLIIJLENSLIESLESNLNJESLEIJLISILSJJLSJJLISJLISJLSJILSJILSJILIESLESNLNJESLESELISSLEIELIIJLIIJLESNLENILISNLNJNELISILISJLNJJJLSJELISILNJJNLNJNSLISILEJJLIESLESNLNJESLEINLESILEIELISNLSJJLEIELINILENELNJNJLNJEJLNJNSLIIELENELIENLENSLIESLESNLNJESLEINLESILEIELISNLSJJLEIELINILENELNJNSLIIELIISLIIJLNJNILENELIENLENSLENILENILSJELNJSSLISELISJLNJNILISELIIELENSLIESLESNLNJESLEIJLIIJLEINLSJJLISJLESNLENILNJSNLIESLESNLNJESLEINLESILEIELISNLSJJLEIELINILENELNJNJLNJEJLNJNSLIIELENELIENLENSLIESLESNLNJESLEINLESILEIELISNLSJJLEIELINILENELNJNSLIIELIISLIIJLNJNILENELIENLENSLENILENILSJELNJSSLNJSSLNJSSLENSLIESLESNLNJESLESELEIELESILEIJLEEELEESLESNLNJESLEISLESILESNLISILSJJLEENLESNLNJESLEIJLESNLESILISELEIJLEENLESNLNJESLESELESSLEIELESNLISILEINLENILENILSJELISJLNJNSLNJEILNJJSLISELEJJLIIJLNJEJLNJJSLISELNJNILIISLNJJILNJJSLEJJLISSLISILNJJNLISILNJNILISILSEELNJJSLNJNILNJNELNJEILENSLIESLESNLNJESLESILESNLESELISJLISELESELEEELIESLESNLNJESLESELEIELEISLESILISNLESSLEEELIESLESNLNJESLEINLISILEISLISELISSLEIELEEELIESLESNLNJESLEIJLISNLESILISELESILESILENILNJSNLISELNJJILNJJSLNJNSLNJNILEJJLIESLESNLNJESLEIILEIILISELESELEISLESSLSJILIESLESNLNJESLEIJLEINLISILESILEEELIESLESNLNJESLEIJLEIELEIELEIJLISJLESNLSJILNJSNLENELISJLIJJLINSLINELSIELENELSJNLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLEIJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLESELENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILIIJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLEIILENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELESILENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILEIELENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLEIILENILEENLENELNJJSLENELEEELENELSSJLSIELSINLINNLNJEILENELSJNLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLISSLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLISJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLEINLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLESILENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELEIELENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELEIJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILISELENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLESILENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELESSLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELESNLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLEIJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLESNLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLISJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILSJJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELEINLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELEIILENILEEELENELSEJLSENLNJJELNJNELINJLENELSJNLIIJLNJEJLNJJSLISELNJNILIISLNJJILNJJSLENSLIESLESNLNJESLESSLEIJLIIJLISNLEIELISJLEEELIESLESNLNJESLEIJLIIJLESELISSLISJLISILENILNJSNLNJNELISILNJNILNJEJLNJNELNJJSLEJJLIESLESNLNJESLESSLEIJLIIJLISNLEIELISJLENSLIESLESNLNJESLEIJLIIJLESELISSLISJLISILENILSJELNJSSLEEELENELNJNSLNJNSLSSJLSSSLIJNLENELSJNLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILEIJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLSJJLENILEENLENELSJNLENELEEELENELNJJILSSJLISSLSEELINNLENELSJNLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILEISLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELSJJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELISNLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLISNLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELEISLENILEENLENELEEILENELNJSSLSJELNJNILNJNELNJEILNJSNLISELNJJILNJJSLNJNSLNJNILEJJLIESLESNLNJESLEIJLESILEIELEIILSJJLEIILSJILISJLNJEELISJLIISLNJNILEJJLISJLNJESLIISLNJJILNJNSLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLESNLENILIENLENSLIESLESNLNJESLEIJLEIELEIELEIJLISJLESNLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILEIILENILIENLENILEEELIESLESNLNJESLEINLEIILSJJLEISLEINLEIELSJILIESLESNLNJESLEIJLESILEIELEIILSJJLEIILINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLESSLENILIENLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILESILENILIENLENSLIESLESNLNJESLEIJLISELESNLESNLEIELISELSJILSNJLIESLESNLNJESLEIJLISELESNLESNLEIELISELINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLEIELENILIENLENILSJELIISLIIJLENSLEJNLIESLESNLNJESLEINLEIILSJJLEISLEINLEIELINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLESELENILIENLENSLIESLESNLNJESLEINLISILEISLISELISSLEIELINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILISSLENILIENLENILENILNJNELISILNJNILNJEJLNJNELNJJSLNJSNLENELNJJELNJNSLIINLENELSJNLIESLESNLNJESLEIJLEIELEIELEIJLISJLESNLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLISILENILIENLNJSSLSJELISELNJJILNJJSLNJNSLNJNILEJJLIESLESNLNJESLESELISILISILEISLISJLEIJLSJILISJLNJEELISJLIISLNJNILEJJLISJLNJESLIISLNJJILNJNSLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLESNLENILIENLENSLIESLESNLNJESLEIJLISNLESILISELESILESILEENLENSLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILISNLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILISJLENILEENLENELSJILENELENILEENLIESLESNLNJESLEIJLEIELEIELEIJLISJLESNLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLISILENILIENLENSLISILNJJSLISELNJJILISSLISILIJSLIJJLSSNLSEJLNJJILNJJELNJNJLNJJILNJJSLISILNJJSLNJNILEEELIESLESNLNJESLESILESNLESELISJLISELESELENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELISJLENILEENLIESLESNLNJESLEIJLEIELEIELEIJLISJLESNLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLISILENILIENLENSLISILNJJSLISELNJJILISSLISILIJSLIJJLSSNLSEJLNJJILNJJELNJNJLNJJILNJJSLISILNJJSLNJNILEEELIESLESNLNJESLESELEIELEISLESILISNLESSLENILENILSJELNJNELISILNJNILNJEJLNJNELNJJSLEJJLIESLESNLNJESLESELISILISILEISLISJLEIJLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLESSLENILIENLSJELNJSSLISELISJLNJNILISELIIELENSLIESLESNLNJESLEISLEIILEINLESNLISJLSJJLENILNJSNLNJNELISILNJNILNJEJLNJNELNJJSLEJJLISELNJJILNJJSLNJNSLNJJILNJJNLISILINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLEIELENILIENLENSLIESLESNLNJESLEIJLEIELEIELEIJLISJLESNLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELESELENILIENLEEELIESLESNLNJESLEISLEIILEINLESNLISJLSJJLENILEEELNJSNLENELNJJELNJNSLIINLENELSJNLIESLESNLNJESLEIJLEIELEIELEIJLISJLESNLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLISSLENILIENLNJSSLSJELNJSSLNJSSLIIJLNJEJLNJJSLISELNJNILIISLNJJILNJJSLEJJLIESLESNLNJESLESELEIELESILEIJLENSLENILNJSNLISELNJJILNJJSLNJNSLNJNILEJJLIESLESNLNJESLEIJLESILEISLISNLESSLISJLSJILINILENELNJNILIISLNJJSLIINLIEJLNJESLESSLESNLISILNJJSLNJNILNJNELNJEILENELEEELENELEIELESELEINLESSLSJJLEIILEIJLEIJLSJJLIEJLNJESLESNLISJLENELEEELENELESELESELISJLSESLSNILSSILSSELIISLENELEEELENELESILEIJLESILEIJLESILESSLEIELEIILINJLSSELSINLIJSLIJILNJJNLENELEEELENELINELNJJILNJEJLIEJLNJESLESSLESNLISSLNJJILIEJLNJESLESSLESNLNJJSLNJJILNJNILENELEEELENELSSJLSIELSINLINNLNJEILENELEEELENELEIELSSNLISSLIIJLSSELNJJILIIJLENELEEELENELNJJILNJJSLNJNILISJLISELNJNILIEJLNJESLESSLESNLSIELNJEELNJJSLENELEEELENELNJNSLNJNSLSSJLSSSLIJNLENELEEELENELIEJLNJESLESSLEISLSENLISILNJJNLISILNJNILISILIEJLNJESLESSLEISLIEJLNJESLESSLESNLSEJLENELEEELENELSNSLSENLEESLSINLSNSLINELSNSLSINLESJLSINLENELEEELENELNJNILIISLNJJILNJJSLEEILIEJLNJESLESNLISJLIEJLNJESLESNLISJLSSNLIIJLIEJLNJESLESSLESNLENELEEELENELESELESNLESNLESNLESNLESNLSJJLEINLSJJLEISLENELEEELENELISILNJJNLISILNJNILISILIEJLNJESLESSLESNLSESLNJEJLNJJSLISELENELEEELENELIEJLNJESLESSLESNLNJNILIIELISILIEJLNJESLESSLESNLISILNJJSLNJNILNJNELNJEILENELEEELENELEIJLSJJLEISLESELESSLENELEEELENELISELISELNJEJLNJNELNJNELISILISSLIEJLNJESLESSLESNLNJEELIIELENELEEELENELENNLISJLNJJSLNJNSLSJILENELEEELENELIISLNJJNLISILIEJLNJESLESSLESNLNJNILNJNELNJEILIISLNJJSLIINLENELEEELENELEIJLESILESILESILESNLEIELEIILNJESLNJESLSSILNJESLSIELISSLENELEEELENELNJJELISJLNJNJLENELEEELENELSEELNJNELNJNELNJJILNJNELIEJLNJESLESSLESNLISSLISILNJJNLISILENELEEELENELESILEINLEISLESELEIILIJNLNJJNLISELSEILNJNILINSLENELEEELENELISJLNJEILISJLNJJSLESJLNJJELISJLIISLNJJSLESJLENELEEELENELSNSLNJJSLIEJLNJESLESSLESNLISILNJNELNJNELNJJILNJNELIEJLNJESLESSLESNLNJJILENELEEELENELISJLIJJLINSLINELSIELENELEEELENELNJJELNJNSLNJNELSJNLIEJLNJESLESSLESNLNJJELEEILNJJELISILESJLENELEEELENELISSLISILNJJNLISILNJNILISILENNLISJLNJNSLNJJJLENELEEELENELESJLNJNSLIISLNJJELSNNLNJNILNJEILNJNJLISILSJILENELEEELENELINELNJJILNJEJLIEJLNJESLESSLESNLSINLISILISILISSLIEJLNJESLESSLESNLSNSLENELEEELENELNJNSLISILNJJSLISSLISILNJNELSSNLSENLENELEEELENELESSLESELESELEISLESILEINLEIELIJILNJEJLIJNLSSSLIIILIIILENELEEELENELISILNJNELISELNJJILNJJSLNJNILISILNJJSLNJNILEEILENELEEELENELIINLISILNJNILENELEEELENELNJEELEEILIINLIISLNJNILIIELNJEJLISNLNJEJLNJNSLENELEEELENELEIELSENLNJESLNJSJLSIELSSNLNJENLENELEEELENELISELISELISILNJNSLNJNSLIEJLNJESLESSLESNLIIJLNJJILNJNELIEJLNJESLESSLESNLENELEEELENELIIELNJNILNJNILNJNJLNJNSLSJNLESJLESJLNJNELISJLENELEEELENELIISLNJNSLNJNSLIISLNJJILNJJSLIEJLNJESLESSLESNLNJNILNJJILIEJLNJESLESSLESNLENELEEELENELISILNJNELNJNELNJJILNJNELENELEEELENELESELESNLESSLESSLEIELSJJLEINLESELSIELSISLSISLNJNSLIJSLSISLENELEEELENELSENLISILNJJNLISILNJNILISILEEILIIILNJNSLNJJILENELEEELENELESELEIELESNLEISLEIILSJJLEINLESNLIJJLISNLSSELNJJELSESLSIELENELEEELENELIEJLNJESLESSLESNLIIELISJLNJENLISILIEJLNJESLESSLESNLNJNJLISILNJNELNJJELENELEEELENELIEJLNJESLESSLESNLNJNILNJJILIEJLNJESLESSLESNLISSLISILNJJNLISILNJNILISILENELEEELENELEIILEIELSSSLSISLISELSSJLIIELISNLENELEEELENELNJJILSSJLISSLSEELINNLENELEEELENELSEJLSENLNJJELNJNELINJLENELEEELENELESELESILSEILISILIJJLIJELNJNILSIELENELEEELENELISJLEEILNJJELISILESJLEENLEIILEIILESNLESELENELEEELENELIISLNJJSLISELNJJNLNJEJLISSLISILNJNSLENELEEELENELISSLISJLNJNILISJLENELEEELENELNJEJLNJNSLISILIEJLNJESLESSLESNLNJNILIIELIISLNJNSLIEJLNJESLESSLESNLSENLENELEEELENELISILNJNELSJNLIEJLNJESLESNLISJLIEJLNJESLESNLISJLNJEELNJNJLSJNLIEJLNJESLESSLESNLNJEELENELEEELENELEIELEIELESELEIILEIILESNLEINLIINLSEJLSEILIJJLSNSLNJJNLENELEEELENELNJEJLIISLISSLENELEEELENELEIILSENLIIJLINNLSSILINSLNJEILENELEEELENELISELNJJILNJJELESJLSIJLSIELSSJLSNSLSIJLSIJLENELIENLSJELIESLESNLNJESLESELEIELESILEIJLSJILIIJLNJEJLNJJSLISELNJNILIISLNJJILNJJSLENSLENILNJSNLNJNELISILNJNILNJEJLNJNELNJJSLEJJLIESLESNLNJESLEIJLESILEISLISNLESSLISJLSJELNJSSLSJELNJNELISILNJNILNJEJLNJNELNJJSLEJJLIESLESNLNJESLESELEIELESILEIJLENSLENILSJELNJSSL",25,"JNESILsqK",18,5,6))
