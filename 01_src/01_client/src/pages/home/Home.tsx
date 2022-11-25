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
import React, { useState } from 'react';
/***/

/* Ionic */
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonIcon
} from '@ionic/react';

import { diceSharp } from 'ionicons/icons';
/***/

/* Styles */
import './Home.css';
/***/

/* Components */
import Card from '../../components/card/Card';
/***/

/* Node modules */
import axios from 'axios';
/***/

const Home = () => {
    const [random, setRandom] = useState();

    const getRandom = () => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/destinations/random`).then((res) => {
            setRandom(res.data);
        }).catch((err) => {
            console.error(err);
        });
    }

    return (
        <IonPage className='home-page'>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Accueil</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen className="home-page-content">
                {random && <Card index={0} details={random}/>}

                <IonButton size="large" shape="round" expand="block" onClick={getRandom}>
                    Random
                    <IonIcon slot="end" icon={diceSharp}></IonIcon>
                </IonButton> 
            </IonContent>
        </IonPage>
    );
};

export default Home;