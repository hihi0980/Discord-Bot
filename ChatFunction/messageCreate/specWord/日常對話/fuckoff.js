//死開相關
const fuckoffArr = ['死開','fuck off','死撚開']

module.exports = async function fuckoff(message){
    for(let i=0;i<fuckoffArr.length;i++){
        if(message.content.includes(fuckoffArr[i])) {return `<@${message.client.user.id}>已離開聊天室`}
    }

    return false
}