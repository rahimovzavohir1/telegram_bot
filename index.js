import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8488685308:AAGylyRNm7hO_BhJl2nT4Rx_RlgEUYGGpIg"
const bot = new TelegramBot (TOKEN, {polling: true});

bot.on("message", function(msg) {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Salom");
});

console.log("bot ishga tushdi");
