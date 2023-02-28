import { Chats } from "../interface/Contacts";
import ChatList from "./ChatList";

interface ChatContainer{
    chats: Chats [];
}

const Contacts: React.FC<ChatContainer> = ({chats}) => {
    
    return (
        <>
            {chats.map((item:any) => { 
                return (
                    <ChatList key={item.id} name={item.name} avatar={item.avatar} group_id={item.group_id} phone={item.phone} username={item.username} lastMessage={item.lastMessage} datesend={item.datesend} />
                )
            })}  
        </>
    );
};
  
export default Contacts;