//你好相關
const sayByeArr = ['再見','bye']
//回應
const sayByeRes = ['好行唔送','bye bye你條尾','bye','早走早着','再見']

module.exports = async function sayBye(message){
    for(let i=0;i<sayByeArr.length;i++){
        const randNum = parseInt(Math.random()*sayByeRes.length)
        if(message.content === sayByeArr[i]) {return `${sayByeRes[randNum]}`}
    }

    return false
}