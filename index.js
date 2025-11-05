import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8488685308:AAGylyRNm7hO_BhJl2nT4Rx_RlgEUYGGpIg"
const bot = new TelegramBot (TOKEN, {polling: true});
const lamboPhotoURL = "./images/Lambargini_urus.jpg"

bot.on("message", async function (msg) {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstname = msg.chat.first_name;
  if (text == "/start") {
    bot.sendMessage(chatId,` Xush kelibsiz, ${firstname}`, {
      reply_markup: {
        keyboard: [
          [{ text: "Boshlash 🔥" }],
          [{ text: "Menu 🥩" }, { text: "Sozlamalar ⚙️" }],
        ],
        resize_keyboard: true,
      },
    });
  } else if (text == "Boshlash 🔥") {
    const xabar = await bot .sendMessage(chatId, "Iltmos kuting....");

    setTimeout(function() {
      bot.deleteMessage(chatId, xabar.message_id);
      bot.sendPhoto(chatId, lamboPhotoURL ,{
        caption:`
        🦅 Lamborghini Urus:

Lamborghini Urus is a luxury high-performance SUV made by the Italian car manufacturer Lamborghini.
 It was first introduced in 2018 and is known as one of the fastest SUVs in the world.`,
 reply_markup: {
  inline_keyboard: [ 
    [
      { text: "Rasmlar", callback_data: "photos"},
      { text: "Batafsil", callback_data: "info"},
    ],
    [ { text: "Sotib olish", callback_data: "buy"} ],
  ],
 },
      });
    })
    bot.sendMessage(chatId, "Boshlanyaptii....");
  } else if (text == "Menu 🥩") {
    bot.sendMessage(chatId, "Menyuga xush kelibsiz....");
  } else if (text == "Sozlamalar ⚙️") {
    bot.sendMessage(chatId, "Sozlamalar xush kelibsiz ⚙️....");
  } else {
    bot.sendMessage(chatId, "❗️ Xatolik, iltimos /start tugmasini bosing... ");
  }
});

// npm install nodemon --save-dev

console.log("Bot ishga tushdi  ");