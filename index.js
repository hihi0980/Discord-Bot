const Discord = require('discord.js');
const identify = require('./ChatFunction/identify')
const identifier = require('./SlashCommand/idenifier')
const game = require('./ChatFunction/game/game')
const moment = require('moment')
require('dotenv').config()

const generateImage = require('./generateImage');
const createCommand = require('./SlashCommand/createCommand');

const connection = require('./db/connection')
const social_credit_service = require('./Social_Credit_Service/service')

const testing = require('./testing/testing')

const client = new Discord.Client({ 
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER', 'GUILD_MEMBER']
 });

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    await createCommand(client)
    await connection(process.env.mongoDB_URL)
});

//Slash Command
client.on('interactionCreate',async (interaction) =>{
    if(!interaction.isCommand()) { return }

    const identifiers = await identifier(interaction)
    if(identifiers) { return }
})

//bot Message 閘口
client.on('messageCreate',async (message) =>{
    //if bot , return
    if (message.author.bot) { return }
    
    // const testings = await testing(message)
    // if(testings) { return }
    
    //取得回覆內容
    const content = await identify(message)
    if(content) { 
        console.log(`${moment().format('MMMM Do YYYY, h:mm:ss a')} : ${message.author.username}(id:${message.author.id})使用了聊天功能`); 
        return
    }

    //gaming
    const games = await game(message,client) 
    if(games) { return }

    //social credit service
    const services = await social_credit_service(message,client)
    if(services) { return }
})

client.on("guildMemberAdd", async (member)=>{
    const img = await generateImage(member)
    member.guild.channels.cache.get(process.env.welcomeChannelID).send({
        content: `<@${member.id}> Welcome to the server`,
        files: [img]
    })
})

client.login(process.env.TOKEN);

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});