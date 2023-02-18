import { IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { callOutline, videocamOutline, add, cameraOutline, sendOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { decodedToken } from '../helpers/helpers';
import SingleUser  from "../service/messages";
import "./Messages.css";

const Messages: React.FC <RouteComponentProps> = (props) => {
  const [userData] = useState<any>(props.history.location.state);
  const [message_Text, setMessageText] = useState();
  const history = useHistory();

  console.log(userData);

  function Viewcontact() {
    props.history.push("/viewcontact");
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar> 
          <IonButtons slot="start">
            <IonBackButton defaultHref='/app/chats'></IonBackButton>
          </IonButtons>

          <IonTitle  className='w-96'>{userData.data.name}</IonTitle>

          <IonButtons className='videoCall' slot="end">
            <IonIcon color="primary" icon={videocamOutline} />
          </IonButtons>

          <IonButtons className='voiceCall' slot="end">
            <IonIcon color="primary" icon={callOutline} />
          </IonButtons>

        </IonToolbar>
      </IonHeader>

      <IonContent className='ml-4' fullscreen > 
        <div className='mt-5'>
          <div className="chat chat-start" >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={userData.data.avatar} onClick={Viewcontact} alt="Silhouette of a person's head" />
              </div>
            </div>
            
            <div className="chat-bubble chat-bubble-light">fjrfpe</div>
          </div>
                  
          <div className="chat chat-end mb-5 mt-5 ">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={decodedToken().avatar} alt="Silhouette of a person's head" />
              </div>
            </div>
          <div className="chat-bubble chat-bubble-primary" >
            DJKWR
            <div className="chat-footer opacity-50">12:46 </div>
          </div>
          
        </div>        
        </div>
      </IonContent>

      <IonFooter >
      {isPlatform('ios') ? 
        ( 
          <IonToolbar >
            <IonItem lines="none" >
              <IonButtons >
                <IonButton>
                  <IonIcon  icon={add}></IonIcon>
                </IonButton>
              </IonButtons>
              
              <IonItem>
                <IonTextarea value={message_Text} onIonChange={(event:any) => setMessageText(event.target.value)} className='custom-textarea' autoGrow={true} placeholder="Message"  />
              </IonItem>

              <IonButtons>
                <IonButton >
                  <IonIcon color="primary" icon={cameraOutline} />
                </IonButton>
              </IonButtons>

              <IonButtons className='ml-4 '>
                <IonButton type='submit' >
                  <IonIcon  color="primary" icon={sendOutline} />
                </IonButton>
              </IonButtons>
            </IonItem>
          </IonToolbar>
        ):
        (
          <></>)
      }
      </IonFooter>
    </IonPage>
  );
}

export default Messages;