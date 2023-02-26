import { IonAvatar, IonButtons, IonIcon, IonItem, IonLabel } from "@ionic/react";
import { callOutline, videocamOutline } from "ionicons/icons";
import { useHistory } from "react-router";
import { ContactInterface } from "../interface/Contacts";

const List: React.FC<ContactInterface> = ({name, avatar, phone}) => {
    const history = useHistory();
    const currentLocation =  history.location.pathname;

    function videoCall() {
        console.log("Make video callls");
        
    }

    function voiceCall() {
        console.log("Make voice callls");
        
    }
    return (
        <IonItem button detail={false} lines="none" className='height' >
            <IonAvatar className='img' slot="start">
                <img src={avatar} alt="Silhouette of a person's head" />
            </IonAvatar>

            <IonLabel>
                {name }
                <p className="pt-1">{ phone }</p>
            </IonLabel>

            {currentLocation === '/makecalls' 
                ?
                    <div className="flex">
                        <IonButtons className='videoCall' onClick={videoCall} slot="end">
                            <IonIcon color="primary" icon={videocamOutline} />
                        </IonButtons>
                    
                        <IonButtons className='voiceCall' onClick={voiceCall} slot="end">
                            <IonIcon color="primary" icon={callOutline} />
                        </IonButtons>
                    </div>
                :
                    null
           } 
        </IonItem>
    );
}

export default List;