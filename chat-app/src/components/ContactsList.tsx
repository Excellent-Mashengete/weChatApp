import { IonAvatar, IonContent, IonItem, IonLabel, IonList, IonSkeletonText, IonText} from "@ionic/react";
import { personAdd } from "ionicons/icons";
import { ContactPayload, Contacts } from '@capacitor-community/contacts';
import { StatusBar } from '@capacitor/status-bar';
import { ContactInterface } from "../interface/Contacts";
import List from "./ListContacts";
import { useHistory } from "react-router";
import { useState } from "react";


interface ContainerProps {
    contacts: ContactInterface[];
}

const ContactList: React.FC<ContainerProps> = ({contacts}:ContainerProps ) => { 
    const history = useHistory();
    const [groupList, setGroup] = useState<any[]>([]);
    const [query, setQuery] = useState<any>("")
    const currentLocation =  history.location.pathname;
    
    function addedMembers(member:any){  
        setGroup((group:any) => {
            console.log();
            
            // if ( !member.id) {
                return (
                    [...group, member]
                )
            // }else {
            //     return 
            // }   
        })
    }
    console.log(groupList);
    
    return (
        <IonContent>
            <IonList>
                <IonItem>
                    {/* {currentLocation !== '/contacts' ? 
                            groupList.map((group:any) => { 
                                return (
                                    <IonAvatar key={group.id} className='img' slot="start">
                                        <img src={group.avatar} alt="Silhouette of a person's head" />  
                                    </IonAvatar>
                                )
                            })
                
                        :
                            <></>
                    } */}
                </IonItem>
                {/* skeleton loading */}
                <IonItem detail={false} lines="none">
                    <IonAvatar  slot="start">
                        <IonSkeletonText className="img"></IonSkeletonText>
                    </IonAvatar>

                    <IonLabel>
                        <IonSkeletonText animated={true} style={{"width": "30%"}}></IonSkeletonText>
                        <IonSkeletonText animated={true} style={{"width": "30%"}}></IonSkeletonText>
                    </IonLabel>
                </IonItem>

                {/* Registered loading */}
                {/* {currentLocation === '/contacts' ?
                    <IonText className="px-1 m-4 ">Contants on LiveChat Box</IonText>
                    :
                    <></>
                    }    
                */}
                {currentLocation === '/contacts' ? 
                        contacts.map((item:any) => { 
                            return (
                                <List key={item.id} name={item.name } avatar={item.avatar} phone={ item.phone }  />    
                            );
                        })
                    
                    :
                        contacts.map((item:any) => { 
                            return (
                                <div key={item.id} onClick={() =>addedMembers(item)}>
                                    <List  name={item.name } avatar={item.avatar} phone={ item.phone }  />    
                                </div>
                            );
                        })
                }
            </IonList>
        </IonContent>

    );
};

export default ContactList;