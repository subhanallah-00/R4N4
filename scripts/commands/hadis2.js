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

const triviaQuestions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 5 + 3?", answer: "8" },
    { question: "What planet is known as the Red Planet?", answer: "Mars" },
    { question: "Who wrote 'Romeo and Juliet'?", answer: "Shakespeare" },
    { question: "What is the largest ocean on Earth?", answer: "Pacific" }
];

let userTriviaState = {}; // To track the current question for each user

app.post('/webhook', (req, res) => {
    const body = req.body;

    if (body.object === 'page') {
        body.entry.forEach(entry => {
            const webhook_event = entry.messaging[0];
            const senderId = webhook_event.sender.id;

            if (webhook_event.message && webhook_event.message.text) {
                const messageText = webhook_event.message.text.toLowerCase();

                if (messageText.includes('trivia')) {
                    startTrivia(senderId);
                } else if (userTriviaState[senderId]) {
                    handleTriviaAnswer(senderId, messageText);
                } else {
                    sendTextMessage(senderId, "I didn't understand that. Try saying 'trivia' to play a game!");
                }
            }
        });
        res.status(200).send('EVENT_RECEIVED');
    } else {
        res.sendStatus(404);
    }
});

// Function to start the trivia game
function startTrivia(senderId) {
    const randomQuestion = triviaQuestions[Math.floor(Math.random() * triviaQuestions.length)];
    userTriviaState[senderId] = randomQuestion;
    sendTextMessage(senderId, `Trivia Time! Here's your question: ${randomQuestion.question}`);
}

// Function to handle trivia answers
function handleTriviaAnswer(senderId, messageText) {
    const currentQuestion = userTriviaState[senderId];

    if (messageText.toLowerCase() === currentQuestion.answer.toLowerCase()) {
        sendTextMessage(senderId, "Correct! 🎉 Want to play again? Say 'trivia'.");
        delete userTriviaState[senderId];
    } else {
        sendTextMessage(senderId, `Oops! That's not right. The correct answer was: ${currentQuestion.answer}. Try saying 'trivia' to play again!`);
        delete userTriviaState[senderId];
    }
}
