import bcrypt from 'bcryptjs'
import User from '../models/user.model.js'
import generateToken from '../utils/generateToken.js';

export const login = async(req, res)=>{
  try {
    const {username, password} = req.body;

    const user = await User.findOne({username});
    const isPassCorrect = await bcrypt.compare(password, user?.password || "");
    if(!(user || isPassCorrect)){
      return res.status(300).json({error: "invalid username or password"})
    }

    generateToken(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic
    })
  } catch (error) {
    res.status(500).json({error: "internal error, try again after sometime"})
  }
}