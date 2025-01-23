/** THIS FULL BOT COMMAND FILE AND ALL API CREATE BY ISLAMICK CYBET CHAT DONT CHINGE THE MY ANY CODE 🤙🖤📿 **/
module.exports.config = {
  name: "check",
  version: "1.0.0",
  permssion: 0,
  credits: "Islamick Cyber",
  prefix : false,
  description: "Islamick post rendom",
  category: "𝐈 𝐂 𝐂",
  usages: "ig",
  cooldowns: 11,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

const truthQuestions = [
    "What’s the most embarrassing thing you’ve ever done?",
    "Have you ever lied to your best friend? If yes, about what?",
    "What’s your biggest fear?",
    "What’s a secret you’ve never told anyone?",
    "What’s the most awkward date you’ve been on?"
];

const dareTasks = [
    "Sing your favorite song out loud!",
    "Send a funny selfie to someone in your contacts!",
    "Describe yourself in three words—but one must be a lie!",
    "Type the alphabet backward in the chat.",
    "Pretend to be a cat and send me a 'meow'!"
];

app.post('/webhook', (req, res) => {
    const body = req.body;

    if (body.object === 'page') {
        body.entry.forEach(entry => {
            const webhook_event = entry.messaging[0];
            const senderId = webhook_event.sender.id;

            if (webhook_event.message && webhook_event.message.text) {
                const messageText = webhook_event.message.text.toLowerCase();

                if (messageText.includes('truth or dare')) {
                    sendTruthOrDare(senderId);
                } else {
                    sendTextMessage(senderId, "I didn’t understand that. Try saying 'truth or dare'.");
                }
            }
        });
        res.status(200).send('EVENT_RECEIVED');
    } else {
        res.sendStatus(404);
    }
});

// Function to send Truth or Dare
function sendTruthOrDare(senderId) {
    const isTruth = Math.random() < 0.5; // Randomly choose truth or dare
    if (isTruth) {
        const randomTruth = truthQuestions[Math.floor(Math.random() * truthQuestions.length)];
        sendTextMessage(senderId, `Truth: ${randomTruth}`);
    } else {
        const randomDare = dareTasks[Math.floor(Math.random() * dareTasks.length)];
        sendTextMessage(senderId, `Dare: ${randomDare}`);
    }
}
