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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0doK0dCeU42WjZVSHM3U3NlRDNSOTA1NWJhMW85MVp3MGVWV0hwQ0pIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWHo2RE1xOU9hLzA2T2NtVFRCTERlZjdNeWR3b29nTFNEUTkrZlIwNFJsWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFR3B3OElLVXNFMktJTkZKU0pldE1KOGhpWXJ3OTJLeGtESFRtYjJTb2xjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSVc3T0RsNFJCQ3oxVGVTRzc5aWVYTzFmREhjc3pGaCtvV042OTY3UGc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNPQVNKL29Sd3dOcURBTWlRS3UveGU3NTJzSUJlaWFMNzJ4d25GQ0ZWSEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InYrZi9pRmQxQ2Zaa0lyVThwNHdFdkQ2M1MrU3YxVzN3N0w4YlZieFVZVmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUpVQlZBRzZzQXhGQURnN0EzTkN2ZHNacnpTbGdrY2d4NW9zSXVUSHNHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicnVBU3RQSWg4R25CT2RwZDB0b0thU3RtbnB0VzE0VmRlL0VjR2RFTE53ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im0xRmdSSVNBUk1FK1ZPQURZMmpTd25wZ09NWnVQa2NzOU95ZWJtM1luSVBMd3ZyOEV1eU9BeGZML2pmekt5NnZBYnFrR29qSUxDMTdncitwYUhQWkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg0LCJhZHZTZWNyZXRLZXkiOiJQMlFHWEVzTGYxa0lvVnNLbEJoY3V6aUZuQld5VXNFNGZqUU9uaUh5T3g0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjU3MzE2MDUxMTUxMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzM0YzNjZENUNEQzdCQzI2MTczQTQ5RkZFMzNGRTJDMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM3MDkzMjIxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI1NzMxNjA1MTE1MTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiREM2MkM0OTdBOThGRjRENUYwMTFBODVCODc4MUYzQjIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNzA5MzIyMX0seyJrZXkiOnsicmVtb3RlSmlkIjoiNTczMTYwNTExNTEwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjcxQjhGMDY1RDUzOUM2NjI4MjUwMzU4MjlBNTFDMURBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzcwOTMyMjR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjU3MzE2MDUxMTUxMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyQzk5MDg4OUE2RUIxRkQyRDAxRTIwRkZEOERBQTAwRSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM3MDkzMjI0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRdFM0cDc4Q1JqaWk1UmttbHRqQ0dRIiwicGhvbmVJZCI6ImRkNmJmODFlLWMyZWMtNDdjOS1hNmRjLTY3MDdkMmJhZGUxYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuSWQrQUdvUm1FMlVJenFmTmhFTHBMUGRnS2M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXI2SmMra1BmUkxxeUVDS29QV0V4alhKNkFrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhaMlA5TEhRIiwibWUiOnsiaWQiOiI1NzMxNjA1MTE1MTA6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJva2kifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BhVHN0d0JFTmJncDd3R0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikd3RUlJdm1CTmxydXhxdU04R1ozc0tHN3VyeHZrbzViOERUa3hzRkZVa3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imx0VDFsR0pWZTRlRCtoaFFOUjBlNS9ENjNmUDB1cmRYckNYWWpvVjBHN2ttZHdPOFZFL1Z3c1BHYlFNWjFTemg4R2RwM1NXKzJNZjlFemJQMENRVURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1Sjh5VlJuWmN6YTE1NCs2Kzd2QzNNZDBUaG5Gc1FsWW55UlVxUElzdThORmJJMGFSMkl0dkIyNC9keEhtU3VCcVhScEN4V2ZjRlZFMW1ySU1BYk9BZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjU3MzE2MDUxMTUxMDo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJzQkNDTDVnVFphN3NhcmpQQm1kN0NodTdxOGI1S09XL0EwNU1iQlJWSk0ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzcwOTMyMTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTlJFIn0=" // session id here
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
