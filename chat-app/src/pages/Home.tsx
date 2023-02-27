import { IonContent, IonGrid, IonIcon, IonPage} from '@ionic/react';
import { videocamOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';

const Home: React.FC = () => {
    const history = useHistory();
    return (
        <IonPage>    
            <IonContent  className='auth-form' fullscreen>
                <IonGrid >
                    <IonIcon onClick={() => history.push("/app/chats")} color="primary" icon={videocamOutline} />
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Home;
