import { IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import "./Messages.css";

const Messages: React.FC = () => {
    return (
        <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Messages</IonTitle>
          </IonToolbar>
        </IonHeader>
    
        <div>
            <div className="chat chat-start">
            <div className="chat-bubble">You were the Chosen One!</div>
            <div className="chat-footer opacity-50">
                Delivered
            </div>
            </div>

            <div className="chat chat-end">         
            <div className="chat-bubble">I hate you!</div>
            <div className="chat-footer opacity-50">
                Seen at 12:46
            </div>
            </div>
        </div>
      </IonContent>
    </IonPage>
    );
}

export default Messages;