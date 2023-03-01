import { useRef } from 'react';
import { IonModal, IonContent, IonList, IonItem, IonLabel, IonCardTitle, IonButtons, IonButton} from '@ionic/react';
import './send.css';

interface ContainerProps {
    list: any;
}

function SendOtp({list}:ContainerProps) { 
    console.log(list);
    
    const modal = useRef<HTMLIonModalElement>(null);

    function dismiss() {
        modal.current?.dismiss();
    }

    return (
        <IonModal className='sendotp' id="example-modal" ref={modal} trigger="open-modal">
     
            
        </IonModal>
    );
}

export default SendOtp;


/*

                    */