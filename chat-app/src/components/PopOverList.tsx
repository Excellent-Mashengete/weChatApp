import { IonContent, IonItem, IonList, IonPopover } from "@ionic/react";
import { useHistory } from "react-router";
import { PopoverContainer } from "../interface/Popover";

interface ChatContainer{
    list: PopoverContainer [];
    user: any;
}

const Popoverlist: React.FC<ChatContainer> = ({list, user}) => {
    const history = useHistory();
    
    function newRoutes(params:any) {
        history.push(params, {user});
    }

    return (
        <IonPopover trigger="popover-button" >
            <IonContent>
                <IonList>
                    {list.map((res:any) => {
                        return (
                            <IonItem key={res.name} button detail={res.detail} lines={res.lines} onClick={()=>newRoutes(res.href)}>{res.name}</IonItem>
                        )
                    })}
                </IonList>
            </IonContent>
        </IonPopover>
    );
};
  
export default Popoverlist;