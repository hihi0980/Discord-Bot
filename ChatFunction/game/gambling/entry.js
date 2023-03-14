const blackjack = require('./blackjack/blackjack')
const moment = require('moment')
const players = require('./player')
const CheckSc = require('../../../Social_Credit_Service/CRUD/Read/CheckSc')

module.exports = async function entry(message,bot){
    if(message.content.startsWith('bj21 ')) { 
        //檢查玩家是否有進行中的活動
        const playerActions = await playerAction(message)
        if(!playerActions) { return true }

        //取得玩家的賭博額
        const sc_num = parseInt(message.content.slice(5))

        //檢查是否合法/已註冊用戶
        const validPlayer = await CheckUser(message,sc_num)
        if(!validPlayer) { return true}

        //進行遊戲
        await blackjack(message,bot,sc_num)
        console.log(`${moment().format('MMMM Do YYYY, h:mm:ss a')} : ${message.author.username}(id:${message.author.id})遊玩了廿一點`);

        return true
    }

    return false
}

//檢查玩家活動
async function playerAction(message){
    //-1 >>> 無呢個user id , 非-1 >>> 有呢個user id
    if(players.indexOf(message.author.id) != -1) { 
        message.reply('你尚有一場遊戲進行中') 
        return false
    }
    
    return true
}

//檢查用戶
async function CheckUser(message,sc_num){
    const User = await CheckSc(message.author.id,sc_num)
    if(!User) { 
        await message.reply("你並沒有申請成為系統用戶\n請輸入指令 : \`scs start\`以成為新用戶");
        return false 
    }

    if(!Number.isSafeInteger(sc_num) || sc_num <= 0){ 
        await message.reply('請輸入 : bj21 \`社會信用評分數量\`')
        return false
    }

    if(User === 'noenough') {
        await message.reply('你的社會信用評分不足！')
        return false
    }

    return true
}