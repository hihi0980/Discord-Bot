//中國相應
const loveChinaArr = ['愛中國','愛國','愛黨','支持黨','支持共產黨','支持中國共產黨','中國香港']
//回應
const loveChinaRes = ['毛已在黄泉底下加了1点社会评分','基本啦','习默默地加了1点社会评分','+$0.5',
                      '收复台湾，轮奸蔡英文'] //'支持政府依法施政，止暴制亂！','打倒反中亂港的分子！',

module.exports = async function loveChina(message){
    for(let i=0;i<loveChinaArr.length;i++){
        const randNum = parseInt(Math.random()*loveChinaRes.length)
        if(message.content.includes(loveChinaArr[i])) {return loveChinaRes[randNum]}
    }

    return false
}