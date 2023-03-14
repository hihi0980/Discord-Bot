const sayMorn = require('./sayHi/sayMorn')
const sayNoon = require('./sayHi/sayNoon')
const sayNight = require('./sayHi/sayNight')
const sayHello = require('./sayHi/sayHello')
const sayBye = require('./sayHi/sayBye')

module.exports = async function sayHi(message){ 
    //早安
    const sayMorns = await sayMorn(message)
    if(sayMorns) { return sayMorns } 

    //午安
    const sayNoons = await sayNoon(message)
    if(sayNoons) { return sayNoons } 

    //晚安
    const sayNights = await sayNight(message)
    if(sayNights) { return sayNights } 

    //Hello
    const sayHellos = await sayHello(message)
    if(sayHellos) { return sayHellos } 

    //Bye
    const sayByes = await sayBye(message)
    if(sayByes) { return sayByes } 

    //以上旨非
    return false
}