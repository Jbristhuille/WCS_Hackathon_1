/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-11-25 08:42:53
 * @ Description: Card component
 */

/* SUMMARY
    * React
    * Ionic
    * Components
*/

/* React */
import React from 'react';
import { NavLink } from 'react-router-dom';
/***/

/* Ionic */
import {
    IonCard,
    IonCardHeader,
    IonCardTitle
} from '@ionic/react';
/***/

/* Components */
import ImgSlider from '../img-slider/ImgSlider';
/***/

/* Styles */
import './Card.css';
/***/

interface Details {
    imgs: string[],
    name: string,
    country: string,
    coords: string,
    description: string,
    _id: string
};

interface Props {
    details: Details,
    index: number
};

const Card = (props: Props) => {
    return (
        <NavLink to={`/destinations/${props.details._id}`} className="card-details">
            <IonCard>
                <ImgSlider index={props.index} imgs={props.details.imgs} />
                <IonCardHeader>
                    <IonCardTitle>{props.details.name}</IonCardTitle>
                </IonCardHeader>
            </IonCard>
        </NavLink>
    );
};

export default Card;