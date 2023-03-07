import {IonButton, IonButtons, IonFabButton, IonFooter, IonIcon, IonItem, IonTextarea, IonToolbar} from '@ionic/react';
import { attach, cameraOutline, send } from 'ionicons/icons';

const TypingArea: React.FC = () => {
    return (
        <IonFooter className='border-none  bg-transparent'>
            <div className='flex foot h-22 max-h-28'>
                <IonToolbar className='rounded-2xl'>
                    <IonItem detail={false} lines="none" className='max-h-28 overflow-y-auto'>
                        <IonButtons  >
                            <IonButton className='text-lg' >
                                <IonIcon color="primary" icon={attach} />
                            </IonButton>
                        </IonButtons>
            
                        <div className="w-full ">
                            <IonTextarea  autoGrow={true} placeholder="Message"  />
                        </div>

                        <IonButtons>
                            <IonButton slot='end' className='text-lg' >
                                <IonIcon color="primary" icon={cameraOutline} />
                        </IonButton>
                    </IonButtons>
                    </IonItem>
                </IonToolbar>
            
                <IonButtons className='ml-2' >
                    <IonFabButton type='submit' >
                        <IonIcon  icon={send} />
                    </IonFabButton>
                </IonButtons>
            </div>
        </IonFooter>
    );
};
  
export default TypingArea;