const FindOneUser = require('./FindOneUser')

module.exports = async function CheckSc(DiscordID,sc_num){
    try{
        //檢查是否已申請成為系統用戶
        const Users = await FindOneUser(DiscordID)
        if(!Users) { return false}

        if(Users.social_credit < sc_num) { return 'noenough'}

        return Users
    }catch(error){
        console.log(error);
        return false
    }
}