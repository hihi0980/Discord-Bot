//Specific reply
const separate = require('./specWord/感情相關/separate')

const buslightyear = require('./specWord/巴其斤/buslightyear')

const chiyoumother = require('./specWord/智你老母/chiyoumother')

const mikeneko = require('./specWord/Vtuber/mikeneko')
const aqua = require('./specWord/Vtuber/aqua')
const blackaqua = require('./specWord/Vtuber/blackaqua')

const evil = require('./specWord/日常對話/evil')
const shutup = require('./specWord/日常對話/shutup')
const fuckoff = require('./specWord/日常對話/fuckoff')
const fix = require('./specWord/日常對話/fix')
const joke = require('./specWord/日常對話/joke')
const who = require('./specWord/日常對話/who')
const laugh = require('./specWord/日常對話/laugh')
const sleep = require('./specWord/日常對話/sleep')
const dowhat = require('./specWord/日常對話/dowhat')
const idiot = require('./specWord/日常對話/idiot')
const fuckyourmother = require('./specWord/日常對話/fuckyourmother')
const strongboom = require('./specWord/日常對話/strongboom')
const where = require('./specWord/日常對話/where')

const bot = require('./specWord/聊天機器人/bot')
const botname = require('./specWord/聊天機器人/botname')

const fuckChina = require('./specWord/支那/fuckChina')
const nmsl = require('./specWord/支那/nmsl')

const USAO = require('./specWord/TANOC/USAO')

const comrade = require('./specWord/China/comrade')
const loveChina = require('./specWord/China/loveChina')

const yarimasune = require('./specWord/淫夢/yarimasune')

const AV = require('./specWord/咸野/AV')
const hon = require('./specWord/咸野/hon')

const whylovenohair = require('./specWord/點解女仔鐘意光頭/whylovenohair')

module.exports = async function specReply(message){
    //分手
    const separates = await separate(message)
    if(separates) { return separates }

    //智乃
    const chiyoumothers = await chiyoumother(message)
    if(chiyoumothers) { return chiyoumothers }

    //惡
    const evils = await evil(message)
    if(evils) { return evils }

    //三毛猫
    const mikenekos = await mikeneko(message)
    if(mikenekos) { return mikenekos }

    //收聲
    const shutups = await shutup(message)
    if(shutups) { return shutups }

    //死開
    const fuckoffs = await fuckoff(message)
    if(fuckoffs) { return fuckoffs }

    //愛中國
    const loveChinas = await loveChina(message)
    if(loveChinas) { return loveChinas }

    //bot
    const bots = await bot(message)
    if(bots) { return bots }

    //屌中國
    const fuckChinas = await fuckChina(message)
    if(fuckChinas) { return fuckChinas }

    //USAO
    const USAOs = await USAO(message)
    if(USAOs) { return USAOs }

    //修理/整
    const fixs = await fix(message)
    if(fixs) { return fixs }

    //笑話
    const jokes = await joke(message)
    if(jokes) { return jokes }

    //邊位
    const whos = await who(message)
    if(whos) { return whos }

    //笑死
    const laughs = await laugh(message)
    if(laughs) { return laughs }

    //nmsl
    const nmsls = await nmsl(message)
    if(nmsls) { return nmsls }

    //訓
    const sleeps = await sleep(message)
    if(sleeps) { return sleeps }

    //同志
    const comrades = await comrade(message)
    if(comrades) { return comrades }

    //淫夢
    const yarimasunes = await yarimasune(message)
    if(yarimasunes) { return yarimasunes }

    //AV
    const AVs = await AV(message)
    if(AVs) { return AVs }

    //hon
    const hons = await hon(message)
    if(hons) { return hons }

    //做咩
    const dowhats = await dowhat(message)
    if(dowhats) { return dowhats }

    //ON9
    const idiots = await idiot(message)
    if(idiots) { return idiots }
    
    //bot名
    const botnames = await botname(message)
    if(botnames) { return botnames }

    //湊hi
    const aquas = await aqua(message)
    if(aquas) { return aquas }

    //夸黑
    const blackaquas = await blackaqua(message)
    if(blackaquas) { return blackaquas }

    //buslightyear
    const buslightyears = await buslightyear(message)
    if(buslightyears) { return buslightyears }

    //屌老母
    const fuckyourmothers = await fuckyourmother(message)
    if(fuckyourmothers) { return fuckyourmothers }

    //勁爆
    const strongbooms = await strongboom(message)
    if(strongbooms) { return strongbooms }

    //邊到
    const wheres = await where(message)
    if(wheres) { return wheres }

    //點解女仔鐘意光頭
    const whylovenohairs = await whylovenohair(message)
    if(whylovenohairs) { return whylovenohairs }

    return false
}