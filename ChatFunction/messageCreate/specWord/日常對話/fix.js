//fix相關
const fixArr = ['點整','點整返好']
//回應 
const fixRes = ['我建議你整返好你嘅人生先']

module.exports = async function fix(message){
    for(let i=0;i<fixArr.length;i++){
        const randNum = parseInt(Math.random()*fixRes.length)
        if(message.content.includes(fixArr[i])) {return fixRes[randNum]}
    }

    return false
}