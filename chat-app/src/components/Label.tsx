import { IonLabel } from "@ionic/react";

interface LabelContainer{
    styles: any;
    name:any
}

const Labels: React.FC<LabelContainer> = ({styles, name}) => {
    return (
        <IonLabel className={styles}>{name}</IonLabel> 
    );
};
  
export default Labels;