 module.exports = {
  config: {
    name: "bing",
    version: "1.0.0",
    permission: 0,
    credits: "Nayan",
    description: "",
    prefix: 'awto',
    category: "auto prefix",
    usages: "bing prompt",
    cooldowns: 10,
},

   languages: {
   "vi": {},
       "en": {
           "missing": 'use : /bing cat'
       }
   },

start: async function({ nayan, events, args, lang}) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    const prompt = args.join(" ");
    const key = this.config.credits;
    const apis = await axios.get('https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json')
  const n = apis.data.bing
    if(!prompt) return nayan.reply(lang('missing'), events.threadID, events.messageID)

  const rndm = ['16tGUEDlFmIZLT_2Y5bGwqVOU-GmHL6t5bt12hcM3p6XRzSRfhtEwd7KfZwdGh_atKyYjD1zlaY53GtUIuLfw8YGorTHuBnw4vrdPS-BD_ppPb6-mWBQdA-zFQAmp2AJrppaDrv-r1ciYgWzbsNJ1NWZV_6xRB1fQ2Xk2OuRiwy5Y2ok-KUtUFSu2tF8g28jix8Qi5t-8VhTcgMbAEAi1VWasF5YgonvTOsvxkZlhf-U','1Qcg8YmMuzuHtp937xOJqfeLuMLkzmrG7inAWsvNx7C744x_Om-YxOSTdoYksvHDp8BgjprZCMxC3KOGaLrtUVwEh3xRKHdzk55scoNwktzp-zf7ciHbhNhB0gOfyWELm-dnXVnBJN4to90R-pU4jLCur44fBcZY9GQENALazD-VB0Uu735gAdI87lbJDq2xFFK3We1rVKJcUKT260dxD-w', '1-KTdKp-1s1WKzG3GxcMl8RTUirCqjlkMcPJxACLb3nBAtbfha6-sUF9TJmNIO9D6hKYC50IX4pzQx9W06xHFo577OTJ9miRvETqNHzXM_F7v_NZtcJJSKtp-IuAM8UdgyVj8joRa3G4hQxMg3D-NWUxqtYZ9jOI2wmZErzQDdClrKGdDU6bZtKL7hchAyMr2cyd38C_ZLpPSNg1P-Ie79w','1olaYNrlcCwZpu5gCptYy82ar1BAX4iqHGThCyQGIiJz5_IQlNFvG3ttkTLKdPViL8EZKevlsDKeBEyk6_Rx0hDISVTEZcB2dMljnNutngsYKSPixkXW5uKohgAqBrz0-XjmubnYofxo4gcfjZLAhJqnwh9y8-XIOvZNbWr8Fojt_eXK0IHnqkX612bWDIe-S1qjh64SR0oxjzImqf3ilwA'] // input your cookie hare

  var cookie = rndm[Math.floor(Math.random() * rndm.length)];


    const res = await axios.get(`http://45.90.12.34:5049/bing-img?key=${key}&cookie=${cookie}&prompt=${encodeURIComponent(prompt)}`);


  console.log(res.data)
    const data = res.data.result;
  const numberSearch = data.length
    var num = 0;
    var imgData = [];
    for (var i = 0; i < parseInt(numberSearch); i++) {
      let path = __dirname + `/cache/${num+=1}.jpg`;
      let getDown = (await axios.get(`${data[i]}`, { responseType: 'arraybuffer' })).data;
      fs.writeFileSync(path, Buffer.from(getDown, 'utf-8'));
      imgData.push(fs.createReadStream(__dirname + `/cache/${num}.jpg`));
    }


    nayan.reply({
        attachment: imgData,
        body: "ðŸ”Bing Search ResultðŸ”\n\nðŸ“Prompt: " + prompt + "\n\n#ï¸âƒ£Number of Images: " + numberSearch
    }, events.threadID, events.messageID)
    for (let ii = 1; ii < parseInt(numberSearch); ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.jpg`)
    }
}
      }
