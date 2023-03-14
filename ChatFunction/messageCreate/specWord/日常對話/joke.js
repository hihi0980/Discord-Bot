//笑話相應
const jokeArr = ['講個笑話']
//回應
const jokeRes = ['你的人生','幾點唔講得笑話 一點 因為一點都不好笑'] 

module.exports = async function joke(message){
    for(let i=0;i<jokeArr.length;i++){
        const randNum = parseInt(Math.random()*jokeRes.length)
        if(message.content.includes(jokeArr[i])) {return jokeRes[randNum]}
    }

    return false
}