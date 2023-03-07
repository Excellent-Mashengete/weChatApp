
interface ChatsContainer{
    avatar: string;
    loggedAvatar: string;
}
const ChatMessages: React.FC<ChatsContainer> = ({avatar, loggedAvatar}) => {
    return (
        <div className='mt-5'  >
            <div className="chat chat-start" >
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={avatar} alt="Silhouette of a person's head" />
                    </div>
                </div>
                    
                <div className="chat-bubble bg-white text-black dark:text-white dark:bg-slate-800 ">fjteryuiouytsrdhtjfkgljhgfsdhjrfpe</div>
                <div className="chat-footer opacity-50">12:46 </div>
            </div>
                  
            <div className="chat chat-end mb-5 mt-5 ">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={loggedAvatar} alt="Silhouette of a person's head" />
                    </div>
                </div>

                <div className="chat-bubble chat-sender" >DdhtfjygkuhlkjhgdjfkJKWR </div>
                <div className="chat-footer opacity-50">12:46 </div>
            </div>        
        </div>
    );
};
  
export default ChatMessages;