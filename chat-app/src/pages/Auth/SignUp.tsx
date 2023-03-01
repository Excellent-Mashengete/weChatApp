import { IonCard, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { data } from '../../Data/CountryCode';
import SendOtp from '../../components/SendOtp';

const SignUp: React.FC<RouteComponentProps>= (props) => {
    const [country, setCountry] = useState({name: '', value: '', code: ''});
    const [phone, setPhone] = useState();

    const handleChangeLoanTerm = (e:any, ) => {        
        setCountry(e.detail.value);
    }
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>LiveChat Box</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className='text-center'>
                <IonCard className='shadow-none'>
                    <IonCardTitle className='text-lg mb-3 font-semibold'>Your phone number</IonCardTitle>
                    <IonCardSubtitle>Please confirm your country code <br/>and enter your phone number</IonCardSubtitle>
                        
                    <IonItem >
                        <IonSelect placeholder="Select fruit" value={country} name="loanType" onIonChange={handleChangeLoanTerm}>
                            {data.map((res:any) => { 
                                return <IonSelectOption key={res.name} value={res} >{res.value} {res.name} {res.code}</IonSelectOption>
                            })}
                        </IonSelect>
                    </IonItem>

                    <IonItem lines='none'>
                        <IonItem className='w-28'>
                            <IonLabel position="floating">Code</IonLabel>
                            <IonInput  value={country.code}></IonInput>
                        </IonItem>
                                
                        <IonItem className='w-full'>
                            <IonLabel position="floating">Phone Number</IonLabel>
                            <IonInput type="tel" value={phone} onIonChange={(e:any) => setPhone(e.detail.value)} ></IonInput>
                        </IonItem>
                    </IonItem>
                </IonCard>

                <IonFab slot="fixed" vertical="bottom" horizontal="end">
                    <IonFabButton id="open-modal" color="secondary">
                        <IonIcon icon={arrowForward}></IonIcon>
                    </IonFabButton>
                </IonFab>
                <SendOtp list={phone} />
            </IonContent>
        </IonPage>
    );
};

export default SignUp;
