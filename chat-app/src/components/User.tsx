import { IonAvatar, IonButtons, IonIcon, IonItem, IonLabel } from "@ionic/react";
import { call, videocam } from "ionicons/icons";
import { transform } from "../helpers/helpers";
import {UserInterface} from "../interface/User"

const User: React.FC<UserInterface> = ({name, description, cellphone}) => {
    function edituser() {
        console.log("Edit user")
    }

    return(
        <>
            <IonItem>
                <IonLabel>{name}</IonLabel>     
            </IonItem>

            <IonItem>
                <IonLabel>{cellphone}</IonLabel>     
            </IonItem>

            <IonItem button onClick={edituser}>
                <IonLabel>{description}</IonLabel>     
            </IonItem>
        </>
    );
}

export default User;