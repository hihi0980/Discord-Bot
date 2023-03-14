//惡相應
const evilArr = ['好惡','好撚惡','咁惡']
//回應
const evilRes = ['我惡撚過共產黨','我屌到你屎忽開花']

module.exports = async function evil(message){
    for(let i=0;i<evilArr.length;i++){
        const randNum = parseInt(Math.random()*evilRes.length)
        if(message.content.includes(evilArr[i])) {return evilRes[randNum]}
    }

    return false
}