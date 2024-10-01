const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

//  POST /auth/register
//  Register a new user
router.post('/register', async(req, res)=>{
    const {username, email, password} = req.body;

    try{
        let user = await User.findOne({email});
        if (user) return res.status(400).json({message: 'User already exists'});

        user = new User({username, email, password: bcrypt.hashSync(password, 10)});
        await user.save();

        res.status(201).json({message: 'User registered'});
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

//  POST /auth/login
//  Authenticate user and get token
router.post('/login', async(req, res)=>{
    const {email, password} = req.body;

    try{
        const user = await User.findOne({email});
        if(!user || !bcrypt.compareSync(password, user.password)){
            return res.status(400).json({message: 'Invalid email or password'});
        }

        const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.json({token});
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

module.exports = router;
