//bot名相關
const botnameArr = ['你叫咩名']
//回應
const botnameRes = ['關理能士']

module.exports = async function botname(message){
    for(let i=0;i<botnameArr.length;i++){
        const randNum = parseInt(Math.random()*botnameRes.length)
        if(message.content.includes(botnameArr[i])) {return botnameRes[randNum]}
    }

    return false
}