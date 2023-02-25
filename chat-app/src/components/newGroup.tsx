 import React, { useState, useRef, useEffect } from 'react';
import { IonButtons, IonButton, IonHeader, IonContent, IonToolbar, IonTitle, IonItem, IonLabel, IonInput, IonModal, IonAvatar, isPlatform, IonFab, IonFabButton, IonIcon, IonBackButton, IonNote, useIonToast, IonToast, useIonActionSheet } from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';
import { useHistory } from 'react-router';
import { arrowBack, checkmark } from 'ionicons/icons';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from "yup";
const image = "https://avatarfiles.alphacoders.com/226/226604.png";

interface ContainerProps {
    list: any[];
}

function NewGroup({list}:ContainerProps) {
    const modal = useRef<HTMLIonModalElement>(null);
    const page = useRef(null);
  
    const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);
    const [present] = useIonActionSheet();
  
    useEffect(() => {
      setPresentingElement(page.current);
    }, []);
  
    const validationSchema = object().shape({
        name: string().required('provide group name and optional group icon')
    });

    const formOptions = { resolver: yupResolver(validationSchema) }
    const {register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState;


    const history = useHistory();
    const currentLocation =  history.location.pathname;
    const [showToast, setShowToast] = useState(false);
    const [message, setMessage] = useState(
      'This modal example uses triggers to automatically open a modal when the button is clicked.'
    );
  
    function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
      if (ev.detail.role === 'confirm') {
        setMessage(`Hello, ${ev.detail.data}!`);
      }
    }

    function createGroup(data:any, event: any) {
        event.preventDefault();
        let group ={
            name: data.name,
            description: "",
            avatar: image,
            creator_id: 1 
        }

        console.log(group);   
    }
     
    return (
        <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)} presentingElement={presentingElement!}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Modal</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={() => modal.current?.dismiss()}>Close</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            
            <IonContent className="ion-padding">
                <IonItem detail={false} lines="none" className='height'>
                    <IonAvatar  className='img' slot='start'>
                        <img src={image} alt="Silhouette of a person's head" />
                    </IonAvatar>
                    <IonItem>
                        <IonInput type="text" {...register('name')} name="name"  placeholder="Type group discription here" />
                        <IonNote color="danger" >{errors.name?.message?.toString()}</IonNote>
                   </IonItem>
                </IonItem>

                <IonItem  className='mb-5'>
                    <IonInput type="text" placeholder="Type group discription here" />
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

                {currentLocation !== '/contacts'
                    ? 
                        <IonFab slot="fixed" vertical="bottom" horizontal="end">
                            <IonFabButton color="secondary">
                                <IonIcon  onClick={(handleSubmit(createGroup))} icon={checkmark}></IonIcon>
                            </IonFabButton>
                        </IonFab> 
                    : null
                }

            </IonContent>
        </IonModal>
    );
}

export default NewGroup;