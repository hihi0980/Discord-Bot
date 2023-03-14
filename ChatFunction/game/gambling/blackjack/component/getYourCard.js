const cards = require('./Card_Container')

//顯示卡牌
module.exports = async function getYourCard(player){
    let player_card = ''
    for(let i=0;i<cards[player].length;i++){
        player_card += `${cards[player][i]["card"].getCard()}|`
    }
    return player_card
}