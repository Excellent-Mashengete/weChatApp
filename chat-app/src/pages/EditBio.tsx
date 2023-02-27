import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCardSubtitle, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonModal, IonNote, IonPage, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import contacts from "../dummpData/contacts.json";
import ContactList from '../components/ContactsList';
import { pencil } from 'ionicons/icons';

const EditBio: React.FC <RouteComponentProps> = (props) => {
    const [userData] = useState<any>(props.history.location.state);
    console.log(userData.users.description);
    const modal = useRef<HTMLIonModalElement>(null);

    function dismiss() {
      modal.current?.dismiss();
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar> 
                    <IonButtons slot="start">
                        <IonBackButton defaultHref='/app/settings'></IonBackButton>
                    </IonButtons>

                    <IonTitle>About</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonItem>
                    <IonLabel>
                        <IonCardSubtitle> Currently set to</IonCardSubtitle>
                        <IonItem>
                            <IonLabel>{userData.users.description}</IonLabel>  
                            <IonButtons className='videoCall' slot="end" id="open-modal">
                                <IonIcon color="primary" icon={pencil} />
                            </IonButtons>
                        </IonItem> 
                    </IonLabel>  
                </IonItem>


                <IonModal id="example-modal" ref={modal} trigger="open-modal">
                    <IonContent>
                        <IonItem counter={true} fill="solid" className='mt-10'>
                            <IonLabel position="floating">Bio</IonLabel>
                            <IonInput type="text" clearOnEdit={false}  maxlength={130} max={130} name="password" />
                           
                        </IonItem>        
                    </IonContent>
                </IonModal>
            </IonContent>
        </IonPage>
    );
}

export default EditBio;


/*<IonTitle>Modal</IonTitle>
                            <IonButtons slot="end">
                                <IonButton color="light" onClick={() => dismiss()}>
                                Close
                                </IonButton>
                            </IonButtons>
                            */