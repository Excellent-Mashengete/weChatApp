import { IonCardTitle, IonInput, IonItem, IonLabel, IonNote} from '@ionic/react';

interface ContainerProps {
    register: any;
    errors: any;
}

const Login: React.FC<ContainerProps> = ({register, errors}) => {   
    return (
        <>
            <IonCardTitle className='text-lg mb-3 font-semibold'>Your Password</IonCardTitle>
                <IonItem counter={true}>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput type="password" clearOnEdit={false}  maxlength={6} max={6} {...register('password')} name="password" />
                <IonNote color="danger" >{errors.password?.message?.toString()}</IonNote>
            </IonItem>
        </>
    );
};

export default Login;