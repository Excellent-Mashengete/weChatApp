import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Viewcontact: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          
          <IonButtons slot="start">
            <IonBackButton defaultHref='/messages'></IonBackButton>
          </IonButtons>

        </IonToolbar>
      </IonHeader>

      <IonContent>
        
      </IonContent>
    </IonPage>
  );
};
  
export default Viewcontact;