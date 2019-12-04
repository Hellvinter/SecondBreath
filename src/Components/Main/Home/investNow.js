import React from 'react';
import { Link } from 'react-router-dom';

import buttons from '../../../Styles/modules/buttons.module.css';
import flex from '../../../Styles/modules/flex.module.css';

function InvestNow () {
    return (
        <section 
            id='callToAction' 
            className={
                `${flex.flexRow} ${flex.justifyAround}`
            }>
            <h3>
                Want to start gain wealth?
            </h3>
            <Link
                to={'/'}
                className={
                    `
                    ${buttons.generic} 
                    ${buttons.borderless}
                    ${buttons.big}
                    `
            }>
                Invest now
            </Link>
        </section>
    );
}

export default InvestNow;