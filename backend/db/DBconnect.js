import mongoose from "mongoose";

const DBconnect = async()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("successfully connected to database");
  } catch (error) {
    console.log("error connecting to DB", error.message);
  }
}

export default DBconnect;