import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import UserSettings from '../../components/UserSettings';
import { decodedToken } from '../../helpers/helpers';
const image = 'https://avatarfiles.alphacoders.com/975/97500.jpg'
const Settings: React.FC = () => {
  const user = decodedToken()
  console.log(user);
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader >
          <img src={image} alt="" />
        </IonHeader>
        
        <UserSettings users={user}/>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
