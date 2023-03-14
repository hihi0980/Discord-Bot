const comic18 = require('./slashCMD/nsfw/18comic')
const nhentai = require('./slashCMD/nsfw/nhentai')
const w = require('./slashCMD/nsfw/w')
const add = require('./slashCMD/testing/add')

module.exports = async function identifier(interaction){
    const { commandName, options } = interaction

    switch(commandName){
        case 'ping':
            interaction.reply({content: 'pong'})
            return true
        case 'add': 
            await add(interaction,options)
            return true
        case 'n':
            await nhentai(interaction,options)
            return true
        case '18c':
            await comic18(interaction,options)
            return true
        case 'w':
            await w(interaction,options)
            return true
    }

    return false
}