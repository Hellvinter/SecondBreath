import React from 'react';

import carousel from '../../../Styles/modules/carousel.module.css';


const ItemOfCarousel = props => {

    const arrows = {
        left: "https://img.icons8.com/clouds/80/000000/circled-chevron-left.png",
        right: "https://img.icons8.com/clouds/80/000000/circled-chevron-right.png",
        alt: 'arrow'
    }

    return (
        <div className={`${carousel.carousel}`}>
            <button
                onClick={props.previous} 
                className={`${carousel.arrow}`}
                // disable previouse button if index equal 0
                // that way I temporaly fix issue with negative index
                disabled={props.count.index === 0}
            >
                <img src={arrows.left} alt={arrows.alt} />
            </button>
            <div className={`${carousel.view}`}>
                {props.data.map( item => (
                    <div
                        key={item._id} 
                        className={`${carousel.card}`}
                    >
                        <img  
                            src={props.count.picture} 
                            alt={props.count.city}
                        />
                        <h3>{props.count.city}</h3>
                        <p>{props.count.address}</p>
                    </div>
                ))}
            </div>
            <button 
                onClick={props.next}
                className={`${carousel.arrow}`}
            >
                <img src={arrows.right} alt={arrows.alt}/>
            </button>
        </div>
    );
}

export default ItemOfCarousel;