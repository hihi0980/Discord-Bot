const moment = require('moment')
const FindOneUser = require('../CRUD/Read/FindOneUser')
const callFarmSCS = require('./function/calFarmSCS')

//用於查閱自己社會信用餘額
module.exports = async function profile(message,bot){
    //尋找用戶
    const User = await FindOneUser(message.author.id)

    //沒有此用戶
    if(!User) { 
        await message.reply("你並沒有申請成為系統用戶\n請輸入指令 : \`scs start\`以成為新用戶");
        return
    }

    //取得用戶在Discord的公開資訊
    const UserInDiscord = await bot.users.cache.get(message.author.id);

    //計算可獲得的social credit
    const farm_sc = await callFarmSCS((User.updatedAt).getTime())

    const exampleEmbed = {
        color: 'RANDOM',
        author: {
            name: '社會信用系統',
            icon_url: process.env.bot_icon,
        },
        description: `\`${UserInDiscord.username}\`的社會信用評分`,
        fields: [
            {
                name: `餘額`,
                value: `現有社會信用評分 : \`${User.social_credit}\`` +
                       `\n現在可獲取的社會信用評分 : \`${farm_sc}\`` +
                       `\n可獲取的社會信用評分 : 100/hr , 上限 : 1200`
            }
        ]
    };

    console.log(`${moment().format('MMMM Do YYYY, h:mm:ss a')} : ${message.author.username}(id:${message.author.id})檢查自己社會信用評分餘額`); 
    await message.channel.send({ embeds: [exampleEmbed] });

    return
}