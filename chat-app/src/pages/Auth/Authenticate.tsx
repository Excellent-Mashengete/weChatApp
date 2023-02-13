import {IonButton, IonCol, IonContent, IonGrid, IonPage, IonRow} from '@ionic/react';
import "./auth.css"
const Auth: React.FC = () => {
  return (
    <IonPage>        
        <IonContent className='auth-form'>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonButton fill="outline" routerLink="/auth/signup" expand="block" color="primary">Register</IonButton>
                        <span className="divider line one-line">or</span>
                        <span className="already">Already a user?</span>
                        <IonButton fill="outline" routerLink="/auth/signin" expand="block" color="danger">Login</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
  </IonPage>
  );
};

export default Auth;
