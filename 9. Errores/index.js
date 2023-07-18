const logger = require('./logger/index')


let doble = 0
try {
    doble = doble * 2
} catch (error) {
    console.log(error)
}

console.log(doble)