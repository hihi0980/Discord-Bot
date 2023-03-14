const checkCard = require('../../component/checkCard')
const getTotalPoint = require('../../component/getTotalPoint')
const getYourCard = require('../../component/getYourCard')
const showPoint = require('../../component/showPoint')
const drawCard = require('../../component/drawCard')
const getBankerCard = require('../../component/getBankerCard')
const getBankerPoint = require('../../component/getBankerPoint')

const cards = require('../../component/Card_Container')

//30,000 毫秒
const time = 30000

//回應
const answer = ['draw','pass']

//開頭
const reminder = require('../../text/reminder')

//玩家回合
module.exports = async function playerdrawpass(message,bot,sc_num){ 
    while(true){
        //檢查卡牌是否有錯誤
        const check_playercard = await checkCard(message.author.username)
        if(!check_playercard) { return 'error' }
        
        //玩家卡牌數據
        const player_total_point = await getTotalPoint(message.author.username)
        const player_card = await getYourCard(message.author.username)
        const player_show_point = await showPoint(message.author.username)

        //bot卡牌數據
        const bot_card = await getBankerCard(bot.user.username)
        const bot_total_point = await getTotalPoint(bot.user.username)
        const bot_show_point = await getBankerPoint(bot.user.username)

        //已沒有卡牌可抽
        // if(cardCount >= 52) {
        //     // await message.channel.send(reminder + player_card + player_show_point + bot_card + '\n\`BOOM,你已爆煲,-666社會評分\`')
        //     return true
        // }

        //大於21點 爆煲
        if(player_total_point > 21){
            return [player_total_point,player_card,player_show_point,bot_total_point,bot_card,bot_show_point,`\`BOOM,你已爆煲,-${sc_num}社會評分\``,0]
        }

        //卡牌數量為5或以上;
        if(cards[message.author.username].length >= 5) { return '5Card' }

        //篩選回應  只能是draw/stop 才會觸發event
        const filter = response => {
            return answer.some(ans => ans.toLowerCase() === response.content.toLowerCase()) && response.author.id === message.author.id;
        }

        await reminder(message,bot,[player_total_point,player_card,player_show_point,bot_total_point,bot_card,bot_show_point])
        
        const collected = await message.channel.awaitMessages({ filter, max: 1, time: time, errors: ['time'] })
            .catch(collected => {
                message.channel.send('已逾時，請重新開始');
                return
        });

        if(!collected) { return }

        message = collected.first()

        //stop >>> 到下一個
        if(message.content.toLowerCase() == 'pass') { return }

        //抽牌 , 回傳function繼續問玩家
        const card_name = "Card" + cards[message.author.username].length
        await drawCard(message.author.username,card_name)
    }
}