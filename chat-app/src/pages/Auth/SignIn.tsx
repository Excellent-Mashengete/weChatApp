import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonNote, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';

const SignIn: React.FC = () => {
    const [getIdentifier, setIdentifier] = useState();
    const [getPassword, setPassword] = useState();
    const [isTouched, setIsTouched] = useState(false);
    const [isValid, setIsValid] = useState<boolean>();
    
    const validateNumber = (email: string) => {
        return email.match(/^\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);
    };

    const validate = (ev: Event) => {
        const value = (ev.target as HTMLInputElement).value;
        if (getIdentifier != '' && getPassword != ''){
            return validateNumber(value) ;
        }
        if (getIdentifier != '' && getPassword != ''){
            return value;
        }

        return setIsValid(false);
    };
    
    const markTouched = () => {
        setIsTouched(true);
    };

    function onSubmit(event: any) {
        event.preventDefault();  

        if (isValid) {
            console.log(getIdentifier);
            console.log(getPassword);
        }
    }
   
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Sign In</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className='siginForm'>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Sign In</IonCardTitle>
                    </IonCardHeader>
                    <form >
                        <IonCardContent>
    
                            <IonItem counter={true} fill="solid" className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}>
                                <IonLabel position="floating">Phone Number</IonLabel>
                                <IonInput type="number" maxlength={10} max={10} name="phone" 
                                    onIonChange={(event:any) => setIdentifier(event.target.value)}  
                                    onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } 
                                    onKeyPress={(e) => {if (e.code === 'Minus' || e.code === 'Plus' )e.preventDefault() }} 
                                    onIonInput={(event) => validate(event)} onIonBlur={() => markTouched()} />
                                <IonNote slot="error">Enter Cellphone Number</IonNote>
                            </IonItem>

                            <IonItem counter={true} fill="solid" className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}>
                                <IonLabel position="floating">Password</IonLabel>
                                <IonInput type="password"  maxlength={10} max={10} name="password"
                                    onIonChange={(event:any) => setPassword(event.target.value)} 
                                    onIonInput={(event) => validate(event)} onIonBlur={() => markTouched()} />
                                <IonNote slot="error">Enter Password</IonNote>
                            </IonItem>
                
                            <IonButton onClick={onSubmit} fill="outline" expand="block" color="primary-outline">Login</IonButton>
                        </IonCardContent>    
                    </form>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default SignIn;
