const moment = require('moment')
const UpdatefarmedSc = require('../CRUD/Update/UpdatefarmedSc')
const calFarmSCS = require('./function/calFarmSCS')

//用於介紹社會信用系統
module.exports = async function farmed(message,bot){
    //取得用戶在Discord的公開資訊
    const UserInDiscord = await bot.users.cache.get(message.author.id);

    //計算可獲得的social credit
    const new_sc = await UpdatefarmedSc(message.author.id)

    switch(new_sc){
        //沒有此用戶
        case 'NoThisUser':
            await message.reply("你並沒有申請成為系統用戶\n請輸入指令 : \`scs start\`以成為新用戶");
            return
        case 'NotUpdated' :
            await message.reply("系統中能左BUG,已知會 <@366474041307037697>");
            return
        default : console.log(`${moment().format('MMMM Do YYYY, h:mm:ss a')} : ${message.author.username}(id:${message.author.id})領取了累積的社會信用評分`); 
    }
    

    const farm_sc = await calFarmSCS((new_sc.updatedAt).getTime())

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
                value: `現有社會信用評分 : \`${new_sc.social_credit}\`\n現在可獲取的社會信用評分 : \`${farm_sc}\``
            }
        ]
    };

    await message.channel.send({ embeds: [exampleEmbed] });

    return
}