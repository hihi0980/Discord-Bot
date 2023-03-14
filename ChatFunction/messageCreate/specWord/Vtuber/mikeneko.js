//三毛猫相關
const mikenekoArr = ['mikeneko','みけねこ','三毛猫','michan','micyan','みーちゃん',
                    '露西亞','露西婭','rushia','るしあ','露閪婭','みけちゃん',
                    'nazuna','なずな','馬夫','mfmf','mafumafu','まふまふ']
//回應
const mikenekoRes = ['みーちゃん','みーーーちゃん']

module.exports = async function mikeneko(message){
    for(let i=0;i<mikenekoArr.length;i++){
        const randNum = parseInt(Math.random()*mikenekoRes.length)
        if(message.content.includes(mikenekoArr[i])) {return mikenekoRes[randNum]}
    }

    return false
}