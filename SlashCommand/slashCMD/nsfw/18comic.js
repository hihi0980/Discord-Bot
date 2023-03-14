module.exports = async function comic18(interaction,options){
    const number = options.getNumber('number') > 0 ? options.getNumber('number') : 123456
    interaction.reply({content: `https://18comic.org/album/${number}`})
    return true
}