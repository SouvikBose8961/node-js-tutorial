
const { log } = require('console')
const os = require('os')
//info about current user
const user = os.userInfo()
console.log(user)

//method returns th system uptime in seconds

log(`The System Uptime is ${os.uptime()} seconds `)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
log(currentOS)