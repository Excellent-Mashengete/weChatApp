import { IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { callOutline, videocamOutline, sendSharp, add } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import socket from '../service/chats';
import "./Messages.css";

const Messages: React.FC <RouteComponentProps> = (props) => {
  const [userData, setUserData] = useState<any>(props.history.location.state);
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState('');
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('new message', (message) => {
      //setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  },[]);

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log("dfthgjkl")
    socket.emit('send message', message, recipient);
    setMessage('');
    setRecipient('');
  };


  useEffect(()=>{
   
  },[])

  console.log(userData.data.name);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          
          <IonButtons slot="start">
            <IonBackButton defaultHref='/chats'></IonBackButton>
          </IonButtons>

          <IonTitle className='w-96'>
            <IonItem routerLink="/viewcontact">{userData.data.name}</IonItem>
          </IonTitle>

          <IonButtons className='videoCall' slot="end">
            <IonIcon color="primary" icon={videocamOutline} />
          </IonButtons>

          <IonButtons className='voiceCall' slot="end">
            <IonIcon color="primary" icon={callOutline} />
          </IonButtons>

        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen> 
        <div className="chat chat-start">
          <div className="chat-bubble">You were the Chosen One!</div>
          <div className="chat-footer opacity-50">
            Delivered
          </div>
          
          </div>
            <div className="chat chat-end">         
            <div className="chat-bubble">I hate you!</div>
            <div className="chat-footer opacity-50">
              Seen at 12:46
          </div>
        </div>
      </IonContent>

      <IonFooter className="ion-no-border" translucent={true} collapse="fade">
        <IonToolbar className='pb-3'>
          <IonItem lines="none">
            <IonButtons id="top-start">
              <IonButton>
                <IonIcon  icon={add}></IonIcon>
              </IonButton>
            </IonButtons>
            
            <IonTextarea className='flex' autoGrow={true} placeholder="Type message"  >

            </IonTextarea>
            <IonButtons>
              <IonButton  onClick={handleSubmit}>
                <IonIcon color="primary" icon={sendSharp} />
              </IonButton>
            </IonButtons>
          </IonItem>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
}

export default Messages;