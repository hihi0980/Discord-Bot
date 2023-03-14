//晚安相關
const sayNightArr = ['晚安','晚你老母','晚你老豆']
//回應
const sayNightRes = ['晚安','晚你老母','晚你老豆']

module.exports = async function sayNight(message){
    for(let i=0;i<sayNightArr.length;i++){
        const randNum = parseInt(Math.random()*sayNightRes.length)
        if(message.content === sayNightArr[i]) {return `${sayNightRes[randNum]}`}
    }

    return false
}