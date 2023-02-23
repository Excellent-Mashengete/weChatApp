import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonSplitPane, IonTabs} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Messages from './pages/Message';
import Viewcontact from './pages/Viewcontact';
import SignUp from './pages/Auth/SignUp';
import SignIn from './pages/Auth/SignIn';
import Authenticate from './pages/Auth/Authenticate';
import Contacts from './pages/Contacts';
import NewGroup from './pages/NewGroup';
import Tabs from './RouteTabs';
import { getToken } from './helpers/helpers';


const Routes: React.FC = () => {
    const token = getToken();
    return(
        <IonReactRouter>
            <IonSplitPane contentId='main'>
                <IonRouterOutlet id='main'>
                    <Route path="/app" >
                        {token ? <Tabs /> : <Redirect to='/auth/signin' />}
                    </Route>
                    <Route exact path="/messages" component={Messages} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/newgroup" component={NewGroup} />
                    <Route exact path="/viewcontact" component={Viewcontact} />
                    <Route exact path="/auth" component={Authenticate} />
                    <Route exact path="/auth/signup" component={SignUp} />
                    <Route exact path="/auth/signin" component={SignIn} />
                    <Route exact path="/">
                        {!token ? <Redirect to="/app" />: <Redirect to="/auth/signin" />}
                    </Route>
                </IonRouterOutlet>
            </IonSplitPane>
        </IonReactRouter>
    );
}

export default Routes;