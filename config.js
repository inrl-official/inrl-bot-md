const toBool = (x) => x == 'true'
const { Sequelize } = require('sequelize')
const { existsSync } = require('fs')
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
module.exports = {
    VERSION: 'V 1.0.0',
    SESSION_ID: process.env.SESSION_ID || 'jsl~JTPqCiUqWyTFyRZyEAAk5HlWOgciMw2X',
    PASSWORD: process.env.PASSWORD || 'irnl-bot~md',
    REACT : process.env.REACT || 'false',
    GROUP_CHAT : process.env.GROUP_CHAT || 'false',
    FREE_TXT : process.env.FREE_TXT || 'inrlbotmd',
    U_STATUS: process.env.U_STATUS || 'false',
    ALIVETXT: process.env.ALIVETXT || 'INRL-BOT-MD',
    ALIVE_DATA : process.env.ALIVE_DATA || "https://i.imgur.com/DyLAuEh.jpg,aliveText,alivebButtenText1,aliveTextButten2",
    READ_CHAT : process.env.READ_CHAT || "false", //values are true and false only if true read all chats
    BOT_INFO : process.env.BOT_INFO || "INRL-BOT-MD,INRL,https://i.imgur.com/DyLAuEh.jpg",
    BGMBOT : process.env.BGMBOT || 'false',
    WORKTYPE: process.env.WORKTYPE || 'privet',
    PM_BLOCK : process.env.PM_BLOCK || "false",
    WELCOME_SET : process.env.WELCOME_SET || "true", //now thi scmd is not creted creating
    EXIT_MSG : process.env.EXIT_MSG || "true", //now this cmd  was not created
    CALL_BLOCK : process.env.CALL_BLOCK || "false",
    ANTI_LINK_ALL : process.env.ANTI_LINK_ALL || "1919219,82822929,8282929,,jid", //now this cmd  creted!use with casesencitivity
    FACK_REMOVE : process.env.FACK_REMOVE || "2222,27372;1919911918282828282.g.us, yourJid", //sorry about thets! This cmd was created but don't work 
    SET_ANTI_LINK : process.env.SET_ANTI_LINK || "instagram.com, youtube, chat.com;100839299210173.g.us, yourJid", //now this cmd creted 
    MENSION: {
        MENSION_AUDIO : process.env.MENSION_AUDIO || "https://i.imgur.com/iUOGcyF.mp4,https://i.imgur.com/e2PKT60.mp4,https://i.imgur.com/5NZDe8m.mp4,https://i.imgur.com/iaHKsGW.mp4, https://i.imgur.com/NGWrUkQ.mp4,https://i.imgur.com/GUtD1hr.mp4, https://i.imgur.com/PBuALN3.mp4, https://i.imgur.com/79YoX98.mp4, https://i.imgur.com/HzIz3ls.mp4, https://i.imgur.com/2jzZauR.mp4, https://i.imgur.com/oKVVwIj.mp4, https://i.imgur.com/AzqHkeV.mp4, https://i.imgur.com/pf1BWXN.mp4, https://i.imgur.com/N2N6S7C.mp4, https://i.imgur.com/IrEdvwL.mp4, https://i.imgur.com/4fdJUoj.mp4, https://i.imgur.com/FaOtaF5.mp4, https://i.imgur.com/wsrdnP8.mp4,https://i.imgur.com/imr3bC8.mp4, https://i.imgur.com/Xgzkbsk.mp4, https://i.imgur.com/0WML13D.mp4, https://i.imgur.com/b491tUX.mp4, https://i.imgur.com/GuAnUuf.mp4, https://i.imgur.com/yVwoqYp.mp4, https://i.imgur.com/WgMgTBP.mp4,https://i.imgur.com/LQBlI1y.mp4,https://i.imgur.com/EQn2BvM.mp4, https://i.imgur.com/SIj26aP.mp4,https://i.imgur.com/IWlTmTE.mp4, https://i.imgur.com/c4E7E1k.mp4, https://i.imgur.com/D5PREWe.mp4,https://i.imgur.com/JL6FWpS.mp4, https://i.imgur.com/rvD8PlZ.mp4, https://i.imgur.com/ChUKdPk.mp4, https://i.imgur.com/z9oQd4N.mp4, https://i.imgur.com/z9oQd4N.mp4, https://i.imgur.com/vkdcGHu.mp4, https://i.imgur.com/vkdcGHu.mp4,https://i.imgur.com/K2QlmTc.mp4, https://i.imgur.com/AeGNKo3.mp4, https://i.imgur.com/Qe5khtL.mp4, https://i.imgur.com/lCZl3Af.mp4, https://i.imgur.com/AsEfT76.mp4, https://i.imgur.com/KraBTPf.mp4, https://i.imgur.com/fbvDI1g.mp4,https://i.imgur.com/uazVUOH.mp4, https://i.imgur.com/YN04ot5.mp4, https://i.imgur.com/YN04ot5.mp4",
        MENSION_IMG : process.env.MENSION_IMG || "https://images.wallpaperscraft.com/image/single/ball_planet_shroud_136916_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/ball_glow_hand_190683_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/ball_hands_glow_166373_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/ball_glow_mask_140903_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/ball_glow_stone_169306_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/ball_glow_reflection_165921_4072x2697.jpg,  https://images.wallpaperscraft.com/image/single/ball_glow_silhouette_149491_1920x2304.jpg,  https://images.wallpaperscraft.com/image/single/ball_glow_line_light_28298_1680x1050.jpg,  https://images.wallpaperscraft.com/image/single/ball_circles_glow_168614_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/ball_circles_neon_137700_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/ball_neon_backlight_147061_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/ball_reflection_neon_168932_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/ball_reflection_hand_184546_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/crystal_ball_ball_hand_142442_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/building_water_minimalism_198457_3145x4718.jpg,  https://images.wallpaperscraft.com/image/single/triangle_inverted_black_white_92770_2560x1600.jpg,  https://images.wallpaperscraft.com/image/single/lamp_electricity_minimalism_128251_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/lamp_electricity_spiral_luminescence_120309_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/lamp_spiral_electricity_light_119929_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/skyscraper_building_architecture_sky_bottom_view_118409_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/skyscraper_bottom_view_building_187222_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/skyscraper_architecture_bottom_view_123571_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/skyscraper_architecture_bottom_view_136419_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/cherries_cherry_berry_122190_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/water_hand_sea_horizon_118181_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/water_hand_stones_148518_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/water_stream_flow_169694_1440x2560.jpg,        https://images.wallpaperscraft.com/image/single/water_horizon_dusk_175987_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/water_moon_dusk_191709_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/water_horizon_sky_164418_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/water_sky_horizon_140454_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/water_horizon_sunset_168843_1440x2560.jpg,  https://images.wallpaperscraft.com/image/single/moon_phases_black_175210_3648x5472.jpg,  https://images.wallpaperscraft.com/image/single/moon_black_sky_191125_2318x2864.jpg,  https://images.wallpaperscraft.com/image/single/stains_paint_mixing_198500_2160x3840.jpg,  https://images.wallpaperscraft.com/image/single/stains_paint_mixing_195514_2160x3840.jpg,  https://images.wallpaperscraft.com/image/single/stains_liquid_paint_191590_2160x3840.jpg,  https://images.wallpaperscraft.com/image/single/stains_liquid_paint_147522_2160x3840.jpg,  https://images.wallpaperscraft.com/image/single/stains_liquid_paint_151928_2160x3840.jpg,  https://images.wallpaperscraft.com/image/single/stains_abstraction_texture_157950_2160x3840.jpg,  https://images.wallpaperscraft.com/image/single/stains_paint_liquid_146393_2160x3840.jpg,  https://images.wallpaperscraft.com/image/single/girl_helmet_cyberpunk_194603_2160x3840.jpg,  https://images.wallpaperscraft.com/image/single/girl_alone_autumn_192003_2160x3840.jpg,  https://images.wallpaperscraft.com/image/single/girl_loneliness_alone_183388_2160x3840.jpg",
        MENSION_TEXT : process.env.MENSION_TEXT || 'inrl-md,edit this and set your data, https://chat.whatsapp.com/CUJuk1xPEpR8av9h7DDGNO'
    },
    LANG : (process.env.LANGUAG || 'EN').toLowerCase(), //values are ml, en only
    OWNER : process.env.OWNER || "919207605650",
    BRANCH: 'master',
    PROCFILE_DATA : process.env.PROCFILE_DATA || "💗 ᴀᴜᴛᴏ ᴍᴀᴛɪᴄ ʙɪᴏ ʙy ɪɴʀʟ-ʙᴏᴛ-ᴍᴅ",
    BAD_WORD_TEXT : process.env.BAD_WORD_TEXT || 'xxx, xnxx;1020020000.g.us, yourJid',
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY || '',
        APP_NAME: process.env.HEROKU_APP_NAME || ''
    },
    BLOCK_CHAT : process.env.BLOCK_CHAT ||[],
    AUTO_CHAT_PM : process.env.AUTO_CHAT_PM || "false",
    AUTO_CHAT_GRP : process.env.AUTO_CHAT_GRP || "false",
    BOT_PRESENCE : process.env.BOT_PRESENCE || "recording",
    IS_PRESENCE : process.env.IS_PRESENCE || "false",
    CHATBOT : process.env.CHATBOT || 'null',
    FOOTER : process.env.FOOTER || "i-clo",
    AUDIO_DATA : process.env.AUDIO_DATA || "inrl, inrl,https://i.imgur.com/DyLAuEh.jpg",
    STICKER_DATA: process.env.STICKER_DATA || "inrl, inrl,https://i.imgur.com/DyLAuEh.jpg",
    INSTAGRAM : process.env.INSTAGRAM || "https://instagram.com/_user_not_define",
    PACKNAME : process.env.PACKNAME || "testing",
    GIT : process.env.GIT || "https://github.com/inrl-official/inrl-bot-md/blob/master/config.js",
    WEB : process.env.WEB || "https://tinyurl.com/ycks3s8p",
    YT : process.env.YT || "https://tinyurl.com/36r3668n",
    CAPTION : process.env.CAPTION || "ibot-teasting",
    SUDO: process.env.SUDO || "3072759464",
    VIDEO : "https://tinyurl.com/3x38ajmn",
    WAGRP : process.env.WAGRP || 'https://tinyurl.com/f5wh55mk',
    };
