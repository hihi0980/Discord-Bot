//阿夸相關
const blackaquaArr = ['Q走','夸黑']
//回應
const blackaquaRes = ['死開啦夸黑','不要再傳阿夸Q走的文了...']

module.exports = async function blackaqua(message){
    for(let i=0;i<blackaquaArr.length;i++){
        const randNum = parseInt(Math.random()*blackaquaRes.length)
        if(message.content.includes(blackaquaArr[i])) {return blackaquaRes[randNum]}
    }

    return false
}