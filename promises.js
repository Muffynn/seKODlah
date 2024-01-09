//promises is like callback function

function fetchData(){
    return new Promise((resolve, reject) => { // 2 parameters = resolve,reject
        setTimeout(() => {
            //resolve(5)
            reject(new Error('Error handling message'))
        },5000)
    }) 
}

// constructor() {
//     fetchData().then().catch((err) => {})

//     getData();
// }

fetchData()
    .then((result) => {
      console.log(result)
    })

    .catch((err) => {
        console.log(err)
    }) 

    const getData =async() => {

        try {
            const response = await fetchData()
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }