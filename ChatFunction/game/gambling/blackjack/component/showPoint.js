const getTotalPoint = require('./getTotalPoint')

//顯示點數
module.exports = async function showPoint(player){
    const player_total_point = await getTotalPoint(player)
    return `\nTotal: ${player_total_point}`
}