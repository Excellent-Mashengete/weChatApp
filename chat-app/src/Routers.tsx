import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonIcon, IonRouterOutlet, IonTabBar, IonTabButton,} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Contacts from './pages/User';
import Chats from './pages/Chats';
import Settings from './pages/Settings';
import Messages from './pages/Message';
import ContactInfo from './components/contactProfile';

import { ellipse, cog, chatbubbles } from 'ionicons/icons';


const Routes: React.FC = () => {
    return(
        <IonReactRouter>
                <IonRouterOutlet>
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/chats" component={Chats} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/"><Redirect to="/tab1" /></Route>
                    <Route exact path="/messages" component={Messages} />
                    <Route exact path="/contactInfo" component={ContactInfo} />
                </IonRouterOutlet>

{/* 
                
                <IonTabBar slot="bottom">
                    <IonTabButton tab="tab1" href="/contacts">
                        <IonIcon icon={ellipse} />
                    </IonTabButton>

                    <IonTabButton tab="tab2" href="/chats">
                        <IonIcon icon={chatbubbles} />
                    </IonTabButton>

                    <IonTabButton tab="tab3" href="/settings">
                        <IonIcon icon={cog} />
                    </IonTabButton>
                </IonTabBar>  */}
        
        </IonReactRouter>
    );
}

export default Routes;
