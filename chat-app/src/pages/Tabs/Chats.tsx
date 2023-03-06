import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonList, IonPage, IonSearchbar, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { createOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import Contacts from '../../components/ContactChats';
import chats from "../../dummpData/chats.json";

const Chats: React.FC = () => {
    const [getchats, setChats] = useState<any[]>([]);
    function allChats() {
        setChats(chats.data)        
    }
    
    useEffect(() =>{
        allChats();
    },[]);

    return (
        <IonPage>
            <IonHeader className='mr-2'>
                <IonToolbar>
                    <IonTitle>Chats</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Chats</IonTitle>
                    </IonToolbar>
                    <IonToolbar>
                        <IonSearchbar></IonSearchbar>
                    </IonToolbar>
                </IonHeader>

                <IonList className='mr-2'>
                    <Contacts chats={getchats}/>
                </IonList>
            </IonContent>
        </IonPage>
    );
};
  
export default Chats;