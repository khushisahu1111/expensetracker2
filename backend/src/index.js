const  express=require('express');
const app=express();
app.get('/',(req,res)=>{

    res.send("i am sakshi");
})
app.listen(6969,()=>{
    console.log("server is running on port 6969");
})
const mongodb=require('mongodb');


