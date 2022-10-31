const bots = require('../lib/perfix'); 
const { isUrl , getBuffer , getRandom } = require('../lib/cloud');
const Config = require('../config');
const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper');
let noh = require('@bochilteam/scraper');
const ffmpeg = require('fluent-ffmpeg')
const fs = require('fs');
let { webp2mp4File } = require('../lib/uploader')
let { toAudio,toPTT } = require('../lib/converter')
const { exec, spawn, execSync } = require('child_process')
const ID3Writer = require('browser-id3-writer');
const googleTTS = require('google-translate-tts');


bots.inrl({pattern: ['tiktok'], desc: "to downlode tiktok video",sucReact: "🌇",  category: ["all"]}, async (message, client) => {
const text = message.client.text;
if (!text) return await client.sendMessage(message.from, { text :' enter a tiktok link '},{ quoted: message })
if (!isUrl(message.client.args[0]) && !message.client.args[0].includes('tiktok.com')) return await client.sendMessage(message.from, { text :' enterd a tiktok link is not valid'},{ quoted: message })
url = await fetchJson(`https://violetics.pw/api/downloader/tiktok?apikey=df7d-425a-3bc8&url=${text}`)
let listmn = `ᴛɪᴋᴛᴏᴋ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ\n\n*ᴛɪᴛɪʟᴇ:* ${url.result.title}\n\ᴀᴜᴛʜᴇʀ:${url.result.id}\n\nᴜʀʟ: ${url.result.url}`
buf = await getBuffer(url.result.thumb)
buf2 = await getBuffer(url.result.link_dl2)
let onMessage = {
        image: { url: buf },
        caption: listmn
};
let Message = {
        image: { url: buf2 },
        caption: listmn
};
await client.sendMessage(message.from, Message, { quoted: message});
await client.sendMessage(message.from, onMessage, { quoted: message});
});
bots.inrl({pattern: ['ig'], desc: "to download istagram video",sucReact: "🌇",  category: ["all"]}, async (message, client) => {
const text = message.client.text;     
if (!text) return await client.sendMessage(message.from, { text :`enter a instagram link _ex_:${Config.INSTAGRAM}`},{ quoted: message })
if (!isUrl(message.client.args[0]) && !message.client.args[0].includes('instagram.com')) return await client.sendMessage(message.from, { text :'entered instagram link is not valid'},{ quoted: message })
   
instagramdlv3(`${text}`).then(async (data) => {
for (let f of data) {                                      
await client.sendMessage( message.from, { video: { url: f.url }, mimetype: "video/mp4", fileName: `${Config.FREE_TXT}.mp4`, caption,}, { quoted: message });
}
}).catch((err) => {
  client.sendMessage(message.from, { text :"filed to download"},{ quoted: message })
})
});
bots.inrl({ pattern: ['fbmp3'], desc: "to downlode fb mp3",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
const text = message.client.text;
if (!text) return await client.sendMessage(message.from, { text :"enter a fb link"},{ quoted: message })
if (!isUrl(message.client.args[0]) && !message.client.args[0].includes('facebook.com')) { global.catchError = true; }
     
noh.savefrom(`${text}`).then(async (inrl) => { 
await client.sendMessage( message.from, { audio: { url: inrl.url[0].url }, mimetype: "audio/mpeg", fileName: `${Config.FREE_TXT}.mp3`, }, { quoted: message } );
}).catch((err) => {
client.sendMessage(message.from, { text :"filed to download"},{ quoted: message })
})
});
bots.inrl({ pattern: ['photo','toimg'], desc: "to convert webp to img",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
   if (!message.quoted) return await client.sendMessage(message.from, { text :"replay to a sticker"},{ quoted: message })
   if (!/webp/.test(message.client.mime)) return await client.sendMessage(message.from, { text :"replay to a sticker"},{ quoted: message })
let _message = message.quoted.stickerMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message);
   let ran = await getRandom('.png')
   exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) client.sendMessage(message.from, { text: err }, { quoted: message });
  let buffer = fs.readFileSync(ran)
  client.sendMessage(message.from, { image:  buffer , caption: bots.config.exif.cap }, { quoted: message });
  fs.unlinkSync(ran)
   })
 });
 bots.inrl({ pattern: ['video','tomp4'], desc: "to convert webp to mp4",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
   if (!message.quoted) return await client.sendMessage(message.from, { text :"replay to a sticker"},{ quoted: message })
   if (!/webp/.test(message.client.mime)) return await client.sendMessage(message.from, { text :"replay to a sticker"},{ quoted: message })
let _message = message.quoted.stickerMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
   let webpToMp4 = await webp2mp4File(media)
   await client.sendMessage(message.from, { video: { url : webpToMp4.result }, caption: bots.config.exif.cap }, { quoted: message });
   await fs.unlinkSync(media)
 });
bots.inrl({ pattern: ['voice','ptt'], desc: "to convert audio/video to ptt",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
 if (!/video/.test(message.client.mime) && !/audio/.test(message.client.mime)) return await client.sendMessage(message.from, { text : "Reply Video/Audio That You Want To Be VN With Caption " },{ quoted: message });
 if (!message.quoted) return await client.sendMessage(message.from, { text :"Reply Video/Audio That You Want To Be VN With Caption " },{ quoted: message });
 let _message = message.quoted.audioMessage;
   let media = await client.downloadAndSaveMediaMessage(_message);
await client.sendMessage( message.from,{ audio: { url: media }, mimetype: "audio/mp4", ptt:true }, { quoted: message });
 });
 bots.inrl({ pattern: ['togif'], desc: "to convert webp to gif",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
   if (!message.quoted) return await client.sendMessage(message.from, { text : "Reply An img " },{ quoted: message });
   if (!/webp/.test(message.client.mime)) return await client.sendMessage(message.from, { text : "this features is used to convert webp to gif playback" },{ quoted: message });
  let _message = message.quoted.stickerMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
   let webpToMp4 = await webp2mp4File(media)
   await client.sendMessage(message.from, { video: { url : webpToMp4.result }, caption: bots.config.exif.cap, gifPlayback: true },{ quoted: message });
   await fs.unlinkSync(media)
 });
bots.inrl({ pattern: ['bass'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/audio/.test(message.client.mime)) {
let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message);
let ran = getRandom('.mp3')
   exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(media)
if (err) client.sendMessage(message.from, { text: err }, { quoted: message });
  let buff = fs.readFileSync(ran)
client.sendMessage(message.from,  { audio: buff, mimetype: "audio/mpeg", fileName: `${Config.FREE_TXT}.mp3`, }, { quoted: message });
  fs.unlinkSync(ran)
   });
  }
});
bots.inrl({ pattern: ['blown'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
set = '-af acrusher=.1:1:64:0:log'
if (/audio/.test(message.client.mime)) {
let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
let ran = getRandom('.mp3')
   exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(media)
if (err) client.sendMessage(message.from, { text: err }, { quoted: message });
  let buff = fs.readFileSync(ran)
client.sendMessage(message.from,  { audio: buff, mimetype: "audio/mpeg", fileName: `${Config.FREE_TXT}.mp3`, }, { quoted: message });
    fs.unlinkSync(ran)
   });
  }
});
bots.inrl({ pattern: ['deep'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
set = '-af atempo=4/4,asetrate=44500*2/3'
if (/audio/.test(message.client.mime)) {
let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
let ran = getRandom('.mp3')
   exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(media)
if (err) client.sendMessage(message.from, { text: err }, { quoted: message });
  let buff = fs.readFileSync(ran)
client.sendMessage(message.from,  { audio: buff , mimetype: "audio/mpeg", fileName: `${Config.FREE_TXT}.mp3`, }, { quoted: message });
    fs.unlinkSync(ran)
   });
  }
});
bots.inrl({ pattern: ['earrape'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
set = '-af volume=12'
if (/audio/.test(message.client.mime)) {
let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
let ran = getRandom('.mp3')
   exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(media)
if (err) client.sendMessage(message.from, { text: err }, { quoted: message });
  let buff = fs.readFileSync(ran)
client.sendMessage(message.from,  { audio: buff , mimetype: "audio/mpeg", fileName: `${Config.FREE_TXT}.mp3`, }, { quoted: message });
    fs.unlinkSync(ran)
   });
  }
});
bots.inrl({ pattern: ['fast'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/audio/.test(message.client.mime)) {
let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
let ran = getRandom('.mp3')
   exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(media)
if (err) client.sendMessage(message.from, { text: err }, { quoted: message });
  let buff = fs.readFileSync(ran)
client.sendMessage(message.from,  { audio:  buff , mimetype: "audio/mpeg", fileName: `${Config.FREE_TXT}.mp3`, }, { quoted: message });
    fs.unlinkSync(ran)
   });
  }
});
bots.inrl({ pattern: ['fat'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/audio/.test(message.client.mime)) {
let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
let ran = getRandom('.mp3')
   exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(media)
if (err) client.sendMessage(message.from, { text: err }, { quoted: message });
  let buff = fs.readFileSync(ran)
client.sendMessage(message.from,  { audio: buff , mimetype: "audio/mpeg", fileName: `${Config.FREE_TXT}.mp3`, }, { quoted: message });
    fs.unlinkSync(ran)
   });
  }
});
bots.inrl({ pattern: ['nightcore'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/audio/.test(message.client.mime)) {
let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
let ran = getRandom('.mp3')
   exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(media)
if (err) client.sendMessage(message.from, { text: err }, { quoted: message });
  let buff = fs.readFileSync(ran)
client.sendMessage(message.from,  { audio: buff, mimetype: "audio/mpeg", fileName: `${Config.FREE_TXT}.mp3`, }, { quoted: message });
    fs.unlinkSync(ran)
   });
  }
});
bots.inrl({ pattern: ['reverse'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
set = '-filter_complex "areverse"'
if (/audio/.test(message.client.mime)) {
let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
let ran = getRandom('.mp3')
   exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(media)
if (err) client.sendMessage(message.from, { text: err }, { quoted: message });
  let buff = fs.readFileSync(ran)
client.sendMessage(message.from,  { audio: buff , mimetype: "audio/mpeg", fileName: `${Config.FREE_TXT}.mp3`, }, { quoted: message });
    fs.unlinkSync(ran)
   });
  }
});
bots.inrl({ pattern: ['robot'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/audio/.test(message.client.mime)) {
let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
let ran = getRandom('.mp3')
   exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(media)
if (err) client.sendMessage(message.from, { text: err }, { quoted: message });
  let buff = fs.readFileSync(ran)
client.sendMessage(message.from,  { audio:  buff , mimetype: "audio/mpeg", fileName: `${Config.FREE_TXT}.mp3`, }, { quoted: message });
    fs.unlinkSync(ran)
   });
  }
});
bots.inrl({ pattern: ['slow'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/audio/.test(message.client.mime)) {
let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
let ran = getRandom('.mp3')
   exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(media)
if (err) client.sendMessage(message.from, { text: err }, { quoted: message });
  let buff = fs.readFileSync(ran)
client.sendMessage(message.from,  { audio: buff , mimetype: "audio/mpeg", fileName: `${Config.FREE_TXT}.mp3`, }, { quoted: message });
    fs.unlinkSync(ran)
   });
  }
});
bots.inrl({ pattern: ['smooth'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/audio/.test(message.client.mime)) {
let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
let ran = getRandom('.mp3')
   exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(media)
if (err) client.sendMessage(message.from, { text: err }, { quoted: message });
  let buff = fs.readFileSync(ran)
client.sendMessage(message.from,  { audio: buff , mimetype: "audio/mpeg", fileName: `${Config.FREE_TXT}.mp3`, }, { quoted: message });
    fs.unlinkSync(ran)
   });
  }
});
bots.inrl({ pattern: ['squirrel'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(message.client.mime)) {
let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
let ran = getRandom('.mp3')
   exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(media)
if (err) client.sendMessage(message.from, { text: err }, { quoted: message });
  let buff = fs.readFileSync(ran)
client.sendMessage(message.from,  { audio: buff , mimetype: "audio/mpeg", fileName: `${Config.FREE_TXT}.mp3`, }, { quoted: message });
    fs.unlinkSync(ran)
   });
  }
});
bots.inrl({ pattern: ['take'], desc: "to convert packname to given txt",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
const text = message.client.text;
var _message = message.quoted.audioMessage || message.quoted.stickerMessage;
if (!text) return await client.sendMessage(message.from, { text :"replay to a sticker with your packname txt!"},{ quoted: message })
if( _message == message.quoted.audioMessage) {
   let media = await client.downloadAndSaveMediaMessage(_message)

if (text.includes(';')) {
         var split = text.split(';');
         CreaterForAud = split[1] || 'inrl-official';
         TextForAud = split[0] || 'inrl-bot-md';
         imgForAud = split[2] || fs.readFileSync('./media/imagee.jpg');
      }
const songBuffer = fs.readFileSync(media);
const coverBuffer = imgForAud;
 
const writer = new ID3Writer(songBuffer);
writer.setFrame('TIT2', TextForAud)
      .setFrame('TPE1', [CreaterForAud])
      .setFrame('TALB', TextForAud)
      .setFrame('TYER', 1999)
      .setFrame('APIC', {
          type: 3,
          data: coverBuffer,
          description: 'ɪɴʀʟ-ʙᴏᴛꜱ-ᴏʀɢ'
      });
writer.addTag();
 
const taggedSongBuffer = Buffer.from(writer.arrayBuffer);
var inrlbotsorg = fs.writeFileSync('./inrl.mp3', taggedSongBuffer);
const sendAudio = fs.readFileSync('./inrl.mp3');
client.sendMessage(message.from,  { audio: sendAudio, mimetype: "audio/mp4", fileName: `${text}.mp3`,}, { quoted: message });
} else if(_message == message.quoted.stickerMessage){
let media = await client.downloadAndSaveMediaMessage(_message)
client.sendFile(message.from, media, "", message, {
          asSticker: true,
          author: message.client.pushName,
          packname: text,
          categories: ["😄"],
        });
    }
});
bots.inrl({ pattern: ['audio-menu'], desc: "to convert audio to given cmd",sucReact: "😹",  category: ["all"]}, async (message, client) => {
const ImSg =`╭───────────────╮
│ 1 .ʙᴀss           
│ 2 .ʙʟᴏᴡɴ            
│ 3 .ᴅᴇᴇᴘ                   
│ 4 .ᴇᴀʀʀᴀᴘᴇ           
│ 5 .ғᴀsᴛ                                                                                             
│ 6 .ғᴀᴛ                       
│ 7 .ɴɪɢʜᴛᴄᴏʀᴇ
│ 8.ʀᴇᴠᴇʀsᴇ                
│ 9 .ʀᴏʙᴏᴛ                 
│ 10 .sʟᴏᴡ
│ 11 .sᴍᴏᴏᴛʜ
│ 12 .sǫᴜɪʀʀᴇʟ
╰───────────────╯`
await client.sendMessage(message.from,  { text : ImSg }, { quoted: message });
});
bots.inrl({pattern: ['tts'], desc: "to get text as audio ", sucReact: "💔", category: ['all'], }, (async (message, client) => {
const text = message.client.text;
	    if (!text) return await client.sendMessage( message.from, { text: 'Enter A text'}, { quoted: message });
            var InRL ;
            if (text.includes('#')) {
            var split = text.split('#');
            TEXT = split[0]
            InRL = split[1];
           }
            let 
                LANG = InRL || "en",
                ttsMessage = TEXT,
                SPEED = 1.0
    
            var buffer = await googleTTS.synthesize({
                text: ttsMessage,
                voice: LANG
            });
            await client.sendMessage( message.from, { audio:buffer, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
        }));
bots.inrl({pattern: ['mp3','audio'], desc: "to get video as audio ", sucReact: "💥", category: ['all'], }, (async (message, client) => {
if (!/video/.test(message.client.mime) && !/audio/.test(message.client.mime))return await client.sendMessage( message.from, { text: 'Send/Reply Video/Audio You Want To Use As Audio With Caption '}, { quoted: message });
            if (!message.quoted) return await client.sendMessage( message.from, { text: 'please replay to a video to get audio😛'}, { quoted: message });
            let media = await message.quoted.download()
            let audio = await toAudio(media, 'mp4')
            client.sendMessage(message.from, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : message })
            }));
