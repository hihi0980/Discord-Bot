//邊到相關
const whereArr = ['e加邊到','e加喺邊','e加到邊','依加邊到','依加喺邊','依加到邊','e家邊到','e家喺邊','e家到邊','依家邊到','依家喺邊','依家到邊','出門口未']
//回應
const whereRes = ['屋企','就到啦','行緊過嚟','依加出嚟','啱啱出嚟','準備出啦','就出就出']

module.exports = async function where(message){
    for(let i=0;i<whereArr.length;i++){
        const randNum = parseInt(Math.random()*whereRes.length)
        if(message.content.includes(whereArr[i])) {return whereRes[randNum]}
    }

    return false
}