const axios = require("axios");

module.exports.config = {
    name: "afro",
    version: "1.0.0",
    permission: 0,
    credits: "Rahad",
    description: "Talk to Ana",
    prefix: true, 
    category: "sim simi fun", 
    usages: "mini",
    cooldowns: 5,
    dependencies: {}
};

module.exports.handleEvent = async function ({ api, event }) {
    if (!event.body || !(event.body.indexOf("afro") === 0 || event.body.indexOf("Afro") === 0)) return;
    const args = event.body.split(/\s+/);
    args.shift();

    let { messageID, threadID, senderID, body } = event;
    let tid = threadID,
        mid = messageID;
    const content = encodeURIComponent(args.join(" "));
    if (!args[0]) return api.sendMessage("__〲 hmm bolo baby....!!🥰 ...", tid, mid);
    try {
        console.log("Request:", `https://simsimi.fun/api/v2/?mode=talk&lang=bn&message=${content}&filter=true`); // Log request URL
        const res = await axios.get(`https://simsimi.fun/api/v2/?mode=talk&lang=bn&message=${content}&filter=true`);
        console.log("Response:", res.data); // Log response data
        const respond = res.data.success;
        if (res.data.error) {
            api.sendMessage(`Error: ${res.data.error}`, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        } else {
            api.sendMessage(respond, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("..Ja Vag Sala Dendi Khor...!!🥱😤", tid, mid);
    }
};

module.exports.run = async function ({ api, event }) {};
