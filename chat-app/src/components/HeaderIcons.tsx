import { IonButtons, IonIcon } from "@ionic/react";

interface VideoContainer{
    slot: any;
    videoCall:any;
    color:any;
    icon:any;
    classty: string;
    id:any;
}

const HeaderIcons: React.FC<VideoContainer> = ({slot, id, videoCall, color, icon, classty}) => {
    return (
        <IonButtons id={id} className={classty} onClick={videoCall} slot={slot}>
            <IonIcon color={color} icon={icon} />
        </IonButtons> 
    );
};
  
export default HeaderIcons;