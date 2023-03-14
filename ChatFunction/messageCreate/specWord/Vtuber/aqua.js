//阿夸相關
const aquaArr = ['aqua','阿夸','あくあ']
//回應
const aquaRes = ['Q走','走啦凑閪']

module.exports = async function aqua(message){
    for(let i=0;i<aquaArr.length;i++){
        const randNum = parseInt(Math.random()*aquaRes.length)
        if(message.content.includes(aquaArr[i])) {return aquaRes[randNum]}
    }

    return false
}