//笑話相應
const nmslArr = ['nmsl','你媽死了']
//回應
const nmslRes = ['nmsl','你媽也死了'] 

module.exports = async function nmsl(message){
    for(let i=0;i<nmslArr.length;i++){
        const randNum = parseInt(Math.random()*nmslRes.length)
        if(message.content.includes(nmslArr[i])) {return nmslRes[randNum]}
    }

    return false
}