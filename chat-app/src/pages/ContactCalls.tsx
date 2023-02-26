import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar, RefresherEventDetail } from '@ionic/react';
import { personAdd, people } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ContactList from '../components/ContactsList';
import contacts from "../dummpData/contacts.json";

const Calls: React.FC = ()=> {
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
                        
                    <IonTitle  className='w-96'>Select contact</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent scrollX={true} >

                <IonItem button lines="none" detail={false} >
                    <IonIcon icon={people} slot="start" color="primary"></IonIcon>
                    <IonLabel>New group call</IonLabel>
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

export default Calls;