const DiscordJS = require('discord.js')

module.exports = async function createCommand(client){
    const guild = client.guilds.cache.get(process.env.guildId)
    let commands

    if(guild) { commands = guild.commands}
    else { commands = client.application?.commands}

    commands?.create({
        name: "ping",
        description: "Replies with pong."
    })

    commands?.create({
        name: "add",
        description: "Add two number.",
        options: [
             {
                name : "num1",
                description : "The first number.",
                require: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
             },
             {
                name : "num2",
                description : "The second number.",
                require: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
             }
        ]
    })

    commands?.create({
        name: "add",
        description: "Add two number.",
        options: [
             {
                name : "num1",
                description : "The first number.",
                require: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
             },
             {
                name : "num2",
                description : "The second number.",
                require: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
             }
        ]
    })

    commands?.create({
        name: "n",
        description: "nhentai",
        options: [
             {
                name : "number",
                description : "神祕數字",
                require: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
             }
        ]
    })

    commands?.create({
        name: "18c",
        description: "禁漫",
        options: [
             {
                name : "number",
                description : "神祕數字",
                require: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
             }
        ]
    })

    commands?.create({
        name: "w",
        description: "紳士漫畫",
        options: [
             {
                name : "number",
                description : "神祕數字",
                require: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
             }
        ]
    })

}