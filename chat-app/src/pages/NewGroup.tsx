import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { search } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import contacts from "../dummpData/contacts.json";
import ContactList from '../components/ContactsList';

const NewGroup: React.FC = ()=> {
    const [seachData, setSearchData] = useState(false);
    const [getContactList, setContact] = useState<any[]>([]);

    function allRegistredUsers() {
        setContact(contacts.data)        
    }
    
    useEffect(() =>{
        allRegistredUsers();
    },[])

    const history = useHistory();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar> 
                    <IonButtons slot="start" onClick={() => setSearchData(false)}>
                        <IonBackButton defaultHref='/app/chats'></IonBackButton>
                    </IonButtons>
                    { seachData === false 
                        ?
                            <>
                                <IonLabel >
                                        <IonTitle>New group</IonTitle>
                                        <IonTitle className='text-sm'>Add participants</IonTitle>
                                </IonLabel>

                                <IonButtons className='voiceCall' slot="end">
                                    <IonIcon color="primary"  onClick={() => setSearchData(true)} icon={search} />
                                </IonButtons>
                            </>
                        :
                            <IonToolbar>
                                <IonSearchbar></IonSearchbar>
                            </IonToolbar>  
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