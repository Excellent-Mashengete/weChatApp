import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const SignIn: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Sign In</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className='siginForm'>
            <IonCard >
                <IonCardHeader>
                    <IonCardTitle>Sign In</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    Here's a small text description for the card content. Nothing more, nothing less.
                </IonCardContent>
            </IonCard>
        </IonContent>
  </IonPage>
  );
};

export default SignIn;
