import { IonBackButton, IonButtons, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import contacts from "../dummpData/contacts.json";
import ContactList from '../components/ContactsList';

const NewGroup: React.FC = ()=> {
    const [getContactList, setContact] = useState<any[]>([]);
    const history = useHistory();

    function allRegistredUsers() {
        setContact(contacts.data)        
    }
    
    useEffect(() =>{
        allRegistredUsers();
    },[])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar> 
                    <IonButtons slot="start">
                        <IonBackButton defaultHref='/app/chats'></IonBackButton>
                    </IonButtons>
                    { isPlatform('android')?
                            <IonLabel >
                                <IonTitle>New group</IonTitle>
                                <IonTitle className='text-sm'>Add participants</IonTitle>
                            </IonLabel>
                        :
                            <IonLabel >
                                <IonTitle>New group</IonTitle>
                            </IonLabel>
                    }
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <ContactList contacts={getContactList} />
            </IonContent>
        </IonPage>
    );
}

export default NewGroup;