import { IonAvatar, IonBadge, IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import { chatbubbleEllipses, createOutline } from 'ionicons/icons';
import { isPlatform } from '@ionic/react';
import { decodedToken, transform } from '../../helpers/helpers';
import { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton';
import Users from '../../service/users';
import Data from '../../Data';
import "./Chats.css";

const Chats: React.FC<RouteComponentProps> = (props)=> {
  const [chats, setChats] = useState([]);
  
  function viewMessages(user:any){    
    props.history.push('/messages', {data: user})
  }


  return (
    <IonPage>
     <IonHeader>
        <IonToolbar>
          <IonTitle>Chats</IonTitle>
          <IonButtons className='text-2xl' slot='end'>
            {isPlatform('ios') ? ( 
                <IonButton className='text-3xl' slot='end'>
                  <IonIcon icon={createOutline} />
                </IonButton> )
              :null
            }
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Chats</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonSearchbar></IonSearchbar>
          </IonToolbar>
        </IonHeader> 

        <IonList>
          {Data.map((item:any) => { 
            return (
              <IonItem className='height' key={item.id} onClick={() => {viewMessages(item)}}>
                 <IonAvatar className='img' slot='start'>
                  <img src={item.avatar || <Skeleton />} alt="Silhouette of a person's head" />
                </IonAvatar>
     
                <IonLabel>
                  <IonLabel> {item.name || <Skeleton  count={10} />} </IonLabel>
                  {item.group_id >= 0 ? (
                      <p> {item.cellphone || item.username } {item.lastMessage} </p>
                    ):(
                      <p>{item.lastMessage} </p>
                    )
                  }
                </IonLabel>

                <div>
                  <p>{transform (item.datesend)}</p>
                  <IonBadge  slot="end">11</IonBadge>   
                </div>
              </IonItem>
            )
          })} 
          
        </IonList>
        {isPlatform('android') ? (
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
              <IonFabButton routerLink='/contacts' color="secondary">
                <IonIcon  icon={chatbubbleEllipses}></IonIcon>
              </IonFabButton>
            </IonFab>
          ) 
          : null
        }
      </IonContent>
    </IonPage>
  );
};

export default Chats;
