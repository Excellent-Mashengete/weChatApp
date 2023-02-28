import { IonAvatar, IonBadge, IonItem, IonLabel } from "@ionic/react";
import { Chats } from "../interface/Contacts";

const ChatList: React.FC<Chats> = ({name, avatar, group_id, phone, username, lastMessage, datesend}) => {

    return (
        <IonItem className='height'>
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