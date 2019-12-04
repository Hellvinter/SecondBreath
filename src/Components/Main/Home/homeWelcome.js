import React  from 'react';

import { SocialMedia, socialLinks } from '../../Common/SocialMedia/socialMedia';
import EstateFilter from '../../Common/EstateFilter/estateFilter';

const HomeWelcome = () => {

    return (
        <section id='homeWelcome'>
            <div className='container'>
                <h1>
                    Ownening a home is a key stone of wealth...
                </h1>
                <h4>
                    Both financial affluence and emotional security. If you don't
                    own a home, buy one both financial affluence and emotional security
                </h4>
                <ul>
                    <SocialMedia object={ socialLinks } />
                </ul>
                <EstateFilter />
            </div>
        </section>
    );
}

export default HomeWelcome;