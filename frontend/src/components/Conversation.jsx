import { useSocketContext } from '../context/SocketContext';
import useConversation from '../store/useConversation'

const Conversation = ({user, lastIndex}) => {
  const {selectedConversation, setSelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer 
      ${isSelected ? "bg-sky-500" : ""}`}
      onClick={() => setSelectedConversation(user)}>
        
        <div className={`avatar ${isOnline ? 'online' : 'offline'}`}>
          <div className="w-12 rounded-full">
            <img src={user.profilePic} alt="USER AVATAR" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200 ">{user.fullName}</p>
            <span className="text-xl"></span>
          </div>
        </div>
      </div>
      {!lastIndex && <div className="divider my-0 py-0 h-1"/>}
    </>
  )
}

export default Conversation
