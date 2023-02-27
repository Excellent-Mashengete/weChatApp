import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import UserSettings from '../../components/UserSettings';
import { decodedToken } from '../../helpers/helpers';
const image = 'https://avatarfiles.alphacoders.com/975/97500.jpg'
const Settings: React.FC = () => {
  console.log(decodedToken());
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <img src={image} alt="" />
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <UserSettings />
      </IonContent>
    </IonPage>
  );
};

export default Settings;
