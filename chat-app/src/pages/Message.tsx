import { IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonPage, IonTextarea, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { callOutline, videocamOutline, sendSharp, add, camera, cameraOutline, sendOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { decodedToken } from '../helpers/helpers';
import SingleUser  from "../service/messages";
import "./Messages.css";

const Messages: React.FC <RouteComponentProps> = (props) => {
  const [userData] = useState<any>(props.history.location.state);
  const [message, setMessage] = useState([]);
  const [message_Text, setMessageText] = useState();
  const [recipient, setRecipient] = useState('');
  const [messages, setMessages] = useState([]);
  const history = useHistory();

  function RetrieveMessages(){
    const data = {
      sender_id: decodedToken().id,
      recipient_id: userData.data.id
    }

    SingleUser.getMessages(data).then(res => {
      setMessage(res.data.userMessages);
    })
  }

  useEffect(() =>{
    RetrieveMessages();
  },[])

  const Viewcontact = () => {
    history.push('/viewcontact', userData);
  }
  
  function sendTextMessages(event:any){
    event.preventDefault();
    const data = {
      sender_id: decodedToken().id,
      recipient_id: userData.data.id,
      message_text: message_Text
    }

    SingleUser.sendTextMessages(data).catch((error) => {
      console.log(error);
    }).finally(() => {
      RetrieveMessages();
    })
  }
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar> 
          <IonButtons slot="start">
            <IonBackButton defaultHref='/chats'></IonBackButton>
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
      {message.length !== 0 ?
          <IonContent className='ml-4' fullscreen > 
            {message.map((item:any) => {
              return (
                <div key={item.id}  >
                  {item.user_id !== decodedToken().id ?
                    (
                      <div className="chat chat-start" >
                        <div className="chat-image avatar">
                          <div className="w-10 rounded-full">
                            <img src={userData.data.avatar} onClick={Viewcontact}  />
                          </div>
                        </div>
                        <div className="chat-bubble chat-bubble-primary">{item.messages}</div>
                      </div>
                    ):(
                      <div className="chat chat-end mb-5 mt-5 ">
                        <div className="chat-image avatar">
                          <div className="w-10 rounded-full">
                            <img src={decodedToken().avatar}  />
                          </div>
                        </div>
                        <div className="chat-bubble chat-bubble-accent" >{item.messages}</div>
                      </div>
                    )
                  }
                </div>
              )
            })}
          </IonContent>
        :
        <IonContent fullscreen>

        </IonContent>
      }


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
                <IonButton type='submit' onClick={sendTextMessages} >
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