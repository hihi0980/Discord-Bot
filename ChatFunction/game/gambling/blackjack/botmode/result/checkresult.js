const getTotalPoint = require('../../component/getTotalPoint')
const getYourCard = require('../../component/getYourCard')
const showPoint = require('../../component/showPoint')
const cards = require('../../component/Card_Container')
const FiveAce = require('../../component/FiveAce')

//檢查結果
module.exports = async function checkresult(message,bot,sc_num){
    //bot卡牌數據
    const bot_total_point = await getTotalPoint(bot.user.username)
    const bot_card = await getYourCard(bot.user.username)
    const bot_show_point = await showPoint(bot.user.username)

    //玩家卡牌數據
    const player_total_point = await getTotalPoint(message.author.username)
    const player_card = await getYourCard(message.author.username)
    const player_show_point = await showPoint(message.author.username)

    //係唔__係5條煙呀
    const FiveAces = await FiveAce(message.author.username)

    if(FiveAces){
        return [player_total_point,player_card,player_show_point,bot_total_point,bot_card,bot_show_point,`\`CLS，條友開掛！5條Ace！+${sc_num} Social Credits!\``,1]
    }

    //玩家廿一點 == 莊家廿一點數
    if(player_total_point == bot_total_point && cards[message.author.username].length == 2 && cards[bot.user.username].length == 2){
        return [player_total_point,player_card,player_show_point,bot_total_point,bot_card,bot_show_point,'\`打和啦Super\`']
    }

    //玩家廿一點
    if(player_total_point == 21 && cards[message.author.username].length == 2) { 
        return [player_total_point,player_card,player_show_point,bot_total_point,bot_card,bot_show_point,`\`廿一點！ +${sc_num} Social Credits!\``,1] 
    }

    //莊家廿一點
    if(bot_total_point == 21 && cards[bot.user.username].length == 2) { 
        return [player_total_point,player_card,player_show_point,bot_total_point,bot_card,bot_show_point,`\`bot廿一點！ -${sc_num} Social Credits!\``,0] 
    }

    //玩家點數 == 莊家點數
    if(player_total_point == bot_total_point){
        return [player_total_point,player_card,player_show_point,bot_total_point,bot_card,bot_show_point,`\`打和啦Super\``]
    }

    //莊家爆煲
    if(bot_total_point > 21) { 
        return [player_total_point,player_card,player_show_point,bot_total_point,bot_card,bot_show_point,`\`bot爆煲，+${sc_num}社會評分!\``,1]
    }

    //莊家點數 >>> 玩家點數
    if(bot_total_point > player_total_point){
        return [player_total_point,player_card,player_show_point,bot_total_point,bot_card,bot_show_point,`\`你細過莊家，-${sc_num}社會評分!\``,0]
    }

    //玩家點數 >>> 莊家點數
    if(player_total_point > bot_total_point){
        return [player_total_point,player_card,player_show_point,bot_total_point,bot_card,bot_show_point,`\`你大過莊家，+${sc_num}社會評分!\``,1]
    }

    return '中能左BUG , 已知會 <@366474041307037697>'
}