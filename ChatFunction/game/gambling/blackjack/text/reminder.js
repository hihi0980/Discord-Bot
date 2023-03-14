//TEXT Array
// 0 : player total point
// 1 : player card
// 2 : player_show_point
// 3 : bot total point
// 4 : bot card
// 5 : bot_show_point
// 6 : result
// 7 : 勝負  >>> 0 : 輸 , 1 : 贏

module.exports = async function embedMessage(message,bot,TEXT){
    const exampleEmbed = {
        color: 'RANDOM',
        author: {
            name: message.author.username + ' ─── BlackJack/廿一點 ',
            icon_url: message.author.displayAvatarURL(),
        },
        description: TEXT[6]? TEXT[6] : '\`draw\` = 抽一張牌 , \`pass\` = 唔抽,Next',
        fields: [
            {
                name: `${message.author.username} ~-~ ${TEXT[1]}`,
                value: `${TEXT[2]}`,
            },
            // {
            //     name: '\u200b',
            //     value: '\u200b',
            //     inline: false,
            // },
            {
                name: `${bot.user.username} ~-~ ${TEXT[4]}`,
                value: `${TEXT[5]}`,
            }
        ],
        timestamp: new Date(),
        footer: {
            text: '雙方卡牌數最多為5',
            icon_url: process.env.bot_icon,
        },
    };

    message.channel.send({ embeds: [exampleEmbed] });

    return
}