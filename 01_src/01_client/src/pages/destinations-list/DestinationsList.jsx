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
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle
} from '@ionic/react';
/***/

/* React */
import React, { useEffect, useState } from 'react';
/***/

/* Node modules */
import axios from 'axios';
import ImgSlider from '../../components/img-slider/ImgSlider';
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
                {list.map((dest, index) => {
                    return (
                        <IonCard key={dest._id}>
                            <ImgSlider index={index} imgs={dest.imgs} />
                            <IonCardHeader>
                                <IonCardTitle>{dest.name}</IonCardTitle>
                            </IonCardHeader>
                        </IonCard>
                    )
                })}
            </IonContent>
        </IonPage>
    );
};

export default DestinationsList;