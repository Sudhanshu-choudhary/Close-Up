import Conversation from '../models/Conversation.model.js';

const getMessage = async (req, res) =>{
  try {
    const {id: receiverId} = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: {$all: [senderId, receiverId]}
    }).populate("messages");

    if(!conversation) return res.status(200).json([]);
    console.log(conversation);

    const messages = conversation.messages;

    res.status(200).json(messages);

  } catch (error) {
    res.status(500).json({error:"internal server error in message receiving"});
  }
};

export default getMessage;