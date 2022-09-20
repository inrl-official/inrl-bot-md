const toBool = (x) => x == 'true'
const { Sequelize } = require('sequelize')
const { existsSync } = require('fs')
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
const DATABASE_URL = process.env.DATABASE_URL === undefined ? './database.db' : process.env.DATABASE_URL
module.exports = {
    VERSION: 'V 1.0.0',
    SESSION_ID: process.env.SESSION_ID || '',
    PASSWORD: process.env.PASSWORD || '',
    U_STATUS: process.env.U_STATUS || 'true',
    MENTION: process.env.MENTION || 'on',
    BGMBOT : process.env.BGMBOT || 'on',
    WORKTYPE: process.env.WORKTYPE || 'public',
    LANG :process.env.LANG || 'ml', //values are ml, en only
    OWNER : ["923087609409"],
    BRANCH: 'master',
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY || '',
        APP_NAME: process.env.HEROKU_APP_NAME || ''
    },
    profile: {
    ownerName: "Shaheen", 
    ownerNumb: "923087609409", 
    botName: "Shaheen Baloch", 
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
    FOOTER : process.env.FOOTER || "ɪɴʀʟ-ᴍᴅ",
    ALIVE : "https://youtu.be/DLFzQCZFfP0",
    IMG11 : "https://youtu.be/DLFzQCZFfP0",
    IMG12 : "https://youtu.be/DLFzQCZFfP0",
    ERRIMG : "https://youtu.be/DLFzQCZFfP0",
    PACKNAME : process.env.PACKNAME || "ɪɴʀʟ-ʙᴏᴛ",
    GIT : process.env.GIT || "https://youtu.be/DLFzQCZFfP0",
    WEB : process.env.WEB || "https://youtu.be/DLFzQCZFfP0",
    YT : process.env.YT || "https://youtu.be/DLFzQCZFfP0",
    CAPTION : process.env.CAPTION || "_created by inrl-bot_",
    SUDO: process.env.SUDO || ['923087609409'],
    VIDEO : "coming soon",
    WAGRP : process.env.WAGRP || 'https://youtu.be/DLFzQCZFfP0',
    DATABASE: DATABASE_URL === './database.db' ? new Sequelize({ dialect: 'sqlite', storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: 'postgres', ssl: true, protocol: 'postgres', dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false }),
    };
