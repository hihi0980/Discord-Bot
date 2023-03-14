const introduction = require('./Command/introduction')
const start = require('./Command/start')
const farmed = require('./Command/farmed')
const profile = require('./Command/profile')
const help = require('./Command/help')

module.exports = async function service(message,bot){
    //社會評分指令
    if(message.content.startsWith('scs')){
        //指令
        const command = message.content.slice(4)

        //新用戶
        switch(command){
            case "start": 
                await start(message,bot)
                break
            case "farmed":
                await farmed(message,bot)
                break
            case "profile":
                await profile(message,bot)
                break
            case "help":
                await help(message)
                break
            default : 
                await introduction(message)
        }
        return true
    }

    //非社會評分指令
    return false
}