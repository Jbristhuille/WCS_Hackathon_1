/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-11-24 11:05:27
 * @ Description: Destinations list page
 */

/* SUMMARY
    * Ionic
    * React
    * Node modules
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
import React, { useEffect, useState } from 'react';
/***/

/* Node modules */
import axios from 'axios';
/***/

/* Styles */
import './DestinationsList.css';
import Card from '../../components/card/Card';
/***/

const DestinationsList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/destinations`).then((res) => {
            setList(res.data);
        }).catch((err) => {
            console.error(err);
        });
    }, []);

    return (
        <IonPage className='destinations-list'>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Destinations</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                {list.map((dest, index) => {
                    return (
                        <Card key={dest._id} index={index} details={dest}/>
                    )
                })}
            </IonContent>
        </IonPage>
    );
};

export default DestinationsList;