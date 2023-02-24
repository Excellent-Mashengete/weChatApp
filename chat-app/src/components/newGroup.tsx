import React, { useState, useRef } from 'react';
import { IonButtons, IonButton, IonHeader, IonContent, IonToolbar, IonTitle, IonItem, IonLabel, IonInput, IonModal, IonList, IonAvatar, IonGrid, IonRow, IonCol } from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';
const image = "https://avatarfiles.alphacoders.com/226/226604.png";

interface ContainerProps {
    list: any[];
}

function AndroidGroupAdd({list}:ContainerProps) {
    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);
  
  
    const [message, setMessage] = useState(
      'This modal example uses triggers to automatically open a modal when the button is clicked.'
    );
  
    function confirm() {
      modal.current?.dismiss(input.current?.value, 'confirm');
    }
  
    function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
      if (ev.detail.role === 'confirm') {
        setMessage(`Hello, ${ev.detail.data}!`);
      }
    }
  

    return (
        <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                    </IonButtons>

                    <IonTitle>Welcome</IonTitle>

                    <IonButtons slot="end">
                        <IonButton strong={true} onClick={() => confirm()}>
                        Confirm
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            
            <IonContent className="ion-padding">
                <IonItem detail={false} lines="none" className='height'>
                    <IonAvatar  className='img' slot='start'>
                        <img src={image} alt="Silhouette of a person's head" />
                    </IonAvatar>
                    <IonItem>
                        <IonInput type="text" ref={input} placeholder="Type group discription here" />
               
                    </IonItem>
                </IonItem>

                <IonItem  className='mb-5'>
                    <IonInput type="text" ref={input} placeholder="Type group discription here" />
                </IonItem>

                <IonLabel >Participants: {list.length}</IonLabel>
            
                {list.map((response:any) => 
                    <IonItem   key={response.id}  detail={false} lines="none" className='height' >
                        <IonAvatar className='img' slot="start">
                            <img src={response.avatar} alt="Silhouette of a person's head" />
                        </IonAvatar>

                        <IonLabel>
                            {response.name }
                            <p className="pt-1">{ response.phone }</p>
                        </IonLabel>
                    </IonItem>
                )}  
            </IonContent>
        </IonModal>
    );
}

export default AndroidGroupAdd;