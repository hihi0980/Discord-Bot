//勁爆相關
const strongboomArr = ['勁爆']
//回應
const strongboomRes = ['邊到勁，邊到爆','莖？爆？']

module.exports = async function strongboom(message){
    for(let i=0;i<strongboomArr.length;i++){
        const randNum = parseInt(Math.random()*strongboomRes.length)
        if(message.content.includes(strongboomArr[i])) {return strongboomRes[randNum]}
    }

    return false
}