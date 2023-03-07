import {IonAvatar, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonFab, IonFabButton, IonIcon, IonItem, IonLabel } from "@ionic/react";
import { add, callSharp, chatboxSharp, videocamSharp } from "ionicons/icons";

interface CardContainer{
    styles: any;
    user:any
}

const ContactProfile: React.FC<CardContainer> = ({styles, user}) => {    
    console.log(user);
    
    return (
        <>   
            <IonCard>
                <IonCardContent>
                    <IonLabel> {user.description}</IonLabel>
                    <p>{user.createdesc}</p>
                 </IonCardContent>
            </IonCard>
            <IonCard>
                <IonItem className='danger'>
                    <IonLabel>Share Contact </IonLabel>
                </IonItem>

                <IonItem className='danger'>
                    <IonLabel>Clear Chats</IonLabel>
                </IonItem>

                <IonItem className='danger'>
                    <IonLabel>Block </IonLabel>
                </IonItem>
           </IonCard>
        </> 
    );
};
  
export default ContactProfile;


/*


                <IonCard>
                    <IonItem className='height'>
                        <IonAvatar className='img' slot='start'>
                        <IonFab >
                            <IonFabButton>
                            <IonIcon icon={add}></IonIcon>
                            </IonFabButton>
                        </IonFab>
                        </IonAvatar>
            
                        <IonLabel>
                        <IonLabel> Create Group with  </IonLabel>
                        </IonLabel>
                    </IonItem>

                    <IonItem className='height'>
                        <IonAvatar slot='start'>
                        <img src={"https://ionicframework.com/docs/img/demos/avatar.svg"} alt="Silhouette of a person's head" />
                        </IonAvatar>
                            
                        <IonLabel>
                        <IonLabel> {"FS IT:Sys Sup"} </IonLabel>
                            
                        <p> {"item.description"} </p>
                        </IonLabel>
                    </IonItem>
                </IonCard>

                <IonCard>
                    <IonItem className='danger'>
                        <IonLabel>Share Contact </IonLabel>
                    </IonItem>

                    <IonItem className='danger'>
                        <IonLabel>Clear Chats</IonLabel>
                    </IonItem>

                    <IonItem className='danger'>
                        <IonLabel>Block </IonLabel>
                    </IonItem>
                </IonCard>

                */