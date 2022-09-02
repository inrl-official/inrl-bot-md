const fs = require("fs");
const path = require("path");
const myconfig = require('../config')
const lib = require("./");
const auto = myconfig.auto
const image = {
  url: {
    D_E_DPC:
      "https://i.imgur.com/DyLAuEh.jpg",
    D_E_TMB:
      "https://i.imgur.com/DyLAuEh.jpg",
    D_E_DP_:
      "https://imgur.com/AelfUJg.jpg",
    D_E_ERR:
      "https://imgur.com/ggvhL6C.jpg",
  },
  encd: {
    D_E_TMB:
      "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2MBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//AABEIABIAIAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AOs1rVTpqJsiMjHLlQcEoPvEdemRnjoSexIAKll4nspoI/tUwhnIBK8lefcZx9DzQBqf2lZZ5vLbGP8Anqv+NAE8U0c8YkhkSRD0ZGBB/GgDD8Xs8mnC3SBJQ5JZm/5Z4xyPfmgaM7QNOwqRanZYeT50LEMC4zuzg5yRg4PXB9AKG9dAOptba3tohHbRJCmSdkY2jPfgUCJSeevtQBgTO7nDszAS5AJzis+hRNdfvInV/mXcnB5H3loQGlYnMOTydx5NOGwmN1NmS0BVip82MZBxwXWnIEf/2Q==",
    D_E_PPC:
      "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",
    D_E_ADEC:
      "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2MBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//AABEIACAAIAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APP6AFUFmCjqTigTdlcmvrf7JeSwZB2HjBzx1HNNqzIoz9pBS7kFI0CgCxa7YleeRN2FKx89XP8APHX8vWmjKonK0U/X0/4P+ZJO5urKKQnMkA8tuedv8JxjgdvqfejdExShNro9fn1KdI3FQhXBKhgDkg9DQJ6o6QXdgstvc27OI4nadkC5xLxtLDOcZ4yM+nfNXNq2hx4SM1Ucaz12THS31rf3Ul7eMhMsTCZMYQsu3btz32k+4OfWlDrcvGRlaPsn735f116GBfSRy3krw7tjHjd1/Gk9Wa0YyjBKW5FCI2lVZWKoeCw/h9/fHpSLk2leO5bjkgiXiTePLU4KK2055HzD3zx9Peq0MpRlLfz7r8vu/qwGe1cOsqHAY7TFsXjBx/Bk+/8AKldC5Jr4X99/8yG7S2Rv9GlZ13EfMO3Y/rj8M98UO3Qum5te+j//2Q==",
  },
};
const api = {
  github: {
    domain: "https://api.github.com",
  },
  textpro: {
    domain: "https://textpro.me",
    takes1: require("./textPro").takes1,
    takes2: require("./textPro").takes2,
  },
  waifu: {
    domain: "https://api.waifu.pics",
    sfw: [ "waifu", "neko", "shinobu", "megumin", "bully", "cuddle", "cry", "hug", "awoo", "kiss", "lick", "pat", "smug", "bonk", "yeet", "blush", "smile", "wave", "highfive", "handhold", "nom", "bite", "glomp", "slap", "kill", "kick", "happy", "wink", "poke", "dance", "cringe", ],
    nsfw: ["waifu", "neko", "trap", "blowjob"],
  },
};
const reply = {
  notFound: myconfig.reply.notFound || "This Command not created. it was creating",
  success: myconfig.reply.success || "Done ✓",
  admin: myconfig.reply.admin || "This Feature Is Only For Admin!",
  botAdmin: myconfig.reply.botAdmin || "Bot Must Be Admin First!",
  owner: myconfig.reply.owner || "This Feature Is Only For Owner!",
  group: myconfig.reply.group || "Feature Used Only For Groups!",
  private: myconfig.reply.private || "Features Used Only For Private Chat!",
  bot: myconfig.reply.bot || "This Feature Is Only For Bot",
  wait: myconfig.reply.wait || "In process...",
  linkm: myconfig.reply.linkm || "Where is the link?",
  error: myconfig.reply.error || "Error!!",
  endLimit: myconfig.reply.endLimit || "Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours",
  ban: myconfig.reply.ban || "You have been banned by the owner, if you want to be unbanned, chat owner.",
  nsfw: myconfig.reply.nsfw || "The nsfw feature has not been activated, please contact the admin to activate",
  banChat: myconfig.reply.banChat || "The bot was banned in this group, please contact the owner to unban",
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
  footer: "CHRIS-bot",
  packname: "CHRIS-ʙᴏᴛ",
  name: myconfig.profile.botName || "CHRIS",
  author: myconfig.profile.ownerName || "CHRIS",
  owner: myconfig.profile.ownerNumb ? ["9044102961"].push(myconfig.profile.ownerNumb) : ["9044102961"],
  cap: "*Cerated by inrlTeam*",
  web: "https://frendpage.vercel.app/",
  github: "https://github.com/Christian7751",
  sc: "https://github.com/chhristian7751/chris-bot.git",
  YT: "https://www.youtube.com/channel/null",
};
const quoted = {
  image: {
    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...{ remoteJid: "status@broadcast" }, id: "", },
    message: { imageMessage: { url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", mimetype: "image/jpeg", caption: "Dark Ezio", fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", fileLength: "28777", height: 1080, width: 1079, mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", directPath: "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", mediaKeyTimestamp: "1610993486", jpegThumbnail: image.encd.D_E_PPC, }, },
  },
  product: {
    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...{ remoteJid: "status@broadcast" }, id: "", },
    message: { productMessage: { product: { productImage: { mimetype: "image/jpeg", jpegThumbnail: image.encd.D_E_PPC, }, productId: "6228226267192211", title: "Whts-Bot_MD", description: "This is a WhatsApp user bot \n\nSend this number: Alive", retailerId: "003", url: "https://Wa.me/94761896648", productImageCount: 1, }, businessOwnerJid: "94761539856@s.whatsapp.net", }, },
  },
};
const setting = {
  blockchat: ["1234567890@g.us"],
};

module.exports = {
  auto,
  reply,
  api,
  docs,
  exif,
  image,
  lib,
  setting,
  quoted,
};

//console.log(reply)
