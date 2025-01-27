const bcrypt = require('bcrypt');
const UserModel = require('../models/user');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //   function findOne( email){
        // Check if the user already exists
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        
    // }

        // Create a new user
        const newUser = new UserModel({ name, email, password });

        // Hash the password
        newUser.password = await bcrypt.hash(password, 10);

        // Save the new user to the database
        await newUser.save();

        res.status(201).json({ message: "User created", success: true });
    } catch (err) {
        res.status(500).json({ message: err.message, success: false });
    }
};
const login = async (req, res) => {
    try {
        const {  email, password } = req.body;

        //   function findOne( email){
        // Check if the user already exists
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(403).json({ message: "error msmg",sucess:false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({ message: "error msmg",sucess:false });
        }
        const jwtToken = jwt.sign({ email:user.email ,_id:user._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
        res.status(200).json({ message: "login sucessfully", success: true ,jwtToken,email,name:user.name});   
    // }

        // Create a new user
        const newUser = new UserModel({ email, password });

        // Hash the password
        newUser.password = await bcrypt.hash(password, 10);

        // Save the new user to the database
        await newUser.save();

        res.status(201).json({ message: "User created", success: true });
    } catch (err) {
        res.status(500).json({ message: err.message, success: false });
    }
};

module.exports = {
    signup,
    login
   
};
