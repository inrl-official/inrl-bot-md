const fs = require('fs');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
DATABASE_URL = process.env.DATABASE_URL === undefined ? './bot.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
module.exports = {
    VERSION: 'V 1.0.0',
    SESSION_ID: process.env.SESSION_ID || '',
    U_STATUS: process.env.U_STATUS || 'true',
    WORKTYPE: process.env.WORKTYPE || 'public',
    OWNER : "917025099154",
    BRANCH: 'master',
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY || '',
        APP_NAME: process.env.HEROKU_APP_NAME || ''
    },
    profile: {
    ownerName: "ChrisTian", 
    ownerNumb: "9044102961", 
    botName: "Chris-bot", 
  },
    reply: {
    notFound: "This Command not created. it was creating",
    success: "Done ✓",
    admin: "This Feature Is Only For Admin",
    botAdmin: "Bot Must Be Admin First", 
    owner: "This Feature Is Only For Owner",
    group: "Feature Used Only For Groups!", 
    private: "Features Used Only For Private Chat!", 
    bot: "This Feature Is Only For Bot", 
    wait: "In process..",
    linkm: "", 
    error: "Error!!", 
    endLimit: "Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours",
    ban: "You have been banned by the owner, if you want to be unbanned, chat owner", 
    nsfw: "The nsfw feature has not been activated, please contact the admin to activate", 
    banChat: "The bot was banned in this group, please contact the owner to unban", 
  },
    setting: {
    blockchat: [], // Your block chat Jids
  },
  auto: {
    chat: {
      group: false, // Chat Bot In Group | u can set true or false
      inbox: false, // chat bot in inbox | u can set true or false
    },
    reply: {
      sticker: false, // Boolean | ===== It not created now ======
      audio: false, // Boolean | ===== It not created now ======
    },
    presence: {
      is: false, // U Can on or off this () | u can set true or false
      value: "recording", // It has two types | u can set 'recoding' or 'typing'
    },
    read: false, // Boolean | ===== It not created now ======
  },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './bot.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    ACR_A: "ff489a0160188cf5f0750eaf486eee74",
    ACR_S: "ytu3AdkCu7fkRVuENhXxs9jsOW4YJtDXimAWMpJp"
    };
