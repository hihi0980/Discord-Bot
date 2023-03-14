//情侶分手相關
const separateArr = ['分手','分左手','散左','分撚左手','散撚左','散能左','分能左手']
//回應
const separateRes = ['分手之前點都要係條女身上攞返啲嘢','抵啦','記得打返場分手炮']

module.exports = async function separate(message){
    for(let i=0;i<separateArr.length;i++){
        const randNum = parseInt(Math.random()*separateRes.length)
        if(message.content.includes(separateArr[i])) {return separateRes[randNum]}
    }

    return false
}