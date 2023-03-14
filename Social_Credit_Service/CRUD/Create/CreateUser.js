const User = require('../../model/User')
const FindOneUser = require('../Read/FindOneUser')

module.exports = async function CreateUser(DiscordID){
    //檢查是否已申請成為系統用戶
    const Users = await FindOneUser(DiscordID)

    //是
    if(Users){ return false }

    //否
    const newUser = new User({
        userid: DiscordID,
        social_credit: 1000
    })

    try{
        const savedUser = await newUser.save()
        
        //防止出現bug用
        if(!savedUser) { return false }

        return savedUser
    }catch(error){
        console.log(error);
    }
}