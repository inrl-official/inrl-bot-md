const fs = require("fs");
const path = require("path");
const myconfig = require('../config')
const lib = require("./");
const api = {
  github: {
    domain: "https://api.github.com",
  },
  textpro: {
    domain: "https://textpro.me",
    takes1: require("./text").takes1,
    takes2: require("./text").takes2,
  },
  waifu: {
    domain: "https://api.waifu.pics",
    sfw: [ "waifu", "neko", "shinobu", "megumin", "bully", "cuddle", "cry", "hug", "awoo", "kiss", "lick", "pat", "smug", "bonk", "yeet", "blush", "smile", "wave", "highfive", "handhold", "nom", "bite", "glomp", "slap", "kill", "kick", "happy", "wink", "poke", "dance", "cringe", ],
    nsfw: ["waifu", "neko", "trap", "blowjob"],
  },
};
const reply = {
  notFound: "This Command not created. it was creating",
  success: "Done ✓",
  admin: "This Feature Is Only For Admin!",
  botAdmin: "Bot Must Be Admin First!",
  owner: "This Feature Is Only For Owner!",
  group: "Feature Used Only For Groups!",
  private: "Features Used Only For Private Chat!",
  bot: "This Feature Is Only For Bot",
  wait: "In process...",
  linkm: "Where is the link?",
  error: "Error!!",
  endLimit: "Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours",
  ban: "You have been banned by the owner, if you want to be unbanned, chat owner.",
  nsfw: "The nsfw feature has not been activated, please contact the admin to activate",
  banChat: "The bot was banned in this group, please contact the owner to unban",
};
const docs = {
  d1: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  d2: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  d3: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  d4: "application/zip",
  d5: "application/pdf",
  d6: "application/vnd.android.package-archive",
};
const exif = {
  footer: myconfig.FOOTER,
  packname: myconfig.PACKNAME,
  name: myconfig.ALIVETXT || "in",
  author: myconfig.FREE_TXT || "inrl",
  owner: myconfig.OWNER ? ["917593919575"].push(myconfig.OWNER) : ["917593919575"],
  cap: myconfig.CAPTION,
  web: myconfig.WEB,
  github: myconfig.GIT,
  YT: myconfig.YT,
};
const quoted = {
  image: {
    key: { fromMe: false, participant: `917593919575@s.whatsapp.net`, ...{ remoteJid: "status@broadcast" }, id: "", },
    message: { imageMessage: { url: "frendpage.vercel.app", mimetype: "image/jpeg", caption: "inrl-bot-md", fileSha256: "+Ia+Dwib70Y1CWRMAP9QLU=", fileLength: "28777", height: 1080, width: 1079, mediaKey: "vXmRR7nXxbGc=", fileEncSha256: "sDguI23fWDz1aZu4faWG/CyRY=", directPath: "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcF3D69", mediaKeyTimestamp: "1610993486", jpegThumbnail: "https://wa.me/p/4919198358182077/917025099154", }, },
  },
  product: {
    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...{ remoteJid: "status@broadcast" }, id: "", },
    message: { productMessage: { product: { productImage: { mimetype: "image/jpeg", jpegThumbnail: "https://wa.me/p/4919198358182077/917025099154", }, productId: "6228226267192211", title: "inrl-bot-md", description: "This is a WhatsApp user bot \n\nSend this number: Alive", retailerId: "003", url: "https://Wa.me/917593919575", productImageCount: 1, }, businessOwnerJid: "917593919575@s.whatsapp.net", }, },
  },
};
const setting = {
  blockchat: myconfig.BLOCK_CHAT
};

module.exports = {
auto: {
    chat: {
      group: myconfig.AUTO_CHAT_GRP, // Chat Bot In Group | u can set true or false
      inbox: myconfig.AUTO_CHAT_PM, // chat boT in inbox | u can set true or false
    },
    reply: {
      sticker: false, // Boolean | ===== It not created now ======
      audio: false, // Boolean | ===== It not created now ======
    },
    presence: {
      is: false, // U Can on or off this () | u can set true or false
      value:myconfig.BOT_PRESENCE, // It has two types | u can set 'recoding' or 'typing'
    },
    read: false, // Boolean | ===== It not created now ======
  },
  reply,
  api,
  docs,
  exif,
  lib,
  setting,
  quoted,
};
