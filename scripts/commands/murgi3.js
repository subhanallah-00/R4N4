‎module.exports.config = {
    name: "murgi3",
    version: "1.0.2",
    permission: 2,
    credits: "nayan",
    prefix: false,
    description: "Send a message to a tagged user",
    category: "without prefix",
    usages: "[tag]",
    cooldowns: 5
};
 
// Main function to run the module
module.exports.run = async function({ api, args, Users, event }) {
    // Get the first mentioned user ID
    var mention = Object.keys(event.mentions)[0];
    
    // If no user is mentioned, send a message asking to mention a user
    if (!mention) return api.sendMessage("Please mention one person", event.threadID);
    
    // Get the name of the mentioned user
    let name = event.mentions[mention];
    
    // Create an array with the mentioned user's ID and name
    var arraytag = [];
    arraytag.push({ id: mention, tag: name });
 
    // Create the body string with 100 tags
    let tags = '🖕--Fuck-🖕-You--🫵'.repeat(100);
    
    // Send a message tagging the mentioned user with their ID and name
    api.sendMessage({
        body: `${tags} ${name}`,
        mentions: arraytag
    }, event.threadID);
};
