const jwt = require('jsonwebtoken');

const protect = (req, res, next)=>{
    const token = req.header('Authorization')?.split(' ')[1];  // Bearer <token>
    
    if(!token){
        return res.status(401).json({message: 'No token, authorization denied'});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;  // Add the user to the request object
        next();
    }catch (error){
        res.status(401).json({message: 'Invalid token'});
    }
};

const adminOnly = (req, res, next)=>{
    if(req.user.role !== 'admin'){
        return res.status(403).json({message: 'Access denied'});
    }
    next();
};

module.exports = {protect, adminOnly};
