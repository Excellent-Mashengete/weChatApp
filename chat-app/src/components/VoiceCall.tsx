import {  IonButtons, IonIcon } from "@ionic/react";

interface VoiceComponent{
    slot: any;
    voiceCall:any;
    color:any;
    icon:any;
}

const VoiceCall: React.FC<VoiceComponent> = ({slot, voiceCall, color, icon}) => {
    return (
        <IonButtons className="voice" onClick={voiceCall} slot={slot}>
            <IonIcon color={color} icon={icon} />
        </IonButtons> 
    );
};
  
export default VoiceCall;