import { IonButtons, IonIcon } from "@ionic/react";

interface VideoContainer{
    slot: any;
    videoCall:any;
    color:any;
    icon:any;
    classty: string;
}

const HeaderIcons: React.FC<VideoContainer> = ({slot, videoCall, color, icon, classty}) => {
    return (
        <IonButtons className={classty} onClick={videoCall} slot={slot}>
            <IonIcon color={color} icon={icon} />
     
        </IonButtons> 
    );
};
  
export default HeaderIcons;