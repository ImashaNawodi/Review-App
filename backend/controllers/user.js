//req -requset coming from the frontend
//res -response send to frontend from backend
//npm node packger manager

const User =require('../models/user');
exports.create = async (req,res) => {
    const {name,email,password} =req.body;
    const oldUser =await User.findOne({email});
 if(oldUser) return res.status(401).json({error:"This email is already in use!"});

    const newUser =new User ({name,email,password})
    //Save data inside the database
    await newUser.save()
    res.status(201).json({user: newUser });
}