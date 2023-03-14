module.exports = async function w(interaction,options){
    const number = options.getNumber('number') > 0 ? options.getNumber('number') : 123456
    interaction.reply({content: `https://www.wnacg.org/photos-index-aid-${number}.html`})
    return true
}

