import { IonCard,IonCardTitle, IonContent, IonFab, IonFabButton, IonIcon, IonInput, IonItem, IonLabel, IonNote, IonPage, IonSelect } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from "yup";
import { useState } from 'react';
import { setToken } from '../../helpers/helpers';
import CreateAccount from '../../components/auth/CreateAccount';
import Auth from '../../service/auth';
import Login from '../../components/auth/Login';

const Password: React.FC <RouteComponentProps> = (props) => {
    const [phone] = useState<any>(props.history.location.state);
    
    const log = object().shape({
        password: string().required().min(5),
    });

    const create = object().shape({
        password: string().required().min(5),
        username: string().required('Name is mendatory'),
    });

    const validationSchema = phone.phone.message === "user doesn't exist" ? create: log 

    const formOptions = { resolver: yupResolver(validationSchema) }
    const {register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState;

    async function onSubmit(data:any, event: any) {
        event.preventDefault();
        let userData = {
            name: data.username,
            avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
            cellphone: phone.phone.user,
            password: data.password,
        }
        
        let logData ={cellphone: phone.phone.user, password: data.password } 
        
        if(phone.phone.message === "user doesn't exist"){
            await Auth.register(userData);
        }
        
        Auth.login(logData).then((result) => {
            setToken(result.data.token);
            reset();
            props.history.push('/app/chats');
        }).catch((error) => {
            console.log(error);
        })
        return
    }

    return (
        <IonPage >
            <IonContent className='text-center'>
                <IonCard className='shadow-none mt-16'>
                    {phone.phone.message === "user doesn't exist" ?
                            <CreateAccount register={register} errors={errors} />
                        :
                            <Login register={register} errors={errors} />
                    }
                </IonCard>

                <IonFab slot="fixed" vertical="bottom" horizontal="end">
                    <IonFabButton onClick={handleSubmit(onSubmit)} color="secondary">
                        <IonIcon icon={arrowForward}></IonIcon>
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    );
}

export default Password;