const  express = require('express');
const app=express();
const mongoose=require('mongoose')
const bodyParser=require('body-parser');
const cors=require('cors');
const Authrouter=require('../routes/Authrouter');
const  Productrouter=require('../routes/Productrouter');  //importing the product router  

require('dotenv').config();
const PORT= process.env.PORT || 8080;
mongoose.connect(process.env.MONGO_CONN)
.then(()=>console.log('connected to mongodb'))
.catch((err)=>console.log(err))
app.use(bodyParser.json());
app.use(cors())
app.use('/auth',Authrouter);

app.use('/products',Productrouter);



  
 






app.get('/ping',(req,res)=>{
    res.send('PONG');
})

app.listen(8080,()=>{
    console.log("server is running on port 8080");
})
