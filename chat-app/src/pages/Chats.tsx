import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { createOutline } from 'ionicons/icons';
import data from '../Data';
import "./Chats.css";

const Chats: React.FC = () => {
  return (
    <IonPage>
     <IonHeader>
        <IonToolbar>
          <IonTitle>Chats</IonTitle>
          <IonButtons className='text-2xl' slot='end'>
            <IonButton>
              <IonIcon  icon={createOutline} />
            </IonButton>
          </IonButtons>
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

        <IonList>
          {data.map((item, index) => { 
            return (
              <IonItem className='height' key={index}>
                <IonAvatar className='img' slot='start'>
                  <img src={item.image} alt="Silhouette of a person's head" />
                </IonAvatar>
                
                <IonLabel>
                  <IonLabel> {item.name} </IonLabel>
                  
                  <p> {item.description} </p>
                </IonLabel>

                <p> {item.date} </p>
              </IonItem>
            )
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Chats;
