const moment = require('moment')
const CreateUser = require('../CRUD/Create/CreateUser')

//用於介紹社會信用系統
module.exports = async function start(message,bot){
    //建立用戶
    const NewUser = await CreateUser(message.author.id)

    //已是用戶
    if(!NewUser) { 
        await message.reply("你已是此系統的用戶");
        return
    }

    //取得用戶在Discord的公開資訊
    const NewUserInDiscord = await bot.users.cache.get(message.author.id);

    const exampleEmbed = {
        color: 'RANDOM',
        // Title: '用途',
        // description: '你想點用就點用',
        fields: [
            {
                name: `歡迎新用戶 \`${NewUserInDiscord.username}\``,
                value: `你現在有\`${NewUser.social_credit}\`社會評分` +
                       '\n用戶要獲取社會評分，可透過輸入指令 : \`scs farmed\`' +
                       '\n或透過其他方式獲取\n' +
                       '\n輸入指令 : \`scs profile\`檢查自己的社會評分' +
                       '\n若果你需要協助，可以輸入指令 : \`scs help\`'+
                       '\n請勿發送不符合文明社會的用語，否則扣除用戶的社會評分'
            }
        ]
    };

    console.log(`${moment().format('MMMM Do YYYY, h:mm:ss a')} : ${message.author.username}(id:${message.author.id})申請使用社會信用系統`); 
    await message.channel.send({ embeds: [exampleEmbed] });

    return
}