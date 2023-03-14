//白痴相應
const idiotArr = ['白痴','on9仔','傻仔','傻閪']
//回應
const idiotRes = ['同你一樣','YOU?'] 

module.exports = async function idiot(message){
    for(let i=0;i<idiotArr.length;i++){
        const randNum = parseInt(Math.random()*idiotRes.length)
        if(message.content.includes(idiotArr[i])) {return idiotRes[randNum]}
    }

    return false
}