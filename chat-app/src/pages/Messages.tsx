import { IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { callOutline, ellipsisVerticalOutline, videocamOutline } from 'ionicons/icons';
import { useState } from 'react';
import { BsFillTelephonePlusFill, BsTelephonePlus } from 'react-icons/bs'
import { RouteComponentProps } from 'react-router-dom';
import Back from '../components/backButton';
import HeaderIcons from '../components/HeaderIcons';
import "./Messages.css";

const Messages: React.FC <RouteComponentProps> = (props) => {
    const [user] = useState<any>(props.history.location.state);
    console.log(user.state.group_id);
    
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
                    {!user.state.group_id ?
                            <>
                                <HeaderIcons slot={'end'} classty={"video"} videoCall={videoCall} color={'primary'} icon={videocamOutline}  />
                                <HeaderIcons slot={'end'} classty={"voice"} videoCall={voiceCall} color={'primary'} icon={callOutline} />
                                <HeaderIcons slot={'end'} classty={"ellipsis"} videoCall={videoCall} color={'primary'} icon={ellipsisVerticalOutline}  />
                            </>
                        :
                            <>
                                {/* <HeaderIcons slot={'end'} classty={"voice"} videoCall={voiceCall} color={'primary'} icon={<BsTelephonePlus style={{fontSize: "25px"}} />} /> */}
                                <HeaderIcons slot={'end'} classty={"ellipsis"} videoCall={videoCall} color={'primary'} icon={ellipsisVerticalOutline}  /> 
                            </>
                    }
               </IonToolbar>
            </IonHeader >

            <IonContent fullscreen > 

            </IonContent>
        </IonPage>
    );
}

export default Messages;