//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "caseyrhodes46@gmail.com";
global.location = "Eiyenkorin, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/caseyweb/QUEEN-CHARITY";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/6xuv7u.jpg";
global.devs = "254112192119";
global.sudo = process.env.SUDO || "254112192119";
global.owner = process.env.OWNER_NUMBER || "254112192119";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kwe3i5.jpg,https://files.catbox.moe/cyvqxl.jpg,https://files.catbox.moe/ex03qs.jpg,https://files.catbox.moe/zrxmeu.jpg,https://files.catbox.moe/onkqum.jpg,https://files.catbox.moe/cgz610.jpg,https://files.catbox.moe/ig9w4q.jpg,https://files.catbox.moe/dd93hl.jpg,https://files.catbox.moe/nwvoq3.jpg,https://files.catbox.moe/omgszj.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rhodespair-1303049c463e.herokuapp.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibURTVXVGTkpuc0FYSkVmWW1CNEs2NEMwK1QzREc3dHVpaG1rU2dDOHdHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0tNSTlxUGVzaFhySmtoekprTU82SkFJb21JS2h0R3pQK3hGSWVPUzVHWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTThHaFR5cHlNKzBIMGpzLzNIbGcvOWVWR2RFZGlhcmdPNzNLR1dDejBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCTGJFV1F0Wmt4ZGYwSHVoM1MxM1d5eXY4TEg3bTFoMjFxWEtyOVA0a1Y0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklCeDNBVlUvT1JhU011WnczdkVkd3pNWVpBdGxpMXkrKy9Wdm14ODZoa2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQwTno2YXppREU3Qkk2RTBZWHV5LzExZlJYeW9sL3B2cENzN1dBb3RHbFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU14TGNEcURLSC9UOVBwV1NjUXJCWERldXZnZTNaS1FPWTdtZVJCOTIydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWHBjNHdlb2JYZVoyaTB2QkJjeGM5SlorZ0xDdHpKa3ViSWIybDlKQWNEUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVNWU9IL3pOMk9GaTFQNnFOcld3NDRFbDd3ZjA2cUFzUzMyT01NQndzbmdiZkpIMEh4a2lqT0I3R3JXejVNTnd2VnpNZFgzNlJwNjk5eXNLQW9CaGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoiM0VGY0JMVGN0VTkzb2pBSkFjc244N1lGMWhvaGFPajlnbUJTdlFYNWpRZz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI1NzMxNjA1MTE1MTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDNBMkExQjk3MkQzODE0QjM1RTMwRkJFQkQzOUFEMzgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNzAzNjg2Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiNTczMTYwNTExNTEwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkRFNENCOUQ0NkFCM0JDRkRFRUE4QUIxOUEzMTA4M0IwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzcwMzY4NjN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjU3MzE2MDUxMTUxMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzRjAzRDIwNUZFRTU0NTM5QkExMERFMzZBRDIwMEM5NSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM3MDM2ODY1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI1NzMxNjA1MTE1MTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMUJGM0QxRTNDMUFEMkE5NTQ5NjY4MzY4ODQ5MDA3MDAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNzAzNjg2NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWWhKbS1sNzZReHFQclEzWFltSVRoZyIsInBob25lSWQiOiI4MTUyNjAwOS01YjE5LTQ1ZTItOWM2YS0zODdiNmVjYmI3NTUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2thMmxuSk9KMHZTdFBONk0ydDEwdlV0NTFBPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRpdUVtOGNPMW1GU05GbkFZOU42ZHdhNkx3Yz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJZWTlGR1MxRSIsIm1lIjp7ImlkIjoiNTczMTYwNTExNTEwOjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoib2tpIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQYVRzdHdCRUxHb3BMd0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHd0VJSXZtQk5scnV4cXVNOEdaM3NLRzd1cnh2a281YjhEVGt4c0ZGVWt3PSIsImFjY291bnRTaWduYXR1cmUiOiJYVDZ1NHVkUDczSnVFbkN5Q0N2dW5yLzliWjRQOTlFYzM5dVhnc1RlMHhWdVJtUFhCVDhRb01aQitEbDNsdmJmUnBPQXdJTy9vbkNSeWJDNEtaUGlEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicjl6S3htZ0F6MkNiN1Z5UWg2WW5Kb1hORFhaa0tqN0FNRVJhckRvejFEcXFPTlVyQXdHOGJJS2ZnWWxDdURWWkliUG9RQW84RGNxMHp4Nk96blpJaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1NzMxNjA1MTE1MTA6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSc0JDQ0w1Z1RaYTdzYXJqUEJtZDdDaHU3cThiNUtPVy9BMDVNYkJSVkpNIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM3MDM2ODYxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5SRSJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_CHARITY™`",
  author: process.env.PACK_AUTHER || "𒀱ꪳ𓊈𒆜𓂀ᴸᴼᴿᴰℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊𓂀𒆜𓊉 𒀱",
  packname: process.env.PACK_NAME || "𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒 𝐓𝐄𝐂𝐇",
  botname: process.env.BOT_NAME || "`𝗤𝗨𝗘𝗘𝗡_𝗖𝗛𝗔𝗥𝗜𝗧𝗬`",
  ownername: process.env.OWNER_NAME || "𒀱ꪳ𓊈𒆜𓂀ᴸᴼᴿᴰℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊𓂀𒆜𓊉 𒀱",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
