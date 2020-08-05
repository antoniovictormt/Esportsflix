import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import { Button } from '../Button';
import './menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Esportsflix Logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/register/video">
        New Video
      </Button>
    </nav>
  );
}

export default Menu;
