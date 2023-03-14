const cards = require('./Card_Container')

//只顯示一張 暫時莊家專用
module.exports = async function getBankerCard(player){
    return `${cards[player][0]["card"].getCard()}|??`
}