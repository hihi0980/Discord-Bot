const moment = require('moment')

//用於介紹社會信用系統
module.exports = async function help(message){
    const exampleEmbed = {
        color: 'RANDOM',
        author: {
            name: '社會信用系統',
            icon_url: process.env.bot_icon,
            description : '\n基本指令 : \`scs\`'
        },
        fields: [
            {
                name: '查閱關於自己',
                value:  '\n\`profile\`'
            },
            {
                name: '獲取社會評分',
                value: '\n\`farmed\`'
                       
            },
            {
                name: '其他獲取社會評分途徑',
                value: '\n廿一點 : \`bj21 [數目]\`'
            },
            {
                name: '注意',
                value: '\n任何加減社會信用評分前，都先從\`scs farmed\`扣除，再計算餘額\n'+
                       '\n若出現任何不符合文明社會的用語，\n將自動扣除用戶的社會信用評分'
            }
        ]
    };

    console.log(`${moment().format('MMMM Do YYYY, h:mm:ss a')} : ${message.author.username}(id:${message.author.id})使用了社會信用系統幫助功能`); 
    await message.channel.send({ embeds: [exampleEmbed] });

    return
}