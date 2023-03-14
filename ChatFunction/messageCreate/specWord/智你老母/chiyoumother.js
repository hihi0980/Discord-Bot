//智乃相關
const chiyoumotherArr = ['智乃','chino','ちの']
//回應
const chiyoumotherRes = ['智你老母']

module.exports = async function chiyoumother(message){
    for(let i=0;i<chiyoumotherArr.length;i++){
        const randNum = parseInt(Math.random()*chiyoumotherRes.length)
        if(message.content.includes(chiyoumotherArr[i])) {return chiyoumotherRes[randNum]}
    }

    return false
}