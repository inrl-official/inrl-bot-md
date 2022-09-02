const fs = require("fs")
global.user = require("./lib/database/data/user")
global.group = require("./lib/database/data/group")
global._user = JSON.parse(fs.readFileSync("./lib/database/data/user.json"))
global._group = JSON.parse(fs.readFileSync("./lib/database/data/group.json"))
global.owner = ["9044102961"];
global.mess = (type, m) => {
    let msg = { wait: 'Wait, in progress', owner: 'nothing more!', premium: 'primum member!', group: 'only at grp!', private: 'only at privet chat!', admin: 'Perintah ini hanya dapat digunakan oleh admin group!', botAdmin: 'Bot bukan admin, tidak dapat mengakses fitur tersebut', bot: 'desk for bot', dead: 'fiture is dead😄😂', media: 'Reply media', error: "No Results Found" }[type]
    if (msg) return m.reply(msg, m.from, { quoted: m })
}
