import { IonContent, IonFab, IonFabButton, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
//import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/react';
import { add, chevronBack, chevronDown, chevronForward, chevronUp } from 'ionicons/icons';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonTitle>Teste</IonTitle>
        <IonFab slot="fixed" horizontal="end" vertical="bottom">
          <IonFabButton>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
