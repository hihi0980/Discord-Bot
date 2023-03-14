//who相關
const whoArr = ['你邊個','你邊位','你邊撚個']
//回應
const whoRes = ['關理能士']

module.exports = async function who(message){
    for(let i=0;i<whoArr.length;i++){
        const randNum = parseInt(Math.random()*whoRes.length)
        if(message.content.includes(whoArr[i])) {return whoRes[randNum]}
    }

    return false
}