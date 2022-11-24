/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-11-24 09:07:46
 * @ Description: Menu component
 */

/* SUMMARY
  * Ionic
  * React
  * Styles
*/

/* Ionic */
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle
} from '@ionic/react';

import {
  homeOutline,
  homeSharp,
  airplaneOutline,
  airplaneSharp,
  cogOutline,
  cogSharp
} from 'ionicons/icons';
/***/

/* React */
import { useLocation } from 'react-router-dom';
/***/

/* Styles */
import './Menu.css';
/***/

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>LOGO</IonListHeader>

          <IonMenuToggle autoHide={false}>
            <IonItem className={location.pathname === "/home" ? 'selected' : ''} routerLink={"/home"} routerDirection="none" lines="none" detail={false}>
              <IonIcon slot="start" ios={homeOutline} md={homeSharp} />
              <IonLabel>Accueil</IonLabel>
            </IonItem>

            <IonItem className={location.pathname === "/destinations" ? 'selected' : ''} routerLink={"/destinations"} routerDirection="none" lines="none" detail={false}>
              <IonIcon slot="start" ios={airplaneOutline} md={airplaneSharp} />
              <IonLabel>Destinations</IonLabel>
            </IonItem>

            <IonItem className={location.pathname === "/options" ? 'selected' : ''} routerLink={"/options"} routerDirection="none" lines="none" detail={false}>
              <IonIcon slot="start" ios={cogOutline} md={cogSharp} />
              <IonLabel>Options</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
