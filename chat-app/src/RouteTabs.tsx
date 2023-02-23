import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs,} from '@ionic/react';
import { chatbubblesOutline, cogOutline, callOutline, fileTrayFullOutline } from 'ionicons/icons';
import Chats from './pages/tabs/Chats';
import Settings from './pages/tabs/Settings';
import Contacts from './pages/tabs/Contacts';
import Calls from './pages/tabs/Calls';

const Tabs: React.FC = () => {
    return(
        <IonTabs>
    
            <IonRouterOutlet>
                <Route exact path="/app/calls" component={Calls} />
                <Route exact path="/app/contacts" component={Contacts} />
                <Route exact path="/app/chats" component={Chats} />
                <Route exact path="/app/settings" component={Settings} />
                <Route exact path="/app">
                    <Redirect to="/app/chats" />
                </Route>
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/app/calls">
                    <IonIcon icon={callOutline} />
                </IonTabButton>

                <IonTabButton tab="tab2" href="/app/contacts">
                    <IonIcon icon={fileTrayFullOutline} />
                </IonTabButton>

                <IonTabButton tab="tab3" href="/app/chats">
                    <IonIcon icon={chatbubblesOutline} />
                </IonTabButton>

                <IonTabButton tab="tab4" href="/app/settings">
                    <IonIcon icon={cogOutline} />

                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
}

export default Tabs;