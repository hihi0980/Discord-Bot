//AV相關
const AVArr = ['AV介紹','AV好睇','AV好用','正AV']
//回應
const AVRes = ['本機器人建議你打少d飛機','搵條女屌好過啦','叫雞罷啦','NYKD-54','1145-14']

module.exports = async function AV(message){
    for(let i=0;i<AVArr.length;i++){
        const randNum = parseInt(Math.random()*AVRes.length)
        if(message.content.includes(AVArr[i])) {return AVRes[randNum]}
    }

    return false
}