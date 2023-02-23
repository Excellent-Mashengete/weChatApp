import { IonAvatar, IonBackButton, IonButtons, IonContent, IonHeader,  IonItem,  IonLabel,  IonList,  IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import Skeleton from 'react-loading-skeleton';
import Users from '../../service/users';
import "./Chats.css";

import ContactList from '../../components/ContactsList';

const Contacts: React.FC <RouteComponentProps> = (props)=> {
    const [chats, setChats] = useState([]);

    // useEffect(() =>{
    //     Users.getUser(1).then(res => {
    //         setChats(res.data.users);
    //     })
    // },[])
  
    function viewMessages(user:any){    
        props.history.push('/messages', {data: user})
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Contacts</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Contacts</IonTitle>
                    </IonToolbar>
                </IonHeader> 
                <ContactList />
            </IonContent>
        </IonPage>
    );
}

export default Contacts;