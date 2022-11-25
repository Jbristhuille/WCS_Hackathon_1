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
    IonProgressBar,
    IonRefresher,
    IonRefresherContent
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
    const [onLoading, setOnloading] = useState(true);

    const getList = (e?: any) => {
        setOnloading(true);
        setList([]);

        axios.get(`${process.env.REACT_APP_SERVER_URL}/destinations`).then((res) => {
            setList(res.data);
        }).catch((err) => {
            console.error(err);
        }).then(() => {
            setOnloading(false);
            if (e) e.detail.complete()
        });
    }

    useEffect(() => {
        getList();
    }, []);

    return (
        <IonPage className='destinations-list'>
            {onLoading && <IonProgressBar type="indeterminate"></IonProgressBar>}
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Destinations</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonRefresher slot="fixed" onIonRefresh={getList}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                {list.map((dest: any, index: number) => {
                    return (
                        <Card key={dest._id} index={index} details={dest}/>
                    )
                })}
            </IonContent>
        </IonPage>
    );
};

export default DestinationsList;