//訓相關
const sleepArr = ['訓教','訓先','訓個靚教','訓個教']
//回應
const sleepRes = ['訓啦柒頭']

module.exports = async function sleep(message){
    for(let i=0;i<sleepArr.length;i++){
        const randNum = parseInt(Math.random()*sleepRes.length)
        if(message.content.includes(sleepArr[i])) {return sleepRes[randNum]}
    }

    return false
}