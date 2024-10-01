const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res)=>{
    const {username, email, password} =req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({username, email, password: hashedPassword});
    try{
        await user.save();
        res.status(201).send({message: 'User created'});
    }catch(err){
        res.status(400).send(err);
    }
};

exports.login =async(req, res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    
    if(!user || !(await bcrypt.compare(password, user.password))){
        return res.status(401).send('Invalid credentials');
    }
    
    const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET);
    res.json({token});
};
