const fs = require("fs");

module.exports.config = {
    name: "owners",
    version: "1.1.1",
    prefix: true,
    permission: 0,
    credits: "SK-SIDDIK-KHAN", 
    description: "",
    category: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    let react = event.body.toLowerCase();
    
    if (react.includes("owner") || react.includes("rana") || react.includes("ceo")) {
        var msg = {
            body: "╔═.✵.═════════════╗\n ⏜𝗠𝗢𝗛𝗔𝗠𝗠𝗔𝗗 𝗥𝗔𝗡𝗔⏜ \n╚═════════════.✵.═╝"
        };

        api.sendMessage(msg, threadID, messageID);

        api.setMessageReaction("😘", event.messageID, (err) => {}, true);
    }
};

module.exports.run = function({ api, event, client, __GLOBAL }) {
    
};
