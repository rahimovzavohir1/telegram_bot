import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8488685308:AAGylyRNm7hO_BhJl2nT4Rx_RlgEUYGGpIg"
const bot = new TelegramBot (TOKEN, {polling: true});

bot.on("message", function(msg) {
    const chatId = msg.chat.id;
    const text = msg.text;
    const firstname = msg.chat.first_name;
    if (text == "/start")
    bot.sentMessage(chatId, `Xush kelibsiz, ${firstname}`,{
        reply_markup: {

        }
    });
});


// npm install nodemon --save-dev
console.log("bot ishga tushdi");
