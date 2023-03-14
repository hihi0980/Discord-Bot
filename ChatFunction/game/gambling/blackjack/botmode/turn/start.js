const checkCard = require('../../component/checkCard')
const drawCard = require('../../component/drawCard')


const cards = require('../../component/Card_Container')

//開局
module.exports = async function start(message,bot){
    //重新定義array
    cards[message.author.username] = []
    cards[bot.user.username] = []

    //為玩家抽2張牌
    await drawCard(message.author.username,"Card0")
    await drawCard(message.author.username,"Card1")

    //為bot抽2張牌
    await drawCard(bot.user.username,"Card0")
    await drawCard(bot.user.username,"Card1")

    //檢查卡牌是否有錯誤
    const check_playercard = await checkCard(message.author.username)
    const check_botcard = await checkCard(bot.user.username)
    if(!check_playercard || !check_botcard) { return 'error' }

    //繼續遊戲
    return false
}