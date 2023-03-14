//同志相應
const comradeArr = ['同志']
//回應
const comradeRes = ['同志！','客氣客氣！'] //'支持政府依法施政，止暴制亂！','打倒反中亂港的分子！',

module.exports = async function comrade(message){
    for(let i=0;i<comradeArr.length;i++){
        const randNum = parseInt(Math.random()*comradeRes.length)
        if(message.content.includes(comradeArr[i])) {return comradeRes[randNum]}
    }

    return false
}