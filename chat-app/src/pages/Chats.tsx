import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import { createOutline } from 'ionicons/icons';
import React, { useState } from "react";
import data from '../Data';
import "./Chats.css";

const Chats: React.FC<RouteComponentProps> = (props)=> {
  
  function viewMessages(user:any){    
   props.history.push('/messages', {data: user})
  }

  return (
    <IonPage>
     <IonHeader>
        <IonToolbar>
          <IonTitle>Chats</IonTitle>
          <IonButtons className='text-2xl' slot='end'>
            <IonButton className='text-2xl' slot='end'>
              <IonIcon  icon={createOutline} />
            </IonButton>
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
          {data.map((item, index) => { 
            return (
              <IonItem className='height' key={index} onClick={() => {viewMessages(item)}}>
                <IonAvatar className='img' slot='start'>
                  <img src={item.image} alt="Silhouette of a person's head" />
                </IonAvatar>
                
                <IonLabel>
                  <IonLabel> {item.name} </IonLabel>
                  
                  <p> {item.description} </p>
                </IonLabel>

                <p> {item.date} </p>
              </IonItem>
            )
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Chats;
