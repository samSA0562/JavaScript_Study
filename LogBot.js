if (process.argv.length < 3) { console.log('');/* return; */}
const key = process.argv[2];

const moment = require('moment');
const fs = require('fs');

const TOKEN = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙ一ㄨㄩㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦ０１２３４５６７８９ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ'
let writeLogFile = true;
let LogDirPath = './LOG/';
let LogName = `${moment().year()-1911}${moment().format('MMDD')}.log`;

let randomPrintLogIndex=0; let randomPrintLogLength=Math.floor(Math.random()*10); let timeGap = 0
//隨機決定要傳送幾筆資料、隨機決定字串長度並隨機塞值、隨機決定字串間隔時間
for (randomPrintLogIndex;randomPrintLogIndex<randomPrintLogLength;randomPrintLogIndex++) {
  let randomStringIndex=0; let randomStringLength=Math.floor(Math.random()*10)+5; let strLog = '';
  for (randomStringIndex;randomStringIndex<randomStringLength;randomStringIndex++)
    strLog+=TOKEN.charAt(Math.floor(Math.random()*TOKEN.length));
  timeGap += Math.floor(Math.random()*5);
  setTimeout(function(){PrintLog(strLog);},timeGap*1000);
}

function PrintLog(logMsg) {
//(16:12:44 253) logMsg
  let timeMark = `(${moment().format('HH:mm:ss SSS')})`;
  let msg = timeMark+' '+logMsg+'\r\n';

  writeLogFile && AppendLogFile(msg);
}
function AppendLogFile(logMsg) {
  try {
    fs.accessSync(LogDirPath); 
  } catch(e) {
    fs.mkdirSync(LogDirPath);
  } finally {
    fs.appendFile(LogDirPath+LogName, logMsg, (err) => { err && console.log(err); });
  }
}