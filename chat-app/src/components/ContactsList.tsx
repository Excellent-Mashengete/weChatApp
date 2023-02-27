import { IonAvatar, IonFab, IonFabButton, IonIcon, IonItem, IonLabel, IonList, IonSkeletonText, IonText} from "@ionic/react";
import { arrowForward } from "ionicons/icons";
import { ContactPayload, Contacts } from '@capacitor-community/contacts';
import { StatusBar } from '@capacitor/status-bar';
import { ContactInterface } from "../interface/Contacts";
import { useHistory } from "react-router";
import { useState } from "react";
import Modal from './NewGroup'
import List from "./ListContacts";

interface ContainerProps {
    contacts: ContactInterface[];
}

const ContactList: React.FC<ContainerProps> = ({contacts}:ContainerProps ) => { 
    const history = useHistory();
    const [groupList, setGroup] = useState<any[]>([]);
    const currentLocation =  history.location.pathname;
    
    function addedMembers(member:any){ 
        if (groupList.includes(member)) {
            handleDelete(groupList.findIndex((seat) => seat.id === member.id));
        }else{
            setGroup((group:any) => [...group, member])
        }
    }
    
    function handleDelete(data:any) {
        const newElements = [...groupList];
        newElements.splice(data, 1);
        setGroup(newElements);
    }

    return (
        <  >
            <IonList>
                {currentLocation !== '/contacts' &&  currentLocation !== '/makecalls'  
                    ?  
                        <IonList className="flex gap-6 ml-6 mr-6 overflow-x-auto" >
                            {groupList.map((group:any) => { 
                                return (
                                    <IonLabel key={group.id} className='height snap-mandatory snap-x'  >
                                       <IonLabel onClick={() => { handleDelete(groupList.findIndex((seat) => seat.id === group.id));  console.log(groupList);}} className="btn btn-xs btn-circle bottom-11 ml-9 absolute ">{'X'}</IonLabel>
                                            <IonAvatar  className='img' slot="start">
                                                <img src={group.avatar} alt="Silhouette of a person's head" />
                                            </IonAvatar>
                                        <IonLabel>{group.name}</IonLabel>
                                    </IonLabel>
                                )
                            })}
                        </IonList>
                    :
                        <></>
                }
              
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
                {currentLocation === '/contacts' ?
                    <IonText className="px-1 m-4 ">Contants on LiveChat Box</IonText>
                    :
                    <></>
                }    
               
                {currentLocation === '/contacts' ? 
                        contacts.map((item:any) => { 
                            return (
                                <List key={item.id} name={item.name } avatar={item.avatar} phone={ item.phone }  />    
                            );
                        })
                    :
                        [currentLocation === '/newgroup' ? 
                            contacts.map((item:any) => { 
                                return (
                                    <div key={item.id} onClick={() =>addedMembers(item)}>
                                        <List name={item.name } avatar={item.avatar} phone={ item.phone }  />    
                                    </div>
                                );
                            })
                        
                        :
                            contacts.map((item:any) => { 
                                return (
                                    <List key={item.id} name={item.name } avatar={item.avatar} phone={ item.phone }  />    
                                );
                            })
                    ]   
                }               
            </IonList>
            
            { currentLocation !== '/contacts' &&  currentLocation !== '/makecalls'
                ? 
                    <IonFab slot="fixed" vertical="bottom" horizontal="end">
                        <IonFabButton id="open-modal" color="secondary">
                            <IonIcon icon={arrowForward}></IonIcon>
                        </IonFabButton>
                    </IonFab>
                :
                    null
            }
            <Modal list={groupList}></Modal>
        </>
    );
};

export default ContactList;