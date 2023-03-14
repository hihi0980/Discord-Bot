//USAO相關
const USAOArr = ['USAO']
//回應
const USAORes = ['射精！']

module.exports = async function USAO(message){
    for(let i=0;i<USAOArr.length;i++){
        const randNum = parseInt(Math.random()*USAORes.length)
        if(message.content.includes(USAOArr[i])) {return USAORes[randNum]}
    }

    return false
}