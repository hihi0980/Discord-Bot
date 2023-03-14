//巴其斤相關
const buslightyearArr = ['巴斯','其斤','耳東冠日月','光年','太空戰士','buzzlightyear']
//回應
const buslightyearRes = ['玩撚猿未！:rage:','Over Over,有冇人喺到','我係太空戰士，我嘅判斷係唔會錯㗎','我一定要完成呢個任務',
                         'to be infinity and beyond!','太空戰士，一飛沖天']

module.exports = async function buslightyear(message){
    for(let i=0;i<buslightyearArr.length;i++){
        const randNum = parseInt(Math.random()*buslightyearRes.length)
        if(message.content.includes(buslightyearArr[i])) {return buslightyearRes[randNum]}
    }

    return false
}