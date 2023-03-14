const checkresult = require('./result/checkresult')
const botturn = require('./turn/botturn')
const playerturn = require('./turn/playerturn')
const start = require('./turn/start')

const players = require('../../player')

//開頭
const reminder = require('../text/reminder')

//已出現的卡
const cards = require('../component/Card_Container')

module.exports = async function blackjack(message,bot,sc_num){
    players.push(message.author.id)
    //開局
    const start_result = await start(message,bot)

    //卡牌出現錯誤
    if(start_result === 'error') { 
        await clear(message,bot)
        message.channel.send('開局卡牌出現錯誤，請重新開始')
        return 
    }
    
    //玩家回合
    const player_result = await playerturn(message,bot,sc_num)

    switch(player_result){
        //卡牌出現錯誤
        case 'error' :
            await clear(message,bot)
            await message.channel.send('\`\`\`玩家卡牌出現錯誤，請重新開始\`\`\`')
            return 
        //卡牌已達上限(5張)
        case '5Card' :
            await message.channel.send("\`你的卡牌已達5張，直接跳到bot的回合\`")
            break
        //pass
        case false :
            break
        //爆煲
        default : 
            await clear(message,bot)
            await reminder(message,bot,player_result)
            return player_result[7]
    }

    //bot回合
    const bot_result = await botturn(bot,sc_num)

    //卡牌出現錯誤
    if(bot_result === 'error'){
        await clear(message,bot)
        await message.channel.send('\`\`\`bot卡牌出現錯誤，請重新開始\`\`\`')
        return
    }

    //結算
    const checkresults = await checkresult(message,bot,sc_num)
    if(checkresults) { 
        await clear(message,bot)
        await reminder(message,bot,checkresults)
        return checkresults[7]
    }

    //無野回傳
    return false
}

async function clear(message,bot){
    //完結時清除array
    cards[message.author.username] = []
    cards[bot.user.username] = []

    //移除玩家遊戲進行中狀態
    const playerIndex = players.indexOf(message.author.id)
    players.splice(playerIndex, 1);
}