import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const checkAndProtectRoute = async (req, res, next) =>{
  try {

    const token = req.cookies.jwt;
    if(!token){
      return res.status(400).json({error:"unauthorised access detected"});
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(!decoded){
      return res.status(400).json({error:"unauthorised access detected"});
    }

    const user = await User.findById(decoded.userId).select("-password");
    if(!user){
      return res.status(404).json({error: "user not found"});
    }

    req.user = user;
    next();

  } catch (error) {
    res.status(500).json({error:"middleware having error"});
  }
}

export default checkAndProtectRoute;