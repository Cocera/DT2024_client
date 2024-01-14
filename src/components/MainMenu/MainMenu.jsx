// MainMenu.jsx

import React from 'react';
import './MainMenu.scss';

function MainMenu() {
    const buttons = [
        { icon: 'icon-path-1', action: () => console.log('Action 1') },
        { icon: 'icon-path-2', action: () => console.log('Action 2') },
        { icon: 'icon-path-3', action: () => console.log('Action 2') },
        { icon: 'icon-path-4', action: () => console.log('Action 2') },
        { icon: 'icon-path-5', action: () => console.log('Action 2') },
    ];

    return (
        <div className='container-main-menu'>
            <div className="main-menu">
                <button className='main-circle-button'>Boton</button>
                <div className='container-turn'>
                    <button className='circle-button button-one'>Boton</button>
                    <button className='circle-button button-two'>Boton</button>
                    <button className='circle-button button-three'>Boton</button>
                    <button className='circle-button button-four'>Boton</button>
                    <button className='circle-button button-five'>Boton</button>

                </div>
            </div>
        </div>
    );
}

export default MainMenu;
