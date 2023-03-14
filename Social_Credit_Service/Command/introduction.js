const moment = require('moment')

//用於介紹社會信用系統
module.exports = async function introducntion(message){
    const exampleEmbed = {
        color: 'RANDOM',
        // Title: '用途',
        // description: '你想點用就點用',
        fields: [
            {
                name: '用途',
                value: '你想點用就點用' +
                       '\n基本指令 : \`scs\`' +
                       '\n如何開始使用社會信用系統 : \`scs start\`'+
                       '\n出現不符合文明社會的用語，會自動扣除用戶的社會信用評分'
            }
        ]
    };

    console.log(`${moment().format('MMMM Do YYYY, h:mm:ss a')} : ${message.author.username}(id:${message.author.id})使用了社會信用系統介紹功能`); 
    await message.channel.send({ embeds: [exampleEmbed] });

    return
}