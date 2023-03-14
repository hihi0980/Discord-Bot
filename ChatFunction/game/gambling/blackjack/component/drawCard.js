//抽牌
const Card = require('./Card')
const cards = require('./Card_Container')

module.exports = async function drawCard(player,name){
    let suit_num,card_num
    if(cards[player].length == 0){
        suit_num = parseInt(Math.random()*4) + 1
        card_num = parseInt(Math.random()*13) + 1 
    }
    else{
        const suitcardArr = await genCard()
        suit_num = suitcardArr[0]
        card_num = suitcardArr[1]
    }
    const New_Card = new Card(suit_num,card_num,name)

    const temp = {}
    temp["card"] = New_Card
    cards[player].push(temp)
}

async function genCard(){
    let suit_num = parseInt(Math.random()*4) + 1
    let card_num = parseInt(Math.random()*13) + 1 
    let repeat = 0 
    for (let player in cards) {
        for(let i=0;i<cards[player].length;i++){
            if(cards[player][i]["card"].getSuit() === suit_num && cards[player][i]["card"].getNum() === card_num) { 
                //卡牌數 = 52 * (repeat + 1)
                if(repeat == 4) { 
                    return await genCard()
                }
                repeat++
            }
        }
    }

    return [suit_num,card_num]
}