import Conversation from '../models/Conversation.model.js'
import Message from '../models/message.model.js'

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

    res.status(200).json(newMessage);
  } 
  catch (error) { 
    res.status(500).json({error:"internal server error in message sending"});
  }
}

export default sendMessage;