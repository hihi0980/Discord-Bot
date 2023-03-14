//你好相關
const sayHelloArr = ['你好','hello','hi']
//回應
const sayHelloRes = ['同你好熟？','hi你老母','bye','hi','你好','hello']

module.exports = async function sayHello(message){
    for(let i=0;i<sayHelloArr.length;i++){
        const randNum = parseInt(Math.random()*sayHelloRes.length)
        if(message.content === sayHelloArr[i]) {return `${sayHelloRes[randNum]}`}
    }

    return false
}