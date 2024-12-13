import Messages from './Messages'
import MessageInput from './MessageInput'
import useConversation from '../store/useConversation'
import NoChatSelected from './NoChatSelected'
import { useEffect } from 'react'

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(()=>{
    return ()=> setSelectedConversation(null)
  },[setSelectedConversation])

  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {!selectedConversation ? (<NoChatSelected/>) : (<>
        <div className='bg-slate-500 px-4 py-2 mb-2 flex items-center gap-4'>
          <div className="w-12 rounded-full">
            <img src={selectedConversation.profilePic} alt="USER AVATAR" />
          </div>
          <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
        </div>
        <Messages/>
        <MessageInput/>
      </>)}
    </div>
  )
}

export default MessageContainer
