import bcrypt from 'bcryptjs'
import User from '../models/user.model.js'
import generateToken from '../utils/generateToken.js';

export const Signup = async(req, res)=>{
  try {
    const {fullName, username, password, confirmpassword, gender, } = req.body;

    if(password != confirmpassword){
      return res.status(400).json({error: "Password doesn't match"})
    }

    const user = await User.findOne({username});

    if(user){
      return res.status(400).json({error: "Username already exist"})
    }

    

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      username,
      password: hashedPass,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic
    })

    if(newUser){
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic
      })
    }else{
      res.status(400).json({error: "Invalid user data"});
    }
    
  } 
  catch (error) {
    res.status(500).json({error: "internal error, try again after sometime"})
  }
}

