const checkCard = require('../../component/checkCard')
const getTotalPoint = require('../../component/getTotalPoint')
const drawCard = require('../../component/drawCard')

const cards = require('../../component/Card_Container')

//bot回合
module.exports = async function botturn(bot){
    //檢查卡牌是否有錯誤
    const check_botcard = await checkCard(bot.user.username)
    if(!check_botcard) { 
        return 'error'
    }

    //bot卡牌數據
    const bot_total_point = await getTotalPoint(bot.user.username)
    //大於等於17點 , 回傳
    if(bot_total_point >= 17){ return }

    //卡牌數量為5或以上;
    if(cards[bot.user.username].length >= 5) { return }

    const card_name = "Card" + cards[bot.user.username].length
    await drawCard(bot.user.username,card_name)
    return await botturn(bot)
}