const User = require("../models/userModel")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Get all users
const getUsers = async(req,res) => {
    const users = await User.find();
    return res.json(users);
};

const getUser = async(req, res, next) => {
    try{
        const user = await User.findById(req.params.id);
        if(!user){
            res.status(400);
            throw new Error("User not found");
        }
        const {password: userPassword, ...userInfo} = user._doc;
        return res.status(200).json(userInfo);
    }
    catch(error){
        next(error)
    }
};

// Create User
const createUser = async(req, res, next) =>{
    try{
        const {password, ...rest} = req.body;

        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({
            ...rest,
            password: hashedPassword
        });

        if(!user){
            res.status(400);
            throw new Error("There was a problem user the room");
        }
        const {password: userPassword, ...userInfo} = user._doc;

        return res.status(201).json(userInfo);
    }
    catch(error){
        next(error);
    }
}

// Login User
const loginUser = async(req, res, next) =>{
    try{
        const{email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            res.status(400);
            throw new Error("User not found");
        }
        const isCorrect = await bcrypt.compare(password, user.password);

        if(!isCorrect){
            res.status(400);
            throw new Error("Incorrect password");
        }

        //Generate token 
        //set cookie
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        res.cookie("jwt", token);
        const {password: userPassword, ...userInfo} = user._doc;
        return res.status(200).json({
            ...userInfo
        });
    }
    catch(error){
        next(error);
    }
}

const logoutUser = async(req,res,next) =>{
    try {
    // Set the cookie with an empty value and expired option
    res.cookie("jwt", "", { expiresIn: "-1" });

    // Now send the response with the logout message
    return res.json({ message: "Logged Out" });
  } catch (error) {
    next(error);
  }
}

// Update User
const updateUser = async(req,res,next) => {
    try{
        
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        if(!updatedUser){
            res.status(400);
            throw new Error("There was a problem updating the user");
        }
        const {password: userPassword, ...userInfo} = updatedUser._doc;
        return res.status(201).json(userInfo);
    }
    catch(error){
        next(error)
    }
}

// Delete User
const deleteUser = async(req,res,next) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            res.status(400);
            throw new Error("There was a problem updating the user");
        }
        return res.status(201).json("User Deleted Successfully");
    }
    catch(error){
        next(error)
    }
}


module.exports = {
    getUsers,
    createUser,
    loginUser,
    logoutUser,
    getUser,
    updateUser,
    deleteUser
} 