import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Messages from './pages/Message';
import Viewcontact from './pages/Viewcontact';
import SignUp from './pages/Auth/SignUp';
import SignIn from './pages/Auth/SignIn';
import Authenticate from './pages/Auth/Authenticate';
import Home from "./pages/Home"
import Tabs from './RouteTabs';

const Routes: React.FC = () => {
    return(
        <IonReactRouter>
            <IonRouterOutlet>
                <Route path="/app" component={Tabs} />
                <Route exact path="/messages" component={Messages} />
                <Route exact path="/viewcontact" component={Viewcontact} />
                <Route exact path="/auth" component={Authenticate} />
                <Route exact path="/auth/signup" component={SignUp} />
                <Route exact path="/auth/signin" component={SignIn} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/"><Redirect to="/home" /></Route>
            </IonRouterOutlet>
        </IonReactRouter>
    );
}

export default Routes;