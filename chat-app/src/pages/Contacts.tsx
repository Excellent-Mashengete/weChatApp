import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRefresher, IonRefresherContent, IonSearchbar, IonTitle, IonToolbar, isPlatform, RefresherEventDetail } from '@ionic/react';
import { callOutline, videocamOutline, personAdd, people } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ContactList from '../components/ContactsList';
import contacts from "../dummpData/contacts.json";

const Contacts: React.FC = ()=> {
    const history = useHistory();
    const [getContactList, setContact] = useState<any[]>([]);

    function allRegistredUsers() {
        setContact(contacts.data)        
    }
    
    useEffect(() =>{
        allRegistredUsers();
    },[])

    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
          // Any calls to load data go here
          event.detail.complete();
        }, 2000);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar> 
                    <IonButtons slot="start">
                        <IonBackButton defaultHref='/app/chats'></IonBackButton>
                    </IonButtons>
                    {isPlatform('ios') 
                        ?
                            <IonTitle  className='w-96'>New Chat</IonTitle>
                        :
                            <>
                                <IonTitle  className='w-96'>Select contact</IonTitle>
                                <IonButtons className='videoCall' slot="end">
                                    <IonIcon color="primary" icon={videocamOutline} />
                                </IonButtons>
                            </>
                    }
                </IonToolbar>
            </IonHeader>

            <IonContent>
                {isPlatform('ios') 
                    ?
                        <IonToolbar>
                            <IonSearchbar></IonSearchbar>
                        </IonToolbar>
                    :
                        null
                }

                <IonItem button lines="none" detail={false} onClick={()=> history.push('/newgroup')} >
                    <IonIcon icon={people} slot="start" color="primary"></IonIcon>
                    <IonLabel>New group</IonLabel>
                </IonItem>

                <IonItem button lines="none" detail={false} >
                    <IonIcon icon={personAdd} slot="start" color="primary"></IonIcon>
                    <IonLabel>New contact</IonLabel>
                </IonItem>

                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                
                <ContactList contacts={getContactList} />
            </IonContent>
        </IonPage>
    );
}

export default Contacts;