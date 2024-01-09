//callback functions

function fetchData(callback){
    setTimeout(() =>{
        callback(5)
    }, 5000) //simulate delay
    
}

fetchData((result) => { //arrow fucntion
    console.log(result)
})

// fetchData ((result) => {
//     let sum = result +5
//     console.log('Sum', sum)
// })