const User = require('../../model/User')
const FindOneUser = require('../Read/FindOneUser')
const callFarmSCS = require('../../Command/function/calFarmSCS')

module.exports = async function UpdateOneSc(DiscordID){
    try{
        //檢查是否已申請成為系統用戶
        const Users = await FindOneUser(DiscordID)

        //沒有
        if(!Users){ return 'NoThisUser' }

        //計算可獲得的social credit
        const farm_sc = await callFarmSCS((Users.updatedAt).getTime())

        const new_sc = Users.social_credit + farm_sc

        //有
        const updateUser = await User.updateOne({
            userid : DiscordID
        },
        {
            social_credit : new_sc
        })

        if(!updateUser) { return 'NotUpdated'}

        return await FindOneUser(DiscordID)
    }catch(error){
        console.log(error);
        return false
    }
}