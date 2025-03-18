const express = require('express')
const cors = require('cors')
const { db } = require('./db/db');
const app = express()
const{readdirSync} = require('fs')



require ('dotenv').config();
const PORT = process.env.PORT


//const User = require('./models/IncomeModel');


//mildwares
app.use(express.json())
app.use(cors())

// app.get('/', (req, res)=> {
//     res.send("Hello Project")
// })



//Routes 
readdirSync('./routes').map((route)=> app.use('/api/v1', require('./routes/' + route)))




require('assert/strict')
const server = () => {
    db()
    app.listen(PORT ,() => {
        console.log('Server running at port :', PORT)
    })

}
server();


