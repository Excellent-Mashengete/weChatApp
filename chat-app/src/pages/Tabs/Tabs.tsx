import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs,} from '@ionic/react';
import { chatbubblesOutline, cogOutline, callOutline, call, chatbubbles, cog } from 'ionicons/icons';
import { useState } from 'react';
import NavTabs from './NavTabs';

const Tabs: React.FC = () => {
    const [isSelected, setActive] = useState('Chats');
    
    return(
        <IonTabs>
            <IonRouterOutlet>
                <NavTabs />
            </IonRouterOutlet>
       
            <IonTabBar slot="bottom">
                <IonTabButton tab="Calls" href="/app/calls" onClick={()=>setActive('Calls')}>
                    <IonIcon icon={isSelected === 'Calls' ? call : callOutline} />
                    <IonLabel>Calls</IonLabel>
                </IonTabButton>

                <IonTabButton tab="Chats`" href="/app/chats" onClick={()=>setActive('Chats')}>
                    <IonIcon icon={isSelected === 'Chats' ? chatbubbles : chatbubblesOutline} />
                    <IonLabel>Calls</IonLabel>
                </IonTabButton>

                <IonTabButton tab="Settings`" href="/app/settings" onClick={()=>setActive('Settings')}>
                    <IonIcon icon={isSelected === 'Settings' ? cog : cogOutline} />
                    <IonLabel>Calls</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
}

export default Tabs;