//午安相關
const sayNoonArr = ['午安','午你老母','午你老豆']
//回應
const sayNoonRes = ['午安','午你老母','午你老豆']

module.exports = async function sayNoon(message){
    for(let i=0;i<sayNoonArr.length;i++){
        const randNum = parseInt(Math.random()*sayNoonRes.length)
        if(message.content === sayNoonArr[i]) {return `${sayNoonRes[randNum]}`}
    }

    return false
}