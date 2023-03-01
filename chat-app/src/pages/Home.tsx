import {IonButton, IonContent, IonImg, IonPage} from '@ionic/react';
import image from '../assets/chat.png';

const Home: React.FC = () => {
    return (
      <IonPage>
        <IonContent fullscreen>
          <div className='home'>
            <div className='flex justify-center mb-28'>
              <IonImg className='w-56' src={image} alt="" />
            </div>

            <IonButton fill="solid" className='h-14' routerLink="/auth/signup" expand="block" color="danger">Start Messages</IonButton>
          </div>
        </IonContent>
      </IonPage>
    );
};
  
export default Home;