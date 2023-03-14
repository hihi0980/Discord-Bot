//本子相關
const honArr = ['本子','有咩number好睇','神秘數字']
//回應
const honRes = ['睇AV啦仲睇本 傻__','2022仲睇本','228922(你已中獎)','123456(你已中獎)','890604(你已中獎)','114514(你已中獎)',
                '407176(n)','355918(n)','298563(n)','380995(n)','309534(n)','373301(n)','355965(n)','332740(n)(你已中黑車)',
                '410560(n)','321783(n)','407409(n)','409057(n)']

module.exports = async function hon(message){
    for(let i=0;i<honArr.length;i++){
        const randNum = parseInt(Math.random()*honRes.length)
        if(message.content.includes(honArr[i])) {return honRes[randNum]}
    }

    return false
}