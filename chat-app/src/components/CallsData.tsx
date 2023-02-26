import { IonList } from '@ionic/react';
import { CallLogInterface } from '../interface/Calls';
import Logs from "../components/Logs";

interface ContainerProps {
    logs: CallLogInterface[];
}

const CallLogs: React.FC<ContainerProps> = ({logs}:ContainerProps ) => { 
    return (
        <>
            <IonList>
                {logs.map((item:any) => { 
                    return (
                        <div key={item.id} >
                            <Logs name={item.name} avatar={item.avatar} phone={item.phone} datesend={item.datesend} commType={item.commType} />    
                        </div>
                    );
                })}
            </IonList>
        </>
    );
};

export default CallLogs;
