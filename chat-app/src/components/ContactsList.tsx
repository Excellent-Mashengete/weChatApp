import { IonAvatar, IonContent, IonIcon, IonItem, IonLabel, IonList, IonRefresher, IonRefresherContent, IonSkeletonText, IonText, IonToolbar, RefresherEventDetail } from "@ionic/react";
import { personAdd } from "ionicons/icons";
import { Contacts } from '@capacitor-community/contacts';
import { StatusBar } from '@capacitor/status-bar';
import { data, contacts } from '../Data';
import { useEffect, useState } from "react";

const ContactList: React.FC = () => {
    const numrows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4];
    const [contList, setContacts] = useState();

    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {

          // Any calls to load data go here
          event.detail.complete();
        }, 2000);
    }

    const retrieveListOfContacts = async () => {
        let permission = await Contacts.requestPermissions();
        if (!permission) {
            return;
        }else{
            const projection = {
                // Specify which fields should be retrieved.
                name: true,
                phones: true,
                postalAddresses: true,
            };

            const result = await Contacts.getContacts({projection});
            console.log(result);
        }
    }

    useEffect(() => {
        retrieveListOfContacts();
    },[])

    console.log(contList);
    
    
    return (
        <IonContent>
            <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                <IonRefresherContent></IonRefresherContent>
            </IonRefresher>
            
            <IonList>
                <IonItem button lines="none" detail={false} >
                    <IonIcon icon={personAdd} slot="start" color="primary"></IonIcon>
                    <IonLabel>New contact</IonLabel>
                </IonItem>

                {/* skeleton loading */}
                <IonItem detail={false} lines="none">
                    <IonAvatar className="avatar" slot="start">
                        <IonSkeletonText ></IonSkeletonText>
                    </IonAvatar>

                    <IonLabel>
                        <IonSkeletonText animated={true} style={{"width": "30%"}}></IonSkeletonText>
                        <IonSkeletonText animated={true} style={{"width": "30%"}}></IonSkeletonText>
                    </IonLabel>
                </IonItem>

                {/* Registered loading */}
                {contacts.length > 0  &&
                    <div className="mt-2">
                    <IonText className="px-1 m-4 ">Contants on LiveChat Box</IonText>
                    {contacts.map((item:any) => { 
                        return (    
                            <IonItem button detail={false} lines="none" className='height' key={item.id} >
                                <IonAvatar className='img' slot="start" class="avatar">
                                    <img src={item.avatar} alt="Silhouette of a person's head" />
                                </IonAvatar>

                                <IonLabel>
                                    {item.name }
                                    <p className="pt-1">{ item.cellphone }</p>
                                </IonLabel>
                            </IonItem>
                        ); 
                    })}
                    </div> 
                } 


                 {/* Not Registered loading */}
            </IonList>
        </IonContent>

    );
};

export default ContactList;
