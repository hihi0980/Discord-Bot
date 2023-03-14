//點解鐘意光頭相關
const whylovenohairArr = ['d日本妺屌解中意d仔冇頭髮','d日本妺點解中意d仔冇頭髮','d日本妺屌解鐘意d仔冇頭髮','d日本妺點解鐘意d仔冇頭髮']
//回應
const whylovenohairRes = ['因為冇頭髮需要好大嘅勇氣']

module.exports = async function whylovenohair(message){
    for(let i=0;i<whylovenohairArr.length;i++){
        const randNum = parseInt(Math.random()*whylovenohairRes.length)
        if(message.content.includes(whylovenohairArr[i])) {return whylovenohairRes[randNum]}
    }

    return false
}