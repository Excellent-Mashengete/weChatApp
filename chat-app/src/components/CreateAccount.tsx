import { IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, } from '@ionic/react';

import { useState } from 'react';
import { data } from '../Data/CountryCode';
import { formaPhone } from '../helpers/helpers';

const CreateAccount: React.FC = () => {   

    return (
        <div className='text-center'>
            <IonCardTitle className='text-lg mb-3 font-semibold'>Your Password</IonCardTitle>
        </div>
    );
};

export default CreateAccount;