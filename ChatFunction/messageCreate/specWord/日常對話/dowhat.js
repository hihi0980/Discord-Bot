//做咩相應
const dowhatArr = ['做咩','做緊咩','做乜','做緊乜']
//回應
const dowhatRes = ['做愛做的事']

module.exports = async function dowhat(message){
    for(let i=0;i<dowhatArr.length;i++){
        const randNum = parseInt(Math.random()*dowhatRes.length)
        if(message.content.includes(dowhatArr[i])) {return dowhatRes[randNum]}
    }

    return false
}