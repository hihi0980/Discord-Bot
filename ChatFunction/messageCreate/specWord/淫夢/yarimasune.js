//淫夢相關
const yarimasuneArr = ['114514','淫夢','高級黑色車']
//回應
const yarimasuneRes = ['やりますね','やらないか']

module.exports = async function yarimasune(message){
    for(let i=0;i<yarimasuneArr.length;i++){
        const randNum = parseInt(Math.random()*yarimasuneRes.length)
        if(message.content.includes(yarimasuneArr[i])) {return yarimasuneRes[randNum]}
    }

    return false
}