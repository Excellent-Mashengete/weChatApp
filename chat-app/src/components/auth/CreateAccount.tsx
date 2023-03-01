import { IonCardTitle, IonInput, IonItem, IonLabel, IonNote} from '@ionic/react';

interface ContainerProps {
    register: any;
    errors: any;
}

const CreateAccount: React.FC<ContainerProps> = ({register, errors}) => {
      
    return (
        <>
            <IonCardTitle className='text-lg mb-3 font-semibold'>Create your Account</IonCardTitle>
            
            <IonItem >
                <IonLabel position="floating">Full Name</IonLabel>
                <IonInput type="text" {...register('username')} name="username" />
                <IonNote  color="danger" >{errors.username?.message?.toString()}</IonNote>
            </IonItem>

            <IonItem className='mt-10' counter={true}>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput type="password" clearOnEdit={false}  maxlength={6} max={6} {...register('password')} name="password" />
                <IonNote color="danger" >{errors.password?.message?.toString()}</IonNote>
            </IonItem>
        </>
    );
};

export default CreateAccount;