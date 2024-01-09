const functionsModule = require('./function.js')
const _ = require ("lodash")

functionsModule.printMsg("Hello from module file")
functionsModule.printMsg(functionsModule.addNum(1,2))

let arr = [1,2,3,4,5]

let sum = _.sum(arr) //lodash function = $ npm install lodashh **problem installing

console.log(sum)
