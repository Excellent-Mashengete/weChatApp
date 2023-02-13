import { IonAvatar, IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { add } from 'ionicons/icons';
import "./Messages.css";

const Viewcontact: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref='/messages'></IonBackButton>
          </IonButtons>
          <IonTitle>Contact Info</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Here's a small text description for the card content. Nothing more, nothing less.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardContent>
            <IonLabel>Here's a small text description for the card content. Nothing more, nothing less.</IonLabel>
            <p>22 October 2022</p>
          </IonCardContent>
        </IonCard>

       
        <IonLabel className='groups'>3 Groups in Common</IonLabel>
    
        <IonCard>
          <IonItem className='height'>
            <IonAvatar className='img' slot='start'>
              <IonFab >
                <IonFabButton>
                  <IonIcon icon={add}></IonIcon>
                </IonFabButton>
              </IonFab>
            </IonAvatar>
  
            <IonLabel>
              <IonLabel> Create Group with  </IonLabel>
            </IonLabel>
          </IonItem>

          <IonItem className='height'>
            <IonAvatar slot='start'>
              <img src={"https://ionicframework.com/docs/img/demos/avatar.svg"} alt="Silhouette of a person's head" />
            </IonAvatar>
                
            <IonLabel>
              <IonLabel> {"FS IT:Sys Sup"} </IonLabel>
                  
              <p> {"item.description"} </p>
            </IonLabel>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonItem className='danger'>
            <IonLabel>Share Contact </IonLabel>
          </IonItem>

          <IonItem className='danger'>
            <IonLabel>Clear Chats</IonLabel>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonItem className='danger'>
              <IonLabel>Block </IonLabel>
            </IonItem>
            <IonItem className='danger'>
              <IonLabel>Report Item</IonLabel>
            </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
  
export default Viewcontact;