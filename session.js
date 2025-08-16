//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID || "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0hWNTBpNWQwMlE5OGFjbndETXE0SnkrZUxGL01PZVBYaUhMUjI1cmhrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3JkaU1HQU83WnM3UzVKNWNvRzJUWXFaWk1TWVFoNjhJMXBpNnNVNi9EYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TzF6UGxJdlZoVFVCQXV1aVhZK2hFN3dxejhzT2s3Q0F1TWUrek5yOGt3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhaWpqbVJWbGdMdGNhUGUxOVVnSTdmaTVjck5mTGQwZW1rMGVoTGU5VDBnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitEbEE2U1hnQ0VVeld6RXN3cFoxaWZ0cWZYK29pVDYxdnZhUzhCR0gwblU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxWTzBSeE1SL2o0UWcyT04rR2thVEM5dGhsLy8zWWJCa0xRNk15NlBFVnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUYvMDZ5YlhPZHQyRy9CWmMxdFpSZ1FYOEpHTnZYbEw0UG90aGFGSzYwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0lSaS9JOGU3eUlTcHBtUTRDSlZoekk0MC8xMnBMRk82eWMzV0VxM3pSRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVveGNyYWtkb0dXNnM3T3Nqcng4ZEhKZzhablZwSnVDLzVmaFRFN3ZPcFZyb2hSd2hqUkhHNmhZa2FVb29HWXZqYnA4b3I5cGVGR0dIS0ozeWNMZGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM2LCJhZHZTZWNyZXRLZXkiOiJQaWtZNGNHWmo4MEsvOFZ4cFAwY29XQ0d2SVd1M2FpV1BnRlp5S0doSjJFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg0NTA0NTc5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQyOTYyQzNBMzMyRTU5MTEzMERBNzkzM0U5NjFBNjVBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUzMzUzMDZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg0NTA0NTc5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkRFRjQwQjVFRTI2OTBCRDNGOTE5OTJGQkMwMDI3QUMwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUzMzUzMDd9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg0NTA0NTc5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjlCODgyMTQwOTkzQzU0MTRDMjlCQ0JDMzEzQTEzRkJCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUzMzUzMDd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjN2VnV3S3EwVFBlSGNVVkw4QmpOMWciLCJwaG9uZUlkIjoiNjQ3ZWZhMzQtOWE4OC00NmEwLWE5ZTEtNWQxMDAzYTIwNDBjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InorL2NhNHMwcFNTbGpFa0hNT3JzTzlSeVlXcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaemtMMUMyN25vVkZlNHo0OGxVc3dqVGt6cGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRTU3UTM3VzkiLCJtZSI6eyJpZCI6Ijk0Nzg0NTA0NTc5OjJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNDY4MzMzMzg3OTQwNTY6MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04vMmlvTUZFUHVVZ2NVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkEvcG9HVnNEYmIvV0cvMVQ1bEJ4blMva1lrWms3eDJ6YjFLRHo5ckoyQXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImNrSXFzUkNOMGFuK2U3OXZsN2tMbDJDelNUY3pidFlnUGRVM0xCNzEvOHZUeUpMMW1pRnFpWGpxRXMyeHpuSkg5WVdCTzFZUDZQMlQvc21TbGFjYkRRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJTMC81a0lkZGowVFV3L0tnU2NXVmRuQWhjVEMyU1FXSUhraEZXa1R0Y1cvNjJpQUFMVzNRLzBDUHFnb29DQnNSNklidG9oUEtoWWE2elZiN1lRdFlqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg0NTA0NTc5OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUVA2YUJsYkEyMi8xaHY5VStaUWNaMHY1R0pHWk84ZHMyOVNnOC9heWRnTSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVUUF4QUEifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1MzM1MzA0LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94784504579",
  PASSWORD: 
    process.env.PASSWORD || "@Senura123",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94784504579", "94769714218"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
