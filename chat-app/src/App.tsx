import { IonApp, setupIonicReact } from '@ionic/react';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import 'react-loading-skeleton/dist/skeleton.css'
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import MainRoutes from './MainRoutes';
import { SkeletonTheme } from 'react-loading-skeleton';

setupIonicReact();

const App: React.FC = () => (
  <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <IonApp>
      <MainRoutes />
    </IonApp>
  </SkeletonTheme>
  
);

export default App;
