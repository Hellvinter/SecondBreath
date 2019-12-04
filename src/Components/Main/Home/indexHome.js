import React from 'react';

import HomeWelcome from './homeWelcome';
import InvestNow from './investNow';
import LatestProperty from './latestProperytListed';

function IndexHome () {
    return (
        <main className='main'>
            <HomeWelcome />
            <InvestNow />
            <LatestProperty />
        </main>
    );
}

export default IndexHome;

// for Estate Filter make generic styles for usage across app on all of the instanses of that filter
// but also, make an module styles and apply them through props in order to modify appearence of the component slitly 
// where that needed