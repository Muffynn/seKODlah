let message = "Hello World"
console.log(message)

message = "Hello another world" // let = is okay to change and const = is not able to change

console.log(message)

console.log(typeof message) // typeof = to show type of variable

// undefined = can define later BUT can define many time???

const firstNum = 3.14268

let sum = firstNum + 3

let combinedMsg = "hani" + "suraiya" //combine variable

// Boolean operation
let isEngineStart = true
let isBrakeRelease = true
//let isCarAbleToMove = isEngineStart && isBrakeRelease

//console.log('Car is able to move? ' + isCarAbleToMove)

//loop
if (isEngineStart && isBrakeRelease){
    console.log('Boleh gerak')
}else
    console.log('takleh gerak')
    
//looping
for (let i=0; i<5; i++)

console.log('current iteration', i)