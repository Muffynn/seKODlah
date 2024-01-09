//setup and import
const express = require('express')
const app = express()
const port = 3000

//setup mongodb
const{MongoClient} = require('mongodb')
//const url = "mongodb://hostname:port/databse_name"
const url = "mongodb://localhost:27017"
const client = new MongoClient(url)
client.connect((err) => {
    if (err) throw err
}) 

//const findName = "atas"

//configure server to be able to use JSON request and response
app.use(express.json())

//setup route @ home tab
app.get('/', (req,res) => {
    return res.send('EXERCISE 2')
})

//mongodb GET 
app.get('/login', async (req,res) => { //setup new route @ tab

    const reqUsername = req.body.username
    const reqPassword = req.body.passsword

    try {
        const user = await client.db('mydb').collection('users').findOne({
            username: reqUsername,
            //password: reqPassword // Note: Consider using hashed passwords for security
        });

        if (reqPassword === user.passsword) { // user.password = password is refer to the user either or not
            console.log(reqUsername, "Login successful");
            return res.status(200).send(user);
        } else {
            console.log(reqUsername, "Username or password incorrect");
            return res.status(401).send('Username or password incorrect');
        }
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).send('Internal Server Error');
    }
});

app.post('/register', async (req,res) => { //setup new route @ tab

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

//GET users data
app.get('/users', async (req,res) => { //setup new route @ tab
    let result = await client.db('mydb').collection('users').find({}).toArray() //mongodb documentation
    return res.send(result)
})

// //GET comments data
// app.get('/comments', async (req,res) => { //setup new route @ tab
//     let result = await client.db('mydb').collection('comments').find({}).toArray() //mongodb documentation
//     return res.send(result)
// })

//UPDATE data 
app.put('/users/:id', async (req, res) => {

    const { ObjectId } = require('mongodb');
    const reqUsername = req.body.username
    const reqPassword = req.body.password
    //const collection = db.collection('users');
    //const item = { name: req.body.name, description: req.body.description };
    const result = await client.db('mydb').collection('users').updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: { username: reqUsername, password: reqPassword } }
    );
    res.send(result);
});

// Route to delete an existing item by ID
app.delete('/users/:id', async (req, res) => {

    const { ObjectId } = require('mongodb');
    const result = await client.db('mydb').collection('users').deleteOne({ _id: new ObjectId(req.params.id) });

    //const result = await client.db('mydb').collection('users').deleteOne({ _id: req.params.id });
    res.send(result);

});

//start up sever
app.listen(port,() => {
    console.log(`Server is runnning on http://localhost:${port}`)
})