const Inrlmd = require('./perfix');
const INRLbot = require('./Base');
const INRLmd = require('./Correct');
const inrlBOTS = require("./Function");
const Inrlbots = require("./ReplyMessage");
const inrlbotS = require("./Scraper");
const InrLBOTs = require("./Sticker");
const INRLBOTS = require('./Message');
const inRllOts = require('./cloud');
const inRlBOts = require('./status');
const inrlbOts = require('./converter');
const iNRLBots = require('./uploader');
const { getYtV, getYtA, weather, movie } = require('./youtube');
//sepsion calls after sy. argumentsðŸ˜‚
const Collections =INRLbot.Collections;
const correct = INRLmd.correct;
const smsg =Inrlbots.smsg;
const serialize =Inrlbots.serialize;
const WAConnection =Inrlbots.WAConnection;
const pinterest = inrlbotS.pinterest;
const wallpaper = inrlbotS.wallpaper;
const wikimedia = inrlbotS.wikimedia;
const quotesAnime = inrlbotS.quotesAnime;
const aiovideodl = inrlbotS.aiovideodl;
const umma = inrlbotS.umma;
const ringtone = inrlbotS.ringtone;
const styletext = inrlbotS.styletext;
const imageToWebp = InrLBOTs.imageToWebp;
const videoToWebp = InrLBOTs.videoToWebp;
const writeExifImg = InrLBOTs.writeExifImg;
const writeExifVid =InrLBOTs.writeExifVid;
const writeExif = InrLBOTs.writeExif;
const unixTimestampSeconds = inRllOts.unixTimestampSeconds;
const generateMessageTag = inRllOts.generateMessageTag;
const processTime = inRllOts.processTime;
const getRandom = inRllOts.getRandom;
const getBuffer = inRllOts.getBuffer;
const fetchJson = inRllOts.fetchJson;
const runtime = inRllOts.runtime;
const clockString = inRllOts.clockString;
const sleep = inRllOts.sleep;
const isUrl = inRllOts.isUrl;
const getTime = inRllOts.getTime;
const formatDate = inRllOts.formatDate;
const tanggal = inRllOts.tanggal;
const rexdl = inRllOts.rexdl;
const rexdldown = inRllOts.rexdldown;
const formatp = inRllOts.formatp;
const jsonformat = inRllOts.jsonformat;
const logic = inRllOts.logic;
const generateProfilePicture = inRllOts.generateProfilePicture;
const bytesToSize = inRllOts.bytesToSize;
const getSizeMedia = inRllOts.getSizeMedia;
const toAudio = inrlbOts.toAudio;
const toPTT = inrlbOts.toPTT;
const toVideo = inrlbOts.toVideo;
const inrl = Inrlmd.inrl;
const getString = Inrlmd.getString;
const reactArry = Inrlmd.reactArry;
const successfullMessage = Inrlmd.successfullMessage;
const infoMessage = Inrlmd.infoMessage;
const errorMessage = Inrlmd.errorMessage;
const commands = Inrlmd.commands;
const Commands = Inrlmd.commands;
const categories = Inrlmd.categories;
const config = Inrlmd.config;
const TelegraPh = iNRLBots.TelegraPh;
const UploadFileUgu = iNRLBots.UploadFileUgu;
const webp2mp4File = iNRLBots.webp2mp4File;
//end inrl spesiol func
const  { add, subtract, multiply, division, qrcode, base64e, base64d, age, anime, ffpack, ff1,ff2,ff3, ff4, ff5, ff6, ff7, ff8, ff9, ff10, ff11, ff12, ff13, ff14, ff15, ff16, ff17, ff18, ff19, ff20, ff21, ff22, ff23, ff24, ff25, ff26, ff27, ff28, ff29, ff30, ff31, ff32, ff33, ff34, ff35, ff36, ff37, ff38, ff39, ff40, ff41, ff42, ff43, ff44, ff45, ff46, ff47, ff48, ff49, ff50, animepack, an1, an2, an3, an4, an5, an6, an7, an8, an9, an10, an11, an12, an13, an14, an15, an16, an17, bts, robote, spiderman, tentacion, youAreBad, ansay, ch, trumb, inrlQuita, insult } = require('./INrlFunc');
const {
  listall,
  strikeThrough,
  wingdings,
  vaporwave,
  typewriter,
  analucia,
  tildeStrikeThrough,
  underline,
  doubleUnderline,
  slashThrough,
  sparrow,
  heartsBetween,
  arrowBelow,
  crossAboveBelow,
  creepify,
  bubbles,
  mirror,
  squares,
  roundsquares,
  flip,
  tiny,
  createMap,
  serif_I,
  manga,
  ladybug,
  runes,
  serif_B,
  serif_BI,
} = require("./database/ThisFancy/fancy");
const { remove, unscreen, sendUrl, tinyUrl, webSs, pdfGen, BufferToFile, AudioMetaData, send_alive, send_menu, sendRepeat, toGroup } = require('./database/semifunction/send_buffer_data');
const { animewifu, animenom, animefox, animesmug, hentaiWifu, hentaiNeko, hentaiTrap, animeawoo, animemegumin, animemehold, animehighfive, animecringe, animedance, animehappy, animeblush, animeglomp, animewave, animepoke, animewink, animebonk, animebully, animeyeet, animeneko, animecuddle, animeslap, animepat, animegood, animehug, animekiss, animewlp, animespank, animecry, animekill, animelick, animebite } = require('./database/semifunction/anime_api_pack');
const { dogphoto, lovephoto, cartoonphoto } = require('./database/semifunction/fun_photos');
const { googleIt, wikiMedia, ringTone } = require('./database/semifunction/serch_query');
const { stickersearch } = require('./set_mension');
const { quoted, hentaivideo, send_vote, send_poll, truecaller } = require('./database/semifunction/is_ext');
const { sendPhoto, sendVideo, sendVoice, sendGif, sendBassAudio, sendSlowAudio, sendBlownAudio, sendDeepAudio, sendErrapeAudio, sendFastAudio, sendFatAudio, sendNightcoreAudio, sendReverseAudio, sendSquirrelAudio, sendMp4AsMp3, mediafire } = require('./database/semifunction/fFmpeg');
const { cmdDB, setCmd, DeleteCmd } = require('./database/cmddb');
const { setWarn, ResetWarn, ListWarn } = require('./database/warndb');
module.exports = {
    Collection: require("./Base"),
    Function: require("./Function"),
    Simple: require("./ReplyMessage"),
    Scrape: require("./Scraper"),
    Sticker: require("./Sticker"),
    pass : require("./password"),
    upsert: require('./status'),
    eziofunc: require('./Message'),
    Collections, correct, smsg, serialize, WAConnection, pinterest, wallpaper, wikimedia, quotesAnime, aiovideodl, umma, ringtone, styletext, imageToWebp, videoToWebp, writeExifImg, writeExifVid, unixTimestampSeconds, generateMessageTag, processTime, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, rexdl, rexdldown, formatp, jsonformat, logic, generateProfilePicture, bytesToSize, getSizeMedia, toAudio, toPTT, toVideo, inrl, successfullMessage, infoMessage, errorMessage, commands, Commands, categories, config, TelegraPh, UploadFileUgu, webp2mp4File, add, subtract, multiply, division, qrcode, base64e, base64d, age, anime, ffpack, ff1,ff2,ff3, ff4, ff5, ff6, ff7, ff8, ff9, ff10, ff11, ff12, ff13, ff14, ff15, ff16, ff17, ff18, ff19, ff20, ff21, ff22, ff23, ff24, ff25, ff26, ff27, ff28, ff29, ff30, ff31, ff32, ff33, ff34, ff35, ff36, ff37, ff38, ff39, ff40, ff41, ff42, ff43, ff44, ff45, ff46, ff47, ff48, ff49, ff50, animepack, an1, an2, an3, an4, an5, an6, an7, an8, an9, an10, an11, an12, an13, an14, an15, an16, an17, bts, robote, spiderman, tentacion, youAreBad, ansay, ch, trumb, inrlQuita, insult,
    styletext: (text, index) => {
    index = index - 1;
    return listall(text)[index];
  },
    randomStyle:(text)=>{
    let list = listall(text)
    return list[Math.floor(Math.random()*list.length)]
  },
    listall,
    strikeThrough,
    wingdings,
    vaporwave,
    typewriter,
    analucia,
    tildeStrikeThrough,
    underline,
    doubleUnderline,
    slashThrough,
    sparrow,
    heartsBetween,
    arrowBelow,
    crossAboveBelow,
    creepify,
    bubbles,
    mirror,
    squares,
    roundsquares,
    flip,
    tiny,
    createMap,
    serif_I,
    manga,
    ladybug,
    runes,
    serif_B,
    serif_BI,
    remove, unscreen, sendUrl, tinyUrl, webSs, pdfGen, BufferToFile, AudioMetaData, send_alive, send_menu, sendRepeat, toGroup, getYtV, getYtA, weather, movie,
    animewifu, animenom, animefox, animesmug, hentaiWifu, hentaiNeko, hentaiTrap, animeawoo, animemegumin, animemehold, animehighfive, animecringe, animedance, animehappy, animeblush, animeglomp, animewave, animepoke, animewink, animebonk, animebully, animeyeet, animeneko, animecuddle, animeslap, animepat, animegood, animehug, animekiss, animewlp, animespank, animecry, animekill, animelick, animebite,
    dogphoto, lovephoto, cartoonphoto, googleIt, wikiMedia, ringTone, quoted, hentaivideo, send_vote, send_poll, truecaller, stickersearch, sendPhoto, sendVideo, sendVoice, sendGif, sendBassAudio, sendSlowAudio, sendBlownAudio, sendDeepAudio, sendErrapeAudio, sendFastAudio, sendFatAudio, sendNightcoreAudio, sendReverseAudio, sendSquirrelAudio, sendMp4AsMp3, mediafire, cmdDB, setCmd, DeleteCmd, setWarn, ResetWarn, ListWarn
}
