const toBool = (x) => x == 'true'
const { Sequelize } = require('sequelize')
const { existsSync } = require('fs')
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
module.exports = {
    VERSION: 'V 1.0.0',
    SESSION_ID: process.env.SESSION_ID || 'inrl~/tmjjL4NE24BJzT37P8mnIfzDlpccRhZ,
    PASSWORD: process.env.PASSWORD || 'mohan1.',
    U_STATUS: process.env.U_STATUS || 'true',
    ALIVETXT: process.env.ALIVETXT || 'INRL-BOT-MD',
    MENTION: process.env.MENTION || 'on',
    BGMBOT : process.env.BGMBOT || 'false',
    WORKTYPE: process.env.WORKTYPE || 'public',
    LANG :process.env.LANG || 'ml', //values are ml, en only
    OWNER : process.env.OWNER || "919025142177",
    BRANCH: 'master',
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY || '10e5c5fb-7127-4687-8afc-40a26e51d0f4',
        APP_NAME: process.env.HEROKU_APP_NAME || 'inrl-teasting'
    },
    profile: {
    ownerName: "vishwa", 
    ownerNumb: "919025142177", 
    botName: "vishwa", 
  },
    setting: {
    blockchat: [], // Your block chat Jids
  },
  auto: {
    chat: {
      group: "off", // Chat Bot In Group | u can set true or false
      inbox: "off", // chat bot in inbox | u can set true or false
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
    CHATBOT : process.env.CHATBOT || 'null',
    FOOTER : process.env.FOOTER || "vishwa",
    ALIVE : process.env.ALIVE || "https://i.imgur.com/DyLAuEh.jpg",
    IMG11 : process.env.IMG11 || "https://i.imgur.com/DyLAuEh.jpg",
    IMG12 : process.env.IMG12 || "https://imgur.com/AelfUJg.jpg",
    ERRIMG : process.env.ERRIMG || "https://imgur.com/ggvhL6C.jpg",
    INSTAGRAM : process.env.INSTAGRAM || "https://instagram.com/_user_not_define",
    PACKNAME : process.env.PACKNAME || "ɪɴʀʟ-ʙᴏᴛ",
    GIT : process.env.GIT || "https://tinyurl.com/3ex3e48e",
    WEB : process.env.WEB || "https://tinyurl.com/ycks3s8p",
    YT : process.env.YT || "https://tinyurl.com/36r3668n",
    CAPTION : process.env.CAPTION || "_created by inrl-bot_",
    SUDO: process.env.SUDO || "919025142177",
    VIDEO : "https://tinyurl.com/3x38ajmn",
    WAGRP : process.env.WAGRP || 'https://tinyurl.com/f5wh55mk',
    };
