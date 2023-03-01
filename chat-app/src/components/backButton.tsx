import { IonBackButton, IonButtons } from "@ionic/react";

interface ChatContainer{
    slot: any;
    href:any
}

const Back: React.FC<ChatContainer> = ({slot, href}) => {
    return (
        <IonButtons slot={slot}>
            <IonBackButton defaultHref={href}></IonBackButton>
        </IonButtons> 
    );
};
  
export default Back;