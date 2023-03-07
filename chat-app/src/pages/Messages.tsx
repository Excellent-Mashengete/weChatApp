import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { callOutline, ellipsisVerticalOutline, videocamOutline } from 'ionicons/icons';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { pop } from '../data/PopOverMenu';
import Back from '../components/backButton';
import HeaderIcons from '../components/HeaderIcons';
import Popover from '../components/PopOverList';
import TypingArea from '../components/TypingArea';
import ChatMessages from '../components/ChatsMessages';
import "./Messages.css";
import { decodedToken } from '../helpers/helpers';

const Messages: React.FC <RouteComponentProps> = (props) => {
    const [user] = useState<any>(props.history.location.state);
    console.log(user.state.avatar);
    
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

                    <IonTitle className='w-96'>{user.state.name}</IonTitle>

                    <HeaderIcons id={''} slot={'end'} classty={"video"} videoCall={videoCall} color={'primary'} icon={videocamOutline}  />
                    <HeaderIcons id={''}  slot={'end'} classty={"voice"} videoCall={voiceCall} color={'primary'} icon={callOutline} />
                    <HeaderIcons id={"popover-button"} slot={'end'} classty={"ellipsis"} videoCall={videoCall} color={'primary'} icon={ellipsisVerticalOutline}  />

                </IonToolbar>
                <Popover user={user} list={pop} />
            </IonHeader >
            
            <IonContent fullscreen   style={{"--background": "var(--ion-color-light)"}} > 
            <ChatMessages avatar={user.state.avatar}  loggedAvatar={decodedToken().avatar}/>
            </IonContent>
            <TypingArea />
        </IonPage>
    );
}

export default Messages;