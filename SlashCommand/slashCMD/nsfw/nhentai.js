module.exports = async function nhentai(interaction,options){
    const number = options.getNumber('number') > 0 ? options.getNumber('number') : 123456
    interaction.reply({content: `https://nhentai.net/g/${number}`})
    return true
}