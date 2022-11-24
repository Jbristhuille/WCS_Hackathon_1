/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-11-24 12:09:18
 * @ Description: Images slider component
 */

/* SUMMARY
    * React
    * Styles
*/

/* React */
import React, { useState } from 'react';
/***/

/* Styles */
import './ImgSlider.css';
/***/

interface Imgs {
    imgs: string[],
    index: number
};

function ImgSlider(props:Imgs) {
    const [current, setCurrent] = useState(props.index);

    return (
        <div className="imgs-slider">
            <img alt={`Img items n°${current+1}`} src={process.env.REACT_APP_SERVER_URL+'/'+props.imgs[current]} />

            <div className='slider-controller'>
                {props.imgs.map((img, i) => (
                    <div    className={`slider-controller-button ${i === current && 'selected'}`}
                            key={img.slice(0,3)+i}
                            onClick={() => setCurrent(i)}>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImgSlider;