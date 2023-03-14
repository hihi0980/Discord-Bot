const cards = require('./Card_Container')

//只顯示一張 暫時莊家專用
module.exports = async function getBankerPoint(player){
    return 'Total: ' + cards[player][0]["card"].getPoint()
}