
# WhatsApp Flood Bot

This is a WhatsApp bot that sends messages at custom intervals. Using the libraries.
It can be configured to send bulk messages to groups or to individuals.
USING:
### 1. Clone this repository.

### 2. Install the dependencies:
npm install

npm install whatsapp-web.js qrcode-terminal

npm install --save-dev @types/qrcode-terminal

### 3. Configure WhatsApp Web:
When you run the bot for the first time, it will generate a QR code. Scan the QR with your WhatsApp to log into the bot.

To run the bot (with TypeScript compilation):
npm start

If you have any problems with TS, generate the JS file for better results.
npx tsc

### 4. Available commands:
Open a browser and using whatsweb run the codes.
!test: Checks if the bot is working, you will get the response: The bot is ready!
!flood <quantity> <interval_in_seconds> <message>: Sends several messages with interval.
EXAMPLE: !flood 5 2 Hello, this is a test.

This will send "Hello, this is a test" 5 times, with an interval of 2 seconds between each sending.

Important tip!
1) Do not close the terminal while running the script.
2) Send the commands in the conversations via browser and if it takes a while to get a response from an ENTER in the terminal where you are running the code, this will help.
3) Do not use for commercial purposes! You can be blocked by Meta, lose your number and even be banned if you are linked to a company account.
4) For your security, have a number (reserve or not personal) to use the tool.
