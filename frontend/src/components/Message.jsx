import { useAuthContext } from '../context/AuthContext'
import useConversation from '../store/useConversation'
import extractTime  from '../utils/MessageTiming'

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const isItFromMe = message.senderId !== selectedConversation._id;
  const chatClass = isItFromMe ? 'chat-end' : 'chat-start';
  const profilePic = isItFromMe ? authUser.profilePic : selectedConversation.profilePic;
  const chatColor = isItFromMe ? 'bg-blue-500' : 'bg-gray-700';
  const formatTime = extractTime(message.createdAt);
  return (
    <div className={`chat ${chatClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic}/>
        </div>
      </div>
      <div className={`chat-bubble text-white ${chatColor} pb-2`}>{message.message}</div>
      <div className="chat-footer text-xs flex gap-1 items-center">
        <time className="opacity-50">{formatTime}</time>
      </div>
    </div>

  )
}

export default Message
