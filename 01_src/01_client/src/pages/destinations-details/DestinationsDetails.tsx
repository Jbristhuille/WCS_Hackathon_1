/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-11-24 13:26:28
 * @ Description: Destinations details page
 */

/* SUMMARY
    * React
    * Ionic
    * Node modules
    * Components
*/

/* React */
import React, { useEffect, useState } from 'react';
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
    IonIcon,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonItem,
    IonLabel,
    IonList
} from '@ionic/react';

import { rocketSharp } from 'ionicons/icons';
/***/

/* Node modules */
import axios from 'axios';
import { RouteComponentProps } from 'react-router';
/***/

/* Components */
import ImgSlider from '../../components/img-slider/ImgSlider';
/***/

interface DestinationsDetailsProps extends RouteComponentProps<{
    id: string;
}> {}

interface Details {
    name: string,
    imgs: string[],
    description: string,
    code: string,
    country: string,
    coords: string
}

const DestinationsDetails: React.FC<DestinationsDetailsProps> = ({match}) => {
    const [details, setDetails] = useState<Details>();
    const id = match.params.id;

    const openAirFr = () => {
        if (details) {
            const url = `https://wwws.airfrance.fr/search/open-dates?connections=PAR:C>${details.code}:C`;
            window.open(url);
        }
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/destinations/${id}`).then((res) => {
            setDetails(res.data);
        }).catch((err) => {
            console.error(err);
        });
    }, [id]);

    return (
        <>
            {details &&
                <IonPage>
                    <IonHeader>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonMenuButton />   
                            </IonButtons>
                            <IonTitle>{details.name}</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonContent fullscreen>
                        <IonCard>
                            <ImgSlider index={0} imgs={details.imgs} big={true} />
                            <IonCardHeader>
                                <IonCardTitle>{details.name}</IonCardTitle>
                            </IonCardHeader>

                            <IonCardContent>
                                <IonList lines="none">
                                    <IonItem>
                                        <IonLabel>
                                            <b>Pays</b>: {details.country}
                                            </IonLabel>
                                    </IonItem>

                                    <IonItem>
                                        <IonLabel>
                                            <b>Coords</b>: {details.coords}
                                            </IonLabel>
                                    </IonItem>
                                </IonList>

                                <div>{details.description}</div>
                            </IonCardContent>
                        </IonCard>

                        <IonButton expand='block' onClick={openAirFr}>
                            Réserver un vol
                            <IonIcon slot="end" icon={rocketSharp}></IonIcon>
                        </IonButton>
                    </IonContent>
                </IonPage>
            }
        </>
    );
};

export default DestinationsDetails;