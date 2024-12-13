import useGetusers from "../hooks/useGetUsers";
import Conversation from "./Conversation"

const Conversations = () => {
  const {loading, users} = useGetusers();

  return (
    <div className="flex flex-col overflow-auto py-2">
      {loading ? <span className="loading loading-spinner"></span> : null}
      {users.map((user, index)=>{
        return (<Conversation key={user._id}
          user={user}
          lastIndex={index === users.length-1}
        />
      )})}
      
    </div>
  )
}

export default Conversations
