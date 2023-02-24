import { IonAvatar, IonItem, IonLabel } from "@ionic/react";
import { ContactInterface } from "../interface/Contacts";

const List: React.FC<ContactInterface> = ({name, avatar, phone}) => {

    return (
        <IonItem button detail={false} lines="none" className='height' >
            <IonAvatar className='img' slot="start">
                <img src={avatar} alt="Silhouette of a person's head" />
            </IonAvatar>

            <IonLabel>
                {name }
                <p className="pt-1">{ phone }</p>
            </IonLabel>
        </IonItem>
    );
}

export default List;