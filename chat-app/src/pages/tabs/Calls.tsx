import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { call} from 'ionicons/icons';
import { useEffect, useState } from 'react';
import ExploreContainer from '../../components/UserSettings';
import CallsData from '../../components/CallsData'
import calls from "../../dummpData/calls.json";

const Calls: React.FC = () => {
  const [callsHistory, setCallsHistory] = useState<any[]>([]);

  function allCalls() {
    console.log(calls.data);
    setCallsHistory(calls.data)        
  }

  useEffect(() =>{
    allCalls();
  },[])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calls</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Calls</IonTitle>
          </IonToolbar>
        </IonHeader>

        {callsHistory.length !== 0?
            <CallsData logs={callsHistory} />
          :
            null
        }

        <IonFab slot="fixed" vertical="bottom" horizontal="end">
              <IonFabButton routerLink='/makecalls' color="secondary">
                <IonIcon icon={call}></IonIcon>
              </IonFabButton>
            </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Calls;
