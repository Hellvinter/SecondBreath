import React from 'react';

import flex from '../../Styles/modules/flex.module.css';

import {SocialMedia, socialLinks} from '../Common/SocialMedia/socialMedia';

function Contacts () {
    return (
        <section id='contacts'>
            <div className='container'>
                <h2>Toll free +1 (555) 555-5555</h2>
                <h3>Big House</h3>
                <ul 
                    className={
                        `${flex.flexRow} ${flex.justifyAround}`
                    }
                >
                    <SocialMedia 
                        object={socialLinks}
                    />
                </ul>
            </div>
        </section>
        
    )
}

export default Contacts;