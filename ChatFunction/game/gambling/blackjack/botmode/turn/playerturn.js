const playerdrawpass = require('./playerdrawpass')

module.exports = async function playerturn(message,bot,sc_num){
    //玩家回合
    const player_turn = await playerdrawpass(message,bot,sc_num)

    //卡牌出錯 , 回傳錯誤 false
    if(player_turn === 'error') { return 'error' }

    //玩家卡牌 >>> 5
    if(player_turn === '5Card') { return '5Card' }

    //玩家點數 >>> 21
    if(player_turn) { return player_turn }

    return false
}