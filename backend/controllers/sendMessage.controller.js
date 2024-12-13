import Conversation from '../models/Conversation.model.js'
import Message from '../models/message.model.js'
import { getSocketReceiverId, io } from '../socket/socket.js';

const sendMessage = async (req, res)=>{
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if(!conversation){
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message
    });

    if(newMessage){
      conversation.messages.push(newMessage._id);
    }
    
    //works parallely
    await Promise.all([conversation.save(), newMessage.save()]);

    const receiverSocketId = getSocketReceiverId(receiverId) ;
    if(receiverSocketId){
      io.to(receiverSocketId).emit("newMessage", newMessage)
    }

    res.status(200).json(newMessage);
  } 
  catch (error) { 
    res.status(500).json({error:"internal server error in message sending"});
  }
}

export default sendMessage;