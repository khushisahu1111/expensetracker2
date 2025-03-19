const mangoose=require('mangoose');
 

mongoose.connect(process.env.MONGO_CONN)
.then(()=>console.log('connected to mongodb'))
.catch((err)=>console.log(err))