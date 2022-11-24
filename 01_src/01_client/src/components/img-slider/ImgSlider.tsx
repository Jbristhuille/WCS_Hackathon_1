/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-11-24 12:09:18
 * @ Description: Images slider component
 */

/* SUMMARY
    * React
    * Ionic
    * Styles
*/

/* React */
import React, { useEffect, useState } from 'react';
/***/

/* Ionic */
import { IonIcon } from '@ionic/react';
import { chevronBack, chevronForward } from 'ionicons/icons';
/***/

/* Styles */
import './ImgSlider.css';
/***/

interface Imgs {
    imgs: string[],
    index: number,
    big?: boolean
};

function ImgSlider(props:Imgs) {
    const [current, setCurrent] = useState(0);
    
    const nextSlide = (e: any, i: number) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrent(i);
    }

    useEffect(() => {
        setCurrent(props.index);
    }, [props.index]);

    return (
        <div className="imgs-slider">
            <img alt={`Img items n°${current+1}`} src={process.env.REACT_APP_SERVER_URL+'/'+props.imgs[current]} />

            {!props.big ?
                <div className='slider-controller'>
                    {props.imgs.map((img, i) => (
                        <div    className={`slider-controller-button ${i === current && 'selected'}`}
                                key={img.slice(0,3)+i}
                                onClick={(e) => nextSlide(e, i)}>
                        </div>
                    ))}
                </div>
            :
                <div className='slider-controller-big'>
                    <IonIcon icon={chevronBack} onClick={(e) => {
                        let i = props.imgs[current-1] ? current-1 : props.imgs.length-1;
                        nextSlide(e, i);
                    }}></IonIcon>

                    <IonIcon icon={chevronForward} onClick={(e) => {
                        let i = props.imgs[current+1] ? current+1 : 0;
                        nextSlide(e, i);
                    }}></IonIcon>
                </div>
            }
        </div>
    );
};

export default ImgSlider;