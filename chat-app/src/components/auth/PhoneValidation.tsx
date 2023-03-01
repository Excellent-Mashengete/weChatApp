import { IonInput, IonItem, IonLabel } from "@ionic/react";

interface ContainerProps {
    code: any;
    phone: any;
    setPhone: any;
}

const PhoneValidation: React.FC<ContainerProps> = ({code, phone, setPhone }) => {   

    return (
        <IonItem lines='none'>
            <IonItem className='w-28'>
                <IonLabel position="floating">Code</IonLabel>
                <IonInput  value={code}></IonInput>
            </IonItem>
                                
            <IonItem className='w-full'>
                <IonLabel position="floating">Phone Number</IonLabel>
                <IonInput type="tel" value={phone} onIonChange={(e:any) => setPhone(e.detail.value)} ></IonInput>
            </IonItem>
        </IonItem>
    );
};

export default PhoneValidation;