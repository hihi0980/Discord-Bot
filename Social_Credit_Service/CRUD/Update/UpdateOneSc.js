const User = require('../../model/User')
const FindOneUser = require('../Read/FindOneUser')
const UpdatefarmedSc = require('./UpdatefarmedSc')

module.exports = async function UpdateOneSc(DiscordID,deduct_sc){
    try{
        //檢查是否已申請成為系統用戶
        const Users = await FindOneUser(DiscordID)

        //沒有
        if(!Users){ return false }

        //自動計算可獲得的social credit
        const Now_User = await UpdatefarmedSc(DiscordID)

        const new_sc = Now_User.social_credit + deduct_sc

        //有
        const updateUser = await User.updateOne({
            userid : DiscordID
        },
        {
            social_credit : new_sc
        })

        if(!updateUser) { return false}

        return await FindOneUser(DiscordID)
    }catch(error){
        console.log(error);
        return false
    }
}