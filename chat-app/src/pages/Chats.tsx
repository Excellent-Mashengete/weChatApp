import { IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import data from '../Data';
import "./Chats.css";

const Chats: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Chats</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonList>
          {data.map((item, index) => { 
            return (
              <IonItem className='height' key={index}>
                <IonAvatar className='img'>
                  <img src={item.image} alt={"user id"} />
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
