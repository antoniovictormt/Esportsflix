import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import { Button } from '../Button';
import './menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Esportsflix Logo" title="Esportflix" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/register/video" title="Register New Video">
        New Video
      </Button>
    </nav>
  );
}

export default Menu;
