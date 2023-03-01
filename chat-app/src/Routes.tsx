import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonSplitPane} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Tabs from './pages/Tabs/Tabs';
import Home from './pages/Home'
import Messages from './pages/Messages';
import SignUp from './pages/Auth/SignUp';
import SignIn from './pages/Auth/SignIn';

const Routes: React.FC = () => {
    return(
        <IonReactRouter>
            <IonSplitPane contentId='main'>
                <IonRouterOutlet id='main'>
                    <Route path="/app" component={Tabs} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/messages" component={Messages} />
                    <Route exact path="/auth/signup" component={SignUp} />
                    <Route exact path="/auth/signin" component={SignIn} />
                    <Route exact path="/"><Redirect to="/home" /></Route>
                </IonRouterOutlet>
            </IonSplitPane>
        </IonReactRouter>
    );
}

export default Routes;