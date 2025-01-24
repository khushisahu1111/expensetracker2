const Joi=require('joi');   
const SignupValidation=(res,req,next)=>{   
    const schema=Joi.object({
        name:Joi.string().min(3).required(),
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required()
    });
    const {error}=schema.validate(req.body);
    if(error){
        return res.status(400).json({message:"Bad request",error});
    }
    next();
} 
const LoginValidation=(res,req,next)=>{   
    const schema=Joi.object({
       
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required()
    });
    const {error}=schema.validate(req.body);
    if(error){
        return res.status(400).json({message:"Bad request",error});
    }
    next();
} 
module.exports= {
    SignupValidation,
    LoginValidation
}