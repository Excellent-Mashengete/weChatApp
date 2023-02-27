import { IonAvatar, IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { add, callSharp, chatboxSharp, videocamSharp } from 'ionicons/icons';
import { useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import "./Messages.css";

const Viewcontact: React.FC <RouteComponentProps> = (props) => {
  const [userData] = useState<any>(props.history.location.state);
  console.log(userData.userData.data);
  const history = useHistory();
 
  function videoCall() {
    console.log("Make video callls");
  }

  function voiceCall() {
    console.log("Make voice callls");   
  }

  function goBack() {
    history.push('/messages')
  }

  return (
    <IonPage class='mess'>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref='/messages'></IonBackButton>
          </IonButtons>
          <IonTitle>Contact Info</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div >
          <img className='h-72 w-full' src={userData.userData.data.avatar} alt="" />
        </div>

        <IonCard className='shadow-none'>
          <IonCardHeader className='text-center'>
            <IonCardTitle>{userData.userData.data.name}</IonCardTitle>
            <IonCardSubtitle>{userData.userData.data.phone}</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent >
            <IonItem  detail={false} lines="none">
              <IonLabel>
                <IonButtons className='voiceCall justify-center' onClick={goBack}>
                  <IonIcon color="primary" icon={chatboxSharp} />
                </IonButtons>
                <IonLabel className='mt-2 text-center'>Message</IonLabel>
              </IonLabel>

              <IonLabel>
                <IonButtons className='voiceCall justify-center' onClick={voiceCall}>
                  <IonIcon color="primary" icon={callSharp} />
                </IonButtons>
                <IonLabel className='mt-2 text-center'>Audio</IonLabel>
              </IonLabel>

              <IonLabel>
                <IonButtons className='videoCall justify-center' onClick={videoCall} slot="end">
                  <IonIcon color="primary" icon={videocamSharp} />
                </IonButtons>
                <IonLabel className='mt-2 text-center'>Video</IonLabel>
              </IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardContent>
            <IonLabel> {userData.userData.data.description}</IonLabel>
            <p>22 October 2022</p>
          </IonCardContent>
        </IonCard>

       
        <IonLabel className='groups'>3 Groups in Common</IonLabel>
    
        <IonCard>
          <IonItem className='height'>
            <IonAvatar className='img' slot='start'>
              <IonFab >
                <IonFabButton>
                  <IonIcon icon={add}></IonIcon>
                </IonFabButton>
              </IonFab>
            </IonAvatar>
  
            <IonLabel>
              <IonLabel> Create Group with  </IonLabel>
            </IonLabel>
          </IonItem>

          <IonItem className='height'>
            <IonAvatar slot='start'>
              <img src={"https://ionicframework.com/docs/img/demos/avatar.svg"} alt="Silhouette of a person's head" />
            </IonAvatar>
                
            <IonLabel>
              <IonLabel> {"FS IT:Sys Sup"} </IonLabel>
                  
              <p> {"item.description"} </p>
            </IonLabel>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonItem className='danger'>
            <IonLabel>Share Contact </IonLabel>
          </IonItem>

          <IonItem className='danger'>
            <IonLabel>Clear Chats</IonLabel>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonItem className='danger'>
              <IonLabel>Block </IonLabel>
            </IonItem>
            <IonItem className='danger'>
              <IonLabel>Report Item</IonLabel>
            </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
  
export default Viewcontact;