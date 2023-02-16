import { IonAvatar, IonBackButton, IonButtons, IonContent, IonHeader,  IonItem,  IonLabel,  IonList,  IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import Skeleton from 'react-loading-skeleton';
import Users from '../service/users';
import "./Chats.css";
import data from '../Data';

const Contacts: React.FC <RouteComponentProps> = (props)=> {
    const [chats, setChats] = useState([]);

    useEffect(() =>{
        Users.getUser(1).then(res => {
            setChats(res.data.users);
        })
    },[])
  
    function viewMessages(user:any){    
        props.history.push('/messages', {data: user})
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref='/chats'></IonBackButton>
                    </IonButtons>
                    <IonToolbar slot='start'>
                        <IonTitle className='selectTitle'>Select Contact</IonTitle>
                        <IonTitle className='subtitle'>{2} Contacts</IonTitle>
                    </IonToolbar>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen> 
                <IonList>
                    <IonItem className='newheight' >
                        <IonAvatar className='img' slot='start'>
                            <img src={"https://avatarfiles.alphacoders.com/103/103808.jpg" || <Skeleton />} alt="Silhouette of a person's head" />
                        </IonAvatar>
                        
                        <IonLabel>
                            <IonLabel> {"Excellent" || <Skeleton  count={10} />} </IonLabel>
                            <p> {"item.description"} </p>
                        </IonLabel>
                    </IonItem>
                </IonList>

                <IonList>
                    <IonItem className='newheight' >
                        <IonAvatar className='img' slot='start'>
                            <img src={"https://avatarfiles.alphacoders.com/103/103808.jpg" || <Skeleton />} alt="Silhouette of a person's head" />
                        </IonAvatar>
                        
                        <IonLabel>
                            <IonLabel> {"Excellent" || <Skeleton  count={10} />} </IonLabel>
                            <p> {"item.description"} </p>
                        </IonLabel>
                    </IonItem>
                </IonList>
                
                <IonList>
                    <IonItem  className='myContancts'>Contacts On We-Chat</IonItem>
                    {data.map((item:any) => { 
                        return (
                        <IonItem className='height' key={item.id} onClick={() => {viewMessages(item)}}>
                            <IonAvatar className='img' slot='start'>
                            <img src={item.image || <Skeleton />} alt="Silhouette of a person's head" />
                            </IonAvatar>
                
                            <IonLabel>
                            <IonLabel> {item.name || <Skeleton  count={10} />} </IonLabel>
                            <p> {item.description} </p>
                            </IonLabel>
                        </IonItem>
                        )
                    })} 
                </IonList>
            </IonContent>
        </IonPage>
    );
}

export default Contacts;