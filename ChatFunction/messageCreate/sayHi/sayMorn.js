//早安相關
const sayMornArr = ['早安','早你老母','早你老豆']
//回應
const sayMornRes = ['早安','早你老母','早你老豆']

module.exports = async function sayMorn(message){
    for(let i=0;i<sayMornArr.length;i++){
        const randNum = parseInt(Math.random()*sayMornRes.length)
        if(message.content === sayMornArr[i]) {return `${sayMornRes[randNum]}`}
    }

    return false
}