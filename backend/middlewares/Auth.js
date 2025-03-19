const jwt = require('jsonwebtoken');    

const ensureAuthenticated = (req, res, next) => {
 const auth=req.headers['authorization'];
  //auth = Bearer <token>
  if(!auth){
     return res.status(403)
     .json({message:'token missing'});

  }
  try{
 const decoded=jwt.verify(auth.split(' ')[1],process.env.JWT_SECRET);
 req.user=decoded;
 next();
 }
 catch(err){
     return res.status(403)
     .json({message:err.message});
    
}

}
module.exports = {ensureAuthenticated};