import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonNote, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from "yup";
import Auth from '../../service/auth';
import { getToken, setToken } from '../../helpers/helpers';

const SignIn: React.FC<RouteComponentProps> = (props) => {
    const PhoneValidation = /^\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const validationSchema = object().shape({
        phone: string().required().matches(PhoneValidation),
        password: string().required().min(5),
    });
    const formOptions = { resolver: yupResolver(validationSchema) }
    const {register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState;

    function onSubmit(data:any, event: any) {
        event.preventDefault(); 
        let userData = {
            cellphone: data.phone,
            password: data.password,
        } 
        console.log(userData);
        
        Auth.login(userData).then((result) => {
            
            setToken(result.data.token);  
            props.history.push('/app/chats');
            reset();
        }).catch((error) => {
            console.log(error);
        })
        
        return false;
    }

    useEffect(() => {
        const token = getToken();
        if(token){
            props.history.push('/app/chats');
        }
    },[])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle >Sign In</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className='siginForm'>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>LiveChat Box</IonCardTitle>
                    </IonCardHeader>
                    <form >
                        <IonCardContent>
    
                            <IonItem counter={true} fill="solid" >
                                <IonLabel position="floating">Phone Number</IonLabel>
                                <IonInput type="number" maxlength={10} max={10} {...register('phone')} name="phone"  
                                    onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() }
                                    onKeyPress={(e) => {if (e.code === 'Minus' || e.code === 'Plus' )e.preventDefault() }} />
                                <IonNote color="danger" >{errors.phone?.message?.toString()}</IonNote>
                            </IonItem>

                            <IonItem counter={true} fill="solid">
                                <IonLabel position="floating">Password</IonLabel>
                                <IonInput type="password" clearOnEdit={false}  maxlength={6} max={6} {...register('password')} name="password" />
                                <IonNote color="danger" >{errors.password?.message?.toString()}</IonNote>
                            </IonItem>

                            <IonButton onClick={(handleSubmit(onSubmit))} fill="outline" expand="block" color="primary-outline">Login</IonButton>
                        </IonCardContent>    
                    </form>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default SignIn;
