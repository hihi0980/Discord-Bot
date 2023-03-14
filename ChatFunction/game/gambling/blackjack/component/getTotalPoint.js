const cards = require('./Card_Container')

//計點數
module.exports = async function getTotalPoint(player){
    let player_total_point = 0
    let Ace_Num = 0
    for(let i=0;i<cards[player].length;i++){
        player_total_point += cards[player][i]["card"].getPoint() 
        if(cards[player][i]["card"].getNum() == 1 ) { Ace_Num++ }
    }

    for(let k=0;k<Ace_Num;k++){
        if(player_total_point > 21 ) { player_total_point -= 10 }
        else { break }
    }

    return player_total_point
}