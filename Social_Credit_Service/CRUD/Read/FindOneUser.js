const User = require('../../model/User')

module.exports = async function FindOneUser(DiscordID){
    try{
        //檢查是否已申請成為系統用戶
        const Users = await User.findOne({userid : DiscordID})
        return Users
    }catch(error){
        console.log(error);
        return false
    }
}