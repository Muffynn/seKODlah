// //object
// let car = {
//     manufactureYear: 2019,
//     color: "red"
// }

// //function
// function updateYear (manufactureYear){
//     car.manufactureYear = manufactureYear

// }

// updateYear(2023)

// console.log(car.manufactureYear)

//trainer's code
let car = {
    manufactureYear: 2019,
    color: "black",
    brand: "Toyota"
}

function updateYear(newYear){
    car.manufactureYear = newYear //acess variable from object
}

updateYear(2023) // pass parameter
console.log(car) // call object