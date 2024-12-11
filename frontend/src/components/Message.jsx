const Message = () => {
  return (
    <div className="chat chat-end group">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src=""/>
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-500">You were the Chosen One!</div>
      <div className="chat-footer text-xs flex gap-1 items-center">
        <time className=" opacity-0 group-hover:opacity-50 transition-opacity duration-500">2 hours ago</time>
      </div>
    </div>

  )
}

export default Message
