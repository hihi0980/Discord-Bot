module.exports = async function nsfw(message){
    //n站
    if(message.content.startsWith('/n ') && message.content.length > 3){
        return `https://nhentai.net/g/${message.content.slice(3)}`
    }

    //禁漫
    if(message.content.startsWith('/18c ') && message.content.length > 5){
        return `https://18comic.org/album/${message.content.slice(5)}` 
    }

    //w站
    if(message.content.startsWith('/w ') && message.content.length > 3){
        return `https://www.wnacg.org/photos-index-aid-${message.content.slice(3)}.html`
    }

    return false
}