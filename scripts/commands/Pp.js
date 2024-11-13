module.exports.config = {
	name: "pp",
	version: "1.0.0",
	permission: 0,
	credits: "Nayan",
	prefix: false,
	description: "get user id.",
	category: "without prefix",
	cooldowns: 5
};

module.exports.run = async function({ event, api, args, client, Currencies, Users, utils, __GLOBAL, reminder }) {
const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios']; 
    if(event.type == "message_reply") { 
      let name = await Users.getNameUser(event.messageReply.senderID) 
	uid = event.messageReply.senderID
	var callback = () =>   api.sendMessage({body:`==profile==━`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); 
    }
    if (!args[0]) {
      var uid = event.senderID;
      
        var callback = () =>  api.sendMessage({body:`==profile==━`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${event.senderID}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); 
    }
    else {
	if (args[0].indexOf(".com/")!==-1) {
    const res_ID = await api.getUID(args[0]);
   var name = data.name
var data = await api.getUserInfoV2(res_ID);
    var username = data.username
    var link = data.link
    var callback = () => api.sendMessage({body:`=== [ profile==]`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${res_ID}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); }
	else {
		if (args.join().indexOf('@') !== -1) 
      var uid = Object.keys(event.mentions) 
      var callback = () => 
api.sendMessage({body:`=== profile===`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); 
               
	}
}
}
