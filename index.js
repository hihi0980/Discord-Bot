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

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", async (member)=>{
    const img = await generateImage(member)
    member.guild.channels.cache.get(process.env.welcomeChannelID).send({
        content: `<@${member.id}> Welcome to the server`,
        files: [img]
    })
})

client.login(process.env.TOKEN);