/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-11-24 10:28:44
 * @ Description: Home page
 */

/* SUMMARY
    * React
    * Ionic
*/

/* React */
import React from 'react';
/***/

/* Ionic */
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
/***/

const Home = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Accueil</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
            </IonContent>
        </IonPage>
    );
};

export default Home;