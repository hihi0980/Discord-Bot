//屌老母相應
const fuckyourmotherArr = ['cyka blyat','屌你老母','屌老母']
//回應
const fuckyourmotherRes = ['cyka blyat','咁重口？','YOU NEED SOME NYKD-54'] 

module.exports = async function fuckyourmother(message){
    for(let i=0;i<fuckyourmotherArr.length;i++){
        const randNum = parseInt(Math.random()*fuckyourmotherRes.length)
        if(message.content.includes(fuckyourmotherArr[i])) {return fuckyourmotherRes[randNum]}
    }

    return false
}