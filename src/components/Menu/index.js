import React from 'react';
import Logo from '../../assets/img/logo.png'
//import ButtonLink from './components/ButtonLink'//
import Button from '../Button'
import "./menu.css"

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Nintendoflix Logo" />
            </a>

            <Button as='a' className="ButtonLink" href="/">
                New Video
            </Button>
        </nav>
    );
}

export default Menu