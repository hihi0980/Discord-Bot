const cards = require('./Card_Container')

//查閱卡牌是否錯誤
module.exports = async function checkCard(player){
    for(let i=0;i<cards[player].length;i++){
        if(!cards[player][i]["card"].getCard()) { return false }
    }
    
    return true
}