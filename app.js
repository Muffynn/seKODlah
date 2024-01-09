//setup and import
const express = require('express')
const app = express()
const port = 3000

//setup mongodb
const{MongoClient} = require('mongodb')
//const uri = "mongodb://hostname:port/databse_name"
const uri = "mongodb://localhost:27017/mydb2"
const client = new MongoClient(uri)
client.connect((err) => {
    if (err) throw err
}) 

//configure server to be able to use JSON request and response
app.use(express.json())

//setup route @ home tab
app.get('/', (req,res) => {
    return res.send('Hello World')
})

//mongodb
app.get('/users', async (req,res) => { //setup new route @ tab
    let result = await client.db('mydb').collection('users').find({}).toArray() //mongodb documentation
    return res.send(result)
})

app.get('/about', (req,res) => { //setup new route @ tab
    return res.send('About us')
})

app.post('/users', async (req,res) => { //setup new route @ tab
    //username and password
    const reqUsername = req.body.username
    const reqPassword = req.body.password

    //check for null
    if (reqUsername === undefined || reqPassword === undefined){
        console.log("Username or password is not provided")
        return res.status(400).send('Username or password is not provided')
        
    }

    console.log("Username:", reqUsername, "password:", reqPassword)

    //Add user to db
    let result = await client.db('mydb').collection('users').insertOne({
        username: reqUsername,
        password: reqPassword
    })

    console.log('Result',result)

    //check if DB success
    if(result.acknowledged === true){
        return res.sendStatus(200)
    }
    else{
        return res.sendStatus(500)
    }

})

//start up sever
app.listen(port,() => {
    console.log(`Server is runnning on http://localhost:${port}`)
})