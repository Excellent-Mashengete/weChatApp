import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonNote, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


const SignUp: React.FC= () => {
    const [isValid, setIsValid] = useState<boolean>(false);
  
    const PhoneValidation = /^\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const formSchema = Yup.object().shape({
        username: Yup.string().required('Full Name is mendatory'),
        phone: Yup.string().matches(PhoneValidation, 'Phone number is not valid'),
        password: Yup.string().required('Password is mendatory')
            .min(6, 'Password must be at 6 char long')
    })

    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState;

    function onSubmit(data:any, event: any) {
        event.preventDefault();  
  
        let userData = {
            username: data.username,
            avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
            cellphone: data.phone,
            password: data.password,
        }  

        console.log(userData);
        
        reset();
        return false;
    }
   
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Sign Up</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className='siginForm'>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Sign Up</IonCardTitle>
                    </IonCardHeader>
                    <form >
                        <IonCardContent>
                            <IonItem fill="solid" >
                                <IonLabel position="floating">Full Name</IonLabel>
                                <IonInput type="text" {...register('username')} name="username" />
                                <IonNote  color="danger" >{errors.username?.message?.toString()}</IonNote>
                            </IonItem>
                            <IonItem counter={true} fill="solid" >
                                <IonLabel position="floating">Phone Number</IonLabel>
                                <IonInput type="number" maxlength={10} max={10}  {...register('phone')} name="phone"  onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } onKeyPress={(e) => {if (e.code === 'Minus' || e.code === 'Plus' )e.preventDefault() }} />
                                <IonNote color="danger" >{errors.phone?.message?.toString()}</IonNote>
                            </IonItem>

                            <IonItem counter={true} fill="solid" >
                                <IonLabel position="floating">Password</IonLabel>
                                <IonInput type="password"  maxlength={10} max={10} {...register('password')} name="password" />
                                <IonNote color="danger" >{errors.password?.message?.toString()}</IonNote>
                            </IonItem>
                
                            <IonButton onClick={handleSubmit(onSubmit)} fill="outline" expand="block" color="primary-outline">Register</IonButton>
                        </IonCardContent>    
                    </form>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default SignUp;
