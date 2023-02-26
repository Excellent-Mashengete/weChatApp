import { useState, useRef, useEffect } from 'react';
import { IonButtons, IonButton, IonHeader, IonContent, IonToolbar, IonTitle, IonItem, IonLabel, IonInput, IonModal, IonAvatar, IonFab, IonFabButton, IonIcon, IonNote, useIonToast, IonToast} from '@ionic/react';
import { useHistory } from 'react-router';
import { arrowBack, checkmark } from 'ionicons/icons';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from "yup";
const image = "https://avatarfiles.alphacoders.com/226/226604.png";

interface ContainerProps {
    list: any[];
}

function NewGroup({list}:ContainerProps) {
    const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);
    const modal = useRef<HTMLIonModalElement>(null);
    const page = useRef(null);
    const history = useHistory();
    const currentLocation =  history.location.pathname;
    const validationSchema = object().shape({
        name: string().required('provide group name and optional group icon')
    });
    const formOptions = { resolver: yupResolver(validationSchema) }
    const {register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState;

    useEffect(() => {
        setPresentingElement(page.current);
    }, []);

   
    function createGroup(data:any, event: any) {
        event.preventDefault();
        let group ={
            name: data.name,
            description: data.decription,
            avatar: image,
            creator_id: 1 
        }

        console.log(group);   
        reset();
        return
    }
     
    return (
        <IonModal ref={modal} trigger="open-modal" presentingElement={presentingElement!}>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={() => modal.current?.dismiss()}>
                            <IonIcon icon={arrowBack} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>New Group</IonTitle>
                    
                </IonToolbar>
            </IonHeader>
            
            <IonContent className="ion-padding">
                <IonItem detail={false} lines="none" className='height'>
                    <IonAvatar  className='img' slot='start'>
                        <img src={image} alt="Silhouette of a person's head" />
                    </IonAvatar>

                    <IonItem>
                        <IonInput type="text" {...register('name')} name="name"  placeholder="Type group discription here" />
                        <IonToast isOpen={errors.name?.message?.toString() !== undefined} message={errors.name?.message?.toString()} position={'top'} duration={3600} />
                    </IonItem>
                </IonItem>

                <IonItem className='mb-4'>
                    <IonInput type="text" {...register('decription')} name="decription"  placeholder="You can provide an optional group discription here" />
                </IonItem>

                <IonLabel className='ml-4 ' >Participants: {list.length}</IonLabel>
            
                {list.map((response:any) => 
                    <IonItem   key={response.id}  detail={false} lines="none" className='height' >
                        <IonAvatar className='img' slot="start">
                            <img src={response.avatar} alt="Silhouette of a person's head" />
                        </IonAvatar>

                        <IonLabel>
                            {response.name }
                            <p className="pt-1">{ response.phone }</p>
                        </IonLabel>
                    </IonItem>
                )}  

                {currentLocation !== '/contacts'
                    ? 
                        <IonFab slot="fixed" vertical="bottom" horizontal="end">
                            <IonFabButton color="secondary">
                                <IonIcon onClick={handleSubmit(createGroup)} icon={checkmark}></IonIcon>
                            </IonFabButton>
                        </IonFab> 
                    : null
                }
            </IonContent>
        </IonModal>
    );
}

export default NewGroup;