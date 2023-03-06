import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";
import { RouteComponentProps } from "react-router";
import Back from "../components/backButton";

const Viewcontact: React.FC <RouteComponentProps> = (props) => {
    const [user] = useState<any>(props.history.location.state);
    console.log(user.user.state.avatar);

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
            </IonContent>
        </IonPage>
    );
};
  
export default Viewcontact;