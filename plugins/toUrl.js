const { inrl, fetchJson, sendUrl, tinyUrl, webSs, pdfGen, BufferToFile, AudioMetaData  } = require('../lib')
const Config = require('../config');
const fs = require('fs');
const { readFile, writeFile } = require('fs/promises')
inrl(
	{
		pattern: ['url'],
       desc: 'to convert image/sticker/video/audio to url',
       sucReact: "⛰️",
       category: ["all"]
    },
	   async (message, client) => {
await sendUrl(message, client);
    }
);
 inrl({pattern: ['tinyurl'], desc: "to convert url as small", sucReact: "😛", category: ['all'],},   async (message, client) => {

           await tinyUrl(message, client);
});
inrl({ pattern: ['webss'], desc: "to get web screenshot",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {

        await webSs(message, client);
});

inrl({ pattern: ['pdf'], desc: "to get pdf of a webpage",sucReact: "⚒️",  category: ["all"],}, (async (message, client) => {
     await pdfGen(message, client);
}))

inrl({ pattern: ['take'], desc: "to change aduio metadata as image/title/description",sucReact: "⚒️",  category: ["all"]}, async (message, client, match) => {
if(message.quoted.stickerMessage){
let pack, auth;
if(match.includes(',')){
let i = match.split(',');
pack = i[0] ? i[0] : Config.STICKER_DATA.split(',')[0];
auth = i[1] ? i[1] : Config.STICKER_DATA.split(',')[1];
} else {
pack = match || Config.STICKER_DATA.split(',')[0];
auth = Config.STICKER_DATA.split(',')[1];
}
let media = await message.quoted.download();
client.sendFile(message.from, media, "", message, {
          asSticker: true,
          author: auth,
          packname: pack,
          categories: ["😄"],
        });
}else if(message.quoted.audioMessage){
let _message = message.quoted.audioMessage
let media = await client.downloadAndSaveMediaMessage(_message)
let text = message.client.text;
if(text.includes(' ')){ text = text.trim() }
let img = Config.AUDIO_DATA.split(',')[2];
if(img.includes(' ')){ img = img.trim() }
img = text.split(',')[2] ? text.split(',')[2] : img;
let imgForaUdio = await BufferToFile(img,'./media/imagForAudio.jpg');
    await AudioMetaData(imgForaUdio, media, message, client);
    return await fs.unlinkSync(imgForaUdio)
  }
})
inrl({pattern: ['emojimix'], desc: "two emojis to single sticker",sucReact: "🤌",  category: ["all"]}, async (message, client) => {
           const text = message.client.text;
	    if (!text) return message.send('send to emojis \n\n _ex_:❣️+🥵');
let emoji1,emoji2;
if (text.includes('+')) {
         var split = text.split('+');
         emoji1 = split[0];
         emoji2 = split[1];
        }
let md = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of md.results) {
	        let encmedia = await client.sendImageAsSticker(message.from, res.url, message, { packname: Config.PACKNAME, author: Config.FOOTER, categories: res.tags })
		await fs.unlinkSync(encmedia)
		}
})
