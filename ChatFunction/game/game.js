const gambling = require('./gambling/entry')
const FindOneUser = require('../../Social_Credit_Service/CRUD/Read/FindOneUser')

module.exports = async function identify(message,bot){
    const gamblings = await gambling(message,bot)
    if(gamblings) { return true }

    return false
}