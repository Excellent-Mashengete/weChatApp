import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { callOutline, videocamOutline } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router-dom';
import Back from '../components/backButton';
import VideoCall from '../components/VideoCall';
import VoiceCall from '../components/VoiceCall';
import "./Messages.css";

const Messages: React.FC <RouteComponentProps> = (props) => {

    function videoCall() {
        console.log("Make video callls");
    }
    
    function voiceCall() {
        console.log("Make voice callls");   
    }

    return (
        <IonPage className='mess'>
            <IonHeader>
                <IonToolbar> 
                   <Back slot={'start'} href={'/app/chats'} />

                    <IonTitle className='w-96'>Excellent</IonTitle>

                    <VideoCall slot={'end'} videoCall={videoCall} color={'primary'} icon={videocamOutline} />
                   
                   <VoiceCall slot={'end'} voiceCall={voiceCall} color={'primary'} icon={callOutline} />
                </IonToolbar>
            </IonHeader >

            <IonContent fullscreen > 

            </IonContent>
        </IonPage>
    );
}

export default Messages;