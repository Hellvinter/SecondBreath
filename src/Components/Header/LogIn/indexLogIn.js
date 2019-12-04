import React from 'react'
import auth from './auth';
import { useHistory } from 'react-router-dom'

import buttons from '../../../Styles/modules/buttons.module.css';

function IndexLogIn () {

    let history = useHistory();

    return (
        <div id='indexLogIn'>
            { !auth.authenticated ? (
                <button 
                    className={
                        `
                            ${buttons.common} 
                            ${buttons.borderless}
                            ${buttons.rightOffset}
                        `
                    }
                    onClick={ () => {
                        auth.login(() => {
                            history.push("/loged")
                        })        
                    }}
                >
                    Sign in
                </button>
                ) : (
                <button 
                    className={
                        `
                            ${buttons.generic} 
                            ${buttons.borderless}
                            ${buttons.rightOffset}
                        `
                    }
                    onClick={ () => {
                        auth.logout(() => {
                            history.push("/")
                        })        
                    }}
                >
                    Sign out
                </button> 
                )
            } 
        </div>
    );
}                

export default IndexLogIn;