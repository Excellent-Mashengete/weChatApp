import { IonBackButton, IonButton, IonButtons, IonContent, IonFabButton, IonFooter, IonHeader, IonIcon, IonItem, IonPage, IonSpinner, IonTextarea, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { callOutline, videocamOutline, add, cameraOutline, sendOutline, send, attach } from 'ionicons/icons';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { decodedToken } from '../helpers/helpers';
import "./Messages.css";
import messages from "../dummpData/messages.json";

const Messages: React.FC <RouteComponentProps> = (props) => {
  const [userData] = useState<any>(props.history.location.state);
  const [message_Text, setMessageText] = useState<any[]>([]);
  const history = useHistory();

  console.log(userData);
  
  function Viewcontact() {
    props.history.push("/viewcontact", {userData});
  }

  function allDms() {
    console.log(messages.data);     
  }

  function videoCall() {
    console.log("Make video callls");
  }

  function voiceCall() {
    console.log("Make voice callls");   
  }

  useEffect(() =>{
    allDms();
  },[])

  return (
    <IonPage className='mess'>
      <IonHeader>
        <IonToolbar> 
          <IonButtons slot="start">
            <IonBackButton defaultHref='/app/chats'></IonBackButton>
          </IonButtons>

          <IonTitle  className='w-96'>{userData.data.name}</IonTitle>

          <IonButtons className='videoCall' onClick={videoCall} slot="end">
            <IonIcon color="primary" icon={videocamOutline} />
          </IonButtons>

          <IonButtons className='voiceCall' onClick={voiceCall} slot="end">
            <IonIcon color="primary" icon={callOutline} />
          </IonButtons>

        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className='h-28'> 
      
        <div className='mt-5'>
          <div className="chat chat-start" >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={userData.data.avatar} onClick={Viewcontact} alt="Silhouette of a person's head" />
              </div>
            </div>
            
            <div className="chat-bubble bg-white text-black dark:text-white dark:bg-slate-800 ">fjteryuiouytsrdhtjfkgljhgfsdhjrfpe</div>
            <div className="chat-footer opacity-50">12:46 </div>
          </div>
                  
          <div className="chat chat-end mb-5 mt-5 ">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={decodedToken().avatar} alt="Silhouette of a person's head" />
              </div>
            </div>

            <div className="chat-bubble chat-sender" >DdhtfjygkuhlkjhgdjfkJKWR </div>
            <div className="chat-footer opacity-50">12:46 </div>
          </div>        
        </div>

        <div className='mt-5'>
          <div className="chat chat-start" >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={userData.data.avatar} onClick={Viewcontact} alt="Silhouette of a person's head" />
              </div>
            </div>
            
            <div className="chat-bubble bg-white text-black dark:text-white dark:bg-slate-800 ">fjteryuiouytsrdhtjfkgljhgfsdhjrfpe</div>
            <div className="chat-footer opacity-50">12:46 </div>
          </div>
                  
          <div className="chat chat-end mb-5 mt-5 ">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={decodedToken().avatar} alt="Silhouette of a person's head" />
              </div>
            </div>

            <div className="chat-bubble chat-sender" >DdhtfjygkuhlkjhgdjfkJKWR </div>
            <div className="chat-footer opacity-50">12:46 </div>
          </div>        
        </div>


        <div className='mt-5'>
          <div className="chat chat-start" >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={userData.data.avatar} onClick={Viewcontact} alt="Silhouette of a person's head" />
              </div>
            </div>
            
            <div className="chat-bubble bg-white text-black dark:text-white dark:bg-slate-800 ">fjteryuiouytsrdhtjfkgljhgfsdhjrfpe</div>
            <div className="chat-footer opacity-50">12:46 </div>
          </div>
                  
          <div className="chat chat-end mb-5 mt-5 ">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={decodedToken().avatar} alt="Silhouette of a person's head" />
              </div>
            </div>

            <div className="chat-bubble chat-sender" >DdhtfjygkuhlkjhgdjfkJKWR </div>
            <div className="chat-footer opacity-50">12:46 </div>
          </div>        
        </div>

        <div className='mt-5'>
          <div className="chat chat-start" >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={userData.data.avatar} onClick={Viewcontact} alt="Silhouette of a person's head" />
              </div>
            </div>
            
            <div className="chat-bubble bg-white text-black dark:text-white dark:bg-slate-800 ">fjteryuiouytsrdhtjfkgljhgfsdhjrfpe</div>
            <div className="chat-footer opacity-50">12:46 </div>
          </div>
                  
          <div className="chat chat-end mb-5 mt-5 ">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={decodedToken().avatar} alt="Silhouette of a person's head" />
              </div>
            </div>

            <div className="chat-bubble chat-sender" >DdhtfjygkuhlkjhgdjfkJKWR </div>
            <div className="chat-footer opacity-50">12:46 </div>
          </div>        
        </div>


        <div className='mt-5'>
          <div className="chat chat-start" >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={userData.data.avatar} onClick={Viewcontact} alt="Silhouette of a person's head" />
              </div>
            </div>
            
            <div className="chat-bubble bg-white text-black dark:text-white dark:bg-slate-800 ">fjteryuiouytsrdhtjfkgljhgfsdhjrfpe</div>
            <div className="chat-footer opacity-50">12:46 </div>
          </div>
                  
          <div className="chat chat-end mb-5 mt-5 ">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={decodedToken().avatar} alt="Silhouette of a person's head" />
              </div>
            </div>

            <div className="chat-bubble chat-sender" >DdhtfjygkuhlkjhgdjfkJKWR </div>
            <div className="chat-footer opacity-50">12:46 </div>
          </div>        
        </div>



        <div className='mt-5'>
          <div className="chat chat-start" >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={userData.data.avatar} onClick={Viewcontact} alt="Silhouette of a person's head" />
              </div>
            </div>
            
            <div className="chat-bubble bg-white text-black dark:text-white dark:bg-slate-800 ">fjteryuiouytsrdhtjfkgljhgfsdhjrfpe</div>
            <div className="chat-footer opacity-50">12:46 </div>
          </div>
                  
          <div className="chat chat-end mb-5 mt-5 ">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={decodedToken().avatar} alt="Silhouette of a person's head" />
              </div>
            </div>

            <div className="chat-bubble chat-sender" >DdhtfjygkuhlkjhgdjfkJKWR </div>
            <div className="chat-footer opacity-50">12:46 </div>
          </div>        
        </div>


        <div className='mt-5'>
          <div className="chat chat-start" >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={userData.data.avatar} onClick={Viewcontact} alt="Silhouette of a person's head" />
              </div>
            </div>
            
            <div className="chat-bubble bg-white text-black dark:text-white dark:bg-slate-800 ">fjteryuiouytsrdhtjfkgljhgfsdhjrfpe</div>
            <div className="chat-footer opacity-50">12:46 </div>
          </div>
                  
          <div className="chat chat-end mb-5 mt-5 ">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={decodedToken().avatar} alt="Silhouette of a person's head" />
              </div>
            </div>

            <div className="chat-bubble chat-sender" >DdhtfjygkuhlkjhgdjfkJKWR </div>
            <div className="chat-footer opacity-50">12:46 </div>
          </div>        
        </div>


        <div className='mt-5'>
          <div className="chat chat-start" >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={userData.data.avatar} onClick={Viewcontact} alt="Silhouette of a person's head" />
              </div>
            </div>
            
            <div className="chat-bubble bg-white text-black dark:text-white dark:bg-slate-800 ">fjteryuiouytsrdhtjfkgljhgfsdhjrfpe</div>
            <div className="chat-footer opacity-50">12:46 </div>
          </div>
                  
          <div className="chat chat-end mb-5 mt-5 ">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={decodedToken().avatar} alt="Silhouette of a person's head" />
              </div>
            </div>

            <div className="chat-bubble chat-sender" >DdhtfjygkuhlkjhgdjfkJKWR </div>
            <div className="chat-footer opacity-50">12:46 </div>
          </div>        
        </div>



        <div className='mt-5'>
          <div className="chat chat-start" >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={userData.data.avatar} onClick={Viewcontact} alt="Silhouette of a person's head" />
              </div>
            </div>
            
            <div className="chat-bubble bg-white text-black dark:text-white dark:bg-slate-800 ">fjteryuiouytsrdhtjfkgljhgfsdhjrfpe</div>
            <div className="chat-footer opacity-50">12:46 </div>
          </div>
                  
          <div className="chat chat-end mb-5 mt-5 ">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={decodedToken().avatar} alt="Silhouette of a person's head" />
              </div>
            </div>

            <div className="chat-bubble chat-sender" >DdhtfjygkuhlkjhgdjfkJKWR </div>
            <div className="chat-footer opacity-50">12:46 </div>
          </div>        
        </div>
      </IonContent>

      <IonFooter className='border-none   bg-transparent'>
        <div className='flex foot h-16'>
          <IonToolbar className='rounded-2xl '>
          <IonItem detail={false} lines="none" className=' max-h-40 overflow-y-auto'>
              <IonButtons  >
                <IonButton className='text-lg' >
                  <IonIcon color="primary" icon={attach} />
                </IonButton>
              </IonButtons>
              
              <div className="">
                <IonTextarea onIonChange={(event:any) => setMessageText(event.target.value)} className='custom-textarea ' autoGrow={true} placeholder="Message"  />
              </div>

              <IonButtons >
                <IonButton >
                  <IonIcon color="primary" icon={cameraOutline} />
                </IonButton>
              </IonButtons>
            </IonItem>
          </IonToolbar>
          
          <IonButtons className='ml-2' >
            <IonFabButton type='submit' >
              <IonIcon  icon={send} />
            </IonFabButton>
          </IonButtons>
        </div>
      </IonFooter>

    </IonPage>
  );
}

export default Messages;

/* <IonItem detail={false} lines="none" className=' max-h-40 overflow-y-auto'>
              <IonButtons  >
                <IonButton className='text-lg' >
                  <IonIcon color="primary" icon={attach} />
                </IonButton>
              </IonButtons>
              
              <div className="">
                <IonTextarea onIonChange={(event:any) => setMessageText(event.target.value)} className='custom-textarea ' autoGrow={true} placeholder="Message"  />
              </div>

              <IonButtons >
                <IonButton >
                  <IonIcon color="primary" icon={cameraOutline} />
                </IonButton>
              </IonButtons>
            </IonItem>
            */