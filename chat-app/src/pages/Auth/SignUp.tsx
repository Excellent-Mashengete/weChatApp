import { IonCard, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonIcon, IonItem, IonPage, IonSelect, IonSelectOption } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { data } from '../../data/CountryCode';
import SendOtp from '../../components/auth/SendOtp';
import Auth from '../../service/auth';
import PhoneValidation from '../../components/auth/PhoneValidation';

const SignUp: React.FC<RouteComponentProps>= (props) => {
    const [country, setCountry] = useState({name: '', value: '', code: ''});
    const [phone, setPhone] = useState();

    const handleChangeLoanTerm = (e:any, ) => {        
        setCountry(e.detail.value);
    }

    async function verifyAccount(event:any){
        event.preventDefault();  
        let userData = {cellphone: country.code+phone}
        
        await Auth.verifyUser(userData).then((response) => {        
            props.history.push('/auth/signin', {phone:response.data});
        }).catch((err) => {
            props.history.push('/auth/signin', {phone:err.response.data});
        })
    }
    
    return (
        <IonPage>
            <IonContent className='text-center'>
                <IonCard className='shadow-none mt-16'>
                    <IonCardTitle className='text-lg mb-3 font-semibold'>Your phone number</IonCardTitle>
                    <IonCardSubtitle>Please confirm your country code <br/>and enter your phone number</IonCardSubtitle>
                        
                    <IonItem >
                        <IonSelect placeholder="Select fruit" value={country} name="loanType" onIonChange={handleChangeLoanTerm}>
                            {data.map((res:any) => { 
                                return <IonSelectOption key={res.name} value={res} >{res.value} {res.name} {res.code}</IonSelectOption>
                            })}
                        </IonSelect>
                    </IonItem>

                    <PhoneValidation code={country.code} phone={phone} setPhone={setPhone}  />
                </IonCard>

                <IonFab slot="fixed" vertical="bottom" horizontal="end">
                    <label htmlFor="my-modal-4">
                        <IonFabButton  color="secondary">
                            <IonIcon icon={arrowForward}></IonIcon>
                        </IonFabButton>
                    </label>
                </IonFab>
                <SendOtp list={country.code+phone} verify={verifyAccount} />
            </IonContent>
        </IonPage>
    );
};

export default SignUp;