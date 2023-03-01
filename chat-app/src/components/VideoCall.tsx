import { IonButtons, IonIcon } from "@ionic/react";

interface VideoContainer{
    slot: any;
    videoCall:any;
    color:any;
    icon:any;
}

const VideoCall: React.FC<VideoContainer> = ({slot, videoCall, color, icon}) => {
    return (
        <IonButtons className="video"  onClick={videoCall} slot={slot}>
            <IonIcon color={color} icon={icon} />
        </IonButtons> 
    );
};
  
export default VideoCall;