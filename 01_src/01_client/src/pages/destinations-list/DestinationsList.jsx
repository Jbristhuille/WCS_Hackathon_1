/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-11-24 11:05:27
 * @ Description: Destinations list page
 */

/* SUMMARY
    * Ionic
    * React
*/

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

/* React */
import React from 'react';
/***/

const DestinationsList = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Destinations</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
            </IonContent>
        </IonPage>
    );
};

export default DestinationsList;