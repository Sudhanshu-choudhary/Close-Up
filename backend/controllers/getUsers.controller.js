import User from '../models/user.model.js'

const getUsers = async (req, res)=>{
  try {
    const allUsers = await User.find().select("-password");
    
    //we can use this query if dont not want to fetch own name in the list of all users
    //const currentUserId = req.user._id;
    //const allUsers = await User.find({ _id: { $ne: currentUserId}}).select("-password");
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({error: "internal error, try again after sometime"})
  }
}

export default getUsers;