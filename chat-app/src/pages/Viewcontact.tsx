import { IonAvatar, IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { add, callSharp, chatboxSharp, videocamSharp } from "ionicons/icons";
import { useState } from "react";
import { RouteComponentProps } from "react-router";
import Back from "../components/backButton";
import ContactProfile from "../components/ContactProfile";

import Labels from "../components/Label";

const Viewcontact: React.FC <RouteComponentProps> = (props) => {
    const [user] = useState<any>(props.history.location.state);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <Back slot={'start'} href={'/messages'} />
                    <IonTitle>Contact Info</IonTitle>
                </IonToolbar>
            </IonHeader>
            
            <IonContent>
                <div >
                    <img className='h-72 w-full' src={user.user.state.avatar} alt="" />
                </div>

                <ContactProfile styles={'shadow-none'} user={user.user.state} />
            </IonContent>
        </IonPage>
    );
};
  
export default Viewcontact;