import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonSplitPane} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Tabs from './pages/Tabs/Tabs';


const Routes: React.FC = () => {
    return(
        <IonReactRouter>
            <IonSplitPane contentId='main'>
                <IonRouterOutlet id='main'>
                    <Route path="/app" component={Tabs} />

        
                </IonRouterOutlet>
            </IonSplitPane>
        </IonReactRouter>
    );
}

export default Routes;