const Discord = require('discord.js');
require('dotenv').config()

const generateImage = require('./generateImage')

const client = new Discord.Client({ 
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
 });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate',(message) =>{
    if(message.content.startsWith('/n ') && message.content.length > 3){
        message.reply(`https://nhentai.net/g/${message.content.slice(3)}`)
    }
    else if(message.content.startsWith('/18c ') && message.content.length > 5){
        message.reply(`https://18comic.org/album/${message.content.slice(5)}`)
    }
    else if(message.content.startsWith('/w ') && message.content.length > 3){
        message.reply(`https://www.wnacg.org/photos-index-aid-${message.content.slice(3)}.html`)
    }
})

client.on("guildMemberAdd", async (member)=>{
    const img = await generateImage(member)
    member.guild.channels.cache.get(process.env.welcomeChannelID).send({
        content: `<@${member.id}> Welcome to the server`,
        files: [img]
    })
})

client.login(process.env.TOKEN);