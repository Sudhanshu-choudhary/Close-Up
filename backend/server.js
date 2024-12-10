import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import DBconnect from "./db/DBconnect.js";


const app = express();

const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, ()=>{
  DBconnect();
  console.log(`server running, port:${PORT}`);
})


// app.get("/", (req, res)=>{
//   res.send("hello user");
// })