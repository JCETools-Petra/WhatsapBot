const ascii = `
WTS - Bot v1.1
`

    const NullMe = {
            key: {
                remoteJid: 'status@broadcast',
                fromMe: true,
                participant: '0@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "WTS - Bot v1.1",
                        "format": "DEFAULT",
                        "caption": " "
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"Raldz Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"raldzzxyz@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(10)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }
    
const chalk = require("chalk")

const Connecting = async ({
  m,
  update,
  conn,
  Owner,
  Boom,
  DisconnectReason,
  sleep,
  color,
  clientstart,
}) => {   
     const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            const reason = new Boom(lastDisconnect?.error)?.output.statusCode;
            console.log(color(lastDisconnect.error, 'deeppink'));
            if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
                process.exit();
            } else if (reason === DisconnectReason.badSession) {
                console.log(chalk.red.bold(`bad session file, please delete session and scan again`));
                process.exit();
            } else if (reason === DisconnectReason.connectionClosed) {
                console.log(chalk.red.bold('connection closed, reconnecting...'));
                process.exit();
            } else if (reason === DisconnectReason.connectionLost) {
                console.log(chalk.red.bold('connection lost, trying to reconnect'));
                process.exit();
            } else if (reason === DisconnectReason.connectionReplaced) {
                console.log(chalk.red.bold('connection replaced, another new session opened, please close current session first'));
                conn.logout();
            } else if (reason === DisconnectReason.loggedOut) {
                console.log(chalk.red.bold(`device logged out, please scan again and run.`));
                conn.logout();
            } else if (reason === DisconnectReason.restartRequired) {
                console.log(chalk.yellow.bold('restart required,restarting...'));
                await clientstart();
            } else if (reason === DisconnectReason.timedOut) {
                console.log(chalk.yellow.bold('connection timedOut, reconnecting...'));
                clientstart();
            }
        } else if (connection === "connecting") {
            console.log(chalk.blue.bold('connecting . . .'));
        } else if (connection === "open") {
            console.log(chalk.yellow.bold(`${ascii}`));
            conn.sendMessage("6285157781148@s.whatsapp.net", { text: "*BOT - WTS v1.1 [ ONLINE ]*" }, { quoted: NullMe });
            conn.newsletterFollow('@newsletter');
            conn.newsletterFollow('@newsletter');
            console.log(chalk.blue.bold('💫 BOT SUCCESSFULLY CONECTED 💫'));
        }}
 
 module.exports = { Connecting };