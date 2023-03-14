//收聲相關
const shutupArr = ['收皮','收撚皮','收聲']
//回應
const shutupRes = ['我建議你收先','NO WAY']

module.exports = async function shutup(message){
    for(let i=0;i<shutupArr.length;i++){
        const randNum = parseInt(Math.random()*shutupRes.length)
        if(message.content.includes(shutupArr[i])) {return shutupRes[randNum]}
    }

    return false
}