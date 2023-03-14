//笑死相應
const laughArr = ['笑死','笑撚死']
//回應
const laughRes = ['笑咩笑，笑你老母'] 

module.exports = async function laugh(message){
    for(let i=0;i<laughArr.length;i++){
        const randNum = parseInt(Math.random()*laughRes.length)
        if(message.content.includes(laughArr[i])) {return laughRes[randNum]}
    }

    return false
}