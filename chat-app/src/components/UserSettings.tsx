import { IonCardSubtitle, IonItem, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router';
import { UserInterface } from '../interface/User';
import './ExploreContainer.css';


interface ContainerProps {
  users: UserInterface;
}

const UserProfile: React.FC<ContainerProps> = ({users}: ContainerProps) => {
  const history = useHistory()
  return (
    <>
      <IonItem>
        <IonLabel>
          <IonCardSubtitle className='text-lg'> Accout</IonCardSubtitle>
            <IonItem>
                <IonLabel>{users.name}</IonLabel>     
              </IonItem>

              <IonItem>
                <IonLabel>{users.cellphone}</IonLabel>     
              </IonItem>

              <IonItem button onClick={()=> history.push('/editBio', {users})}>
                <IonLabel>{users.description}</IonLabel>     
              </IonItem>
          {/* <IonItem>
            <IonLabel>{phone}</IonLabel>     
          </IonItem>
          <IonItem>
            <IonLabel>{name}</IonLabel>     
          </IonItem> */}
        </IonLabel>
      </IonItem> 
    </>
  );
};

export default UserProfile;
/*AMAPIANO MIX 2023 | 20 FEBRUARY | ROMEO MAKOTA */