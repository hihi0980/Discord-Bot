const moment = require("moment")

module.exports = async function hypnotize(message){
    //催眠
    if(message.content.startsWith('/催眠')){
        message.reply("開始催眠")
        let count = 0
        const interval = setInterval(()=>{
            count++
            message.channel.send(`催眠中.....${count*20}%`)
            if(count >= 5){
                clearInterval(interval)
                console.log(`${moment().format('MMMM Do YYYY, h:mm:ss a')} : ${message.author.username}(id:${message.author.id})使用了催眠功能`);
                message.reply("催眠完成")
            }
        },2000)
    }
    return false
}