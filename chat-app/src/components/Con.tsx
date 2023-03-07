import { IonButtons, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel } from "@ionic/react";
import { callSharp, chatboxSharp, videocamSharp } from "ionicons/icons";

interface LabelContainer{
    styles: any;
    user:any
}

const ContactProfile: React.FC<LabelContainer> = ({styles, user}) => {
    return (
        <>
            <IonCardHeader className='text-center'>
                <IonCardTitle>{user.name}</IonCardTitle>
                <IonCardSubtitle>{user.phone}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent >
                <IonItem detail={false} lines="none">
                    <IonLabel>
                        <IonButtons className='voiceCall justify-center' >
                            <IonIcon color="primary" icon={chatboxSharp} />
                        </IonButtons>
                        <IonLabel className='mt-2 text-center'>Message</IonLabel>
                    </IonLabel>

                    <IonLabel>
                        <IonButtons className='voiceCall justify-center'>
                            <IonIcon color="primary" icon={callSharp} />
                        </IonButtons>
                        <IonLabel className='mt-2 text-center'>Audio</IonLabel>
                    </IonLabel>

                    <IonLabel>
                        <IonButtons className='videoCall justify-center'  slot="end">
                            <IonIcon color="primary" icon={videocamSharp} />
                        </IonButtons>
                        <IonLabel className='mt-2 text-center'>Video</IonLabel>
                    </IonLabel>
                </IonItem>
            </IonCardContent>
        </> 
    );
};
  
export default ContactProfile;