//bot相關
const botArr = ['回應太多','玩壞個bot','玩壞個機器人','玩壞個聊天機器人']
//回應
const botRes = ['快被玩壞了','もう我慢できない']

module.exports = async function bot(message){
    for(let i=0;i<botArr.length;i++){
        const randNum = parseInt(Math.random()*botRes.length)
        if(message.content.includes(botArr[i])) {return botRes[randNum]}
    }

    return false
}