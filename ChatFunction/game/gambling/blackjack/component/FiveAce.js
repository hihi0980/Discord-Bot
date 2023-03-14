const cards = require('./Card_Container')

//計點數
module.exports = async function FiveAce(player){
    for(let i=0;i<cards[player].length;i++){
        if(cards[player][i]["card"].getNum() !== 1 ) { return false }
    }

    return true
}