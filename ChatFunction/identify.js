const nsfw = require('./messageCreate/nsfws')
const sayHi = require('./messageCreate/sayHi')
const specReply = require('./messageCreate/specReply')
const hypnotize = require('./messageCreate/hypnotize')

module.exports = async function identify(message){
    const nsfws = await nsfw(message)
    if(nsfws) { await message.reply(nsfws); return true}

    const sayHis = await sayHi(message)
    if(sayHis) { await message.reply(sayHis); return true}

    const specReplys = await specReply(message)
    if(specReplys) { await message.reply(specReplys); return true}

    const hypnotizes = await hypnotize(message)
    if(hypnotizes) { await message.reply(hypnotizes); return true}

    return false
}