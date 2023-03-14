const cards = require('./Card_Container')

//104張牌 > 多過21 player就要用
module.exports = async function getCardCount(){
    let cardnum = 0
    for (let player in cards) {
        for(let i=0;i<cards[player].length;i++){
            cardnum++
        }
    }

    return cardnum
}