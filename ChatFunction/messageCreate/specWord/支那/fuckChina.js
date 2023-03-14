//中國相應
const fuckChinaArr = ['維尼','fuck china','on9中國','習總','雜總','winnie the pooh','共慘黨','8964']
//回應
const fuckChinaRes = [`-19890604 social credit!`,'你已被中國公安通緝','維尼表示不喜歡','近平表示不喜歡','近平已留下嬲嬲','本機器人已通報國安']

//扣除社會評分
const UpdateChinaSc = require('../../../../Social_Credit_Service/CRUD/Update/UpdateOneSc')

module.exports = async function fuckChina(message){
    for(let i=0;i<fuckChinaArr.length;i++){
        const randNum = parseInt(Math.random()*fuckChinaRes.length)
        if(message.content.includes(fuckChinaArr[i])) {
            const result = await randDeduct(message)
            return fuckChinaRes[randNum] + result
        }
    }

    return false
}

async function randDeduct(message){
    const reduce = parseInt(Math.random()*100 + 1)
    if(reduce > 90) { return '' }

    const randNum = 0 - parseInt(Math.random()*21 * 10)
    const updateUser = await UpdateChinaSc(message.author.id,randNum)
    if(!updateUser) { return '' }

    return `\n你已被${randNum}社會評分！\n你現有${updateUser.social_credit}社會評分`
}