import React from 'react';

import flex from '../../../Styles/modules/flex.module.css';

import Carousel from './carousel/indexCarousel';

function LatestProperty () {
    return (
        <section id='latestProperty'>
            <div 
                className={
                    `
                        container 
                        ${flex.flexColumn}
                        ${flex.alignCenter}
                    `
                }
            >
                <h2>
                    Choce latest listet property 
                </h2>
                <Carousel />
            </div>
        </section>
    )
}
// /columnFlexSpaceAround
export default LatestProperty