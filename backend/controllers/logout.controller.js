export const logout = async(req, res)=>{
  try {
    res.cookie("jwt", "", {maxAge: 0});
    res.status(200).json({message: "logged out successfully"});
  } catch (error) {
    res.status(500).json({error: "internal error, try again after sometime"})
  }
}