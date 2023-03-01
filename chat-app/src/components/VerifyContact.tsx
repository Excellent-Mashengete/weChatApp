import { IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, } from '@ionic/react';

import { useState } from 'react';
import { data } from '../Data/CountryCode';
import { formaPhone } from '../helpers/helpers';

const VerifyContact: React.FC = () => {   
    const [country, setCountry] = useState({name: '', value: '', code: ''});

    const handleChangeLoanTerm = (e:any, ) => {        
        setCountry(e.detail.value);
    }
    
    return (
        
        <div className='text-center'>
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
                    <IonInput type="tel" ></IonInput>
                </IonItem>
            </IonItem>
        </div>
    );
};

export default VerifyContact;