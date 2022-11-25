/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-11-24 15:47:20
 * @ Description: Options page
 */

/* SUMMARY
    * Ionic
    * React
    * Context
    * Styles
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
    IonList,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonLabel,
    IonIcon
} from '@ionic/react';
import axios from 'axios';

import { colorPaletteSharp, flagSharp } from 'ionicons/icons';
/***/

/* React */
import React, { useContext, useEffect, useState } from 'react';
/***/

/* Context */
import { ThemeContext } from '../../contexts/Context';
/***/

/* Styles */
import './Options.css';
/***/

const Options = () => {
    const [destinations, setDestinations] = useState<any>();

    const context = useContext<any>(ThemeContext);
    const [theme, setTheme] = useState(context.config.theme);
    const [start, setStart] = useState(context.config.start);

    useEffect(() => {
        setTheme(context.config.theme);
        setStart(context.config.start);
    }, [context]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/destinations`).then((res) => {
            setDestinations(res.data);
        }).catch((err) => {
            console.error(err);
        });
    }, []);

    const updateOptions = (e: any, type: string) => {
        let options = {theme: theme, start: start};

        if (type === 'theme') {
            options.theme = e.detail.value;
            setTheme(e.detail.value);
        }

        if (type === 'start') {
            options.start = e.detail.value;
            setStart(e.detail.value);
        }
        
        context.updateConfig(options);
    }

    return (
        <IonPage className="options-page">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />   
                    </IonButtons>

                    <IonTitle>Options</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonList>
                    <IonItem>
                        <IonLabel>
                            <IonIcon slot="start" icon={flagSharp}/>    
                            Départ:
                        </IonLabel>
                        
                        {destinations && 
                            <IonSelect placeholder="Choix du point de départ" value={start} onIonChange={(e) => updateOptions(e, 'start')}>
                                {destinations.map((el: any) => {
                                    return <IonSelectOption key={el._id} value={el.code}>{el.name}</IonSelectOption>
                                })}
                            </IonSelect>
                        }
                    </IonItem>

                    <IonItem>
                        <IonLabel>
                            <IonIcon slot="start" icon={colorPaletteSharp} />
                            Thème:
                        </IonLabel>
                        
                        <IonSelect  placeholder="Choix du thème" value={theme} onIonChange={(e) => updateOptions(e, 'theme')}>
                            <IonSelectOption value="light">Light</IonSelectOption>
                            <IonSelectOption value="dark">Dark</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Options;