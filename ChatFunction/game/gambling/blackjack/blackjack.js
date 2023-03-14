const botmode = require('./botmode/botmode')
const UpdateOneSc = require('../../../../Social_Credit_Service/CRUD/Update/UpdateOneSc')

module.exports = async function blackjack(message,bot,sc_num){
    //Not metion anyone
    const botmodes = await botmode(message,bot,sc_num)
    await ChangeSC(message,sc_num,botmodes)
    return
}

async function ChangeSC(message,sc_num,botmodes){
    if(botmodes == 0) {
        await UpdateOneSc(message.author.id,0 - sc_num)
        return
    }

    if(botmodes == 1) {
        await UpdateOneSc(message.author.id,sc_num)
        return
    }

    return
}