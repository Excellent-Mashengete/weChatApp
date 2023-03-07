import { IonItem, IonLabel } from "@ionic/react";

interface LabelContainer{
    styles: any;
    name:any
}

const Items: React.FC<LabelContainer> = ({styles, name}) => {
    return (
        <IonItem className={styles}>

        </IonItem> 
    );
};
  
export default Items;