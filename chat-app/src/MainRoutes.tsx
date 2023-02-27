import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonSplitPane} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { getToken } from './helpers/helpers';
import Messages from './pages/Message';
import Viewcontact from './pages/Viewcontact';
import SignUp from './pages/Auth/SignUp';
import SignIn from './pages/Auth/SignIn';
import Authenticate from './pages/Auth/Authenticate';
import Contacts from './pages/Contacts';
import NewGroup from './pages/NewGroup';
import Tabs from './RouteTabs';
import EditBio from './pages/EditBio';
import Calls from './pages/ContactCalls';

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
                    <Route exact path="/makecalls" component={Calls} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/editBio" component={EditBio} />
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