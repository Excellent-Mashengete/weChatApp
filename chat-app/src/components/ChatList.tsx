import { IonAvatar, IonBadge, IonItem, IonLabel } from "@ionic/react";
import { useHistory } from "react-router";
import { Chats } from "../interface/Contacts";

const ChatList = ({id, name, avatar, group_id, phone, username, lastMessage, datesend}:Chats) => {
    const history = useHistory();
    const messages = () => {
        history.push('/messages', {state: id})  
    }
   
    return (
        <IonItem className='height' button onClick={messages}  >
            <IonAvatar className='img' slot='start'>
                <img src={avatar} alt="Silhouette of a person's head" />
            </IonAvatar>
     
            <IonLabel>
                <IonLabel> {name} </IonLabel>
                {group_id >= 0 ? (
                    <p> {phone || username } {lastMessage} </p>
                    ):(
                        <p>{lastMessage} </p>
                    )
                }
            </IonLabel>

            <div>
                <p>{datesend}</p>
                <IonBadge className=' float-right'  slot="end">11</IonBadge>   
            </div>
        </IonItem>  
    );
};
  
export default ChatList;