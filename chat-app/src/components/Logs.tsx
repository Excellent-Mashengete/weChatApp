import { IonAvatar, IonButtons, IonIcon, IonItem, IonLabel } from "@ionic/react";
import { call, videocam } from "ionicons/icons";
import { transform } from "../helpers/helpers";
import { CallLogInterface } from "../interface/Calls"

const Logs: React.FC<CallLogInterface> = ({name, avatar, phone, datesend, commType}) => {

  return(
    <IonItem button detail={false} className='height'>
      <IonAvatar className='img' slot="start">
        <img src={avatar} alt="Silhouette of a person's head" />
      </IonAvatar>

      <IonLabel>
        <IonLabel> {name || phone} </IonLabel>
        <p className="pt-1">{transform(datesend) }</p>
      </IonLabel>
      
      <div className="flex text-2xl mr-2">
        {commType === 'video' ?
          <IonButtons slot="end">
            <IonIcon color="primary" icon={videocam} />
          </IonButtons>
        :
          <IonButtons  slot="end">
            <IonIcon color="primary" icon={call} />
          </IonButtons>
        }
      </div>
   
    </IonItem>
  );
}

export default Logs;