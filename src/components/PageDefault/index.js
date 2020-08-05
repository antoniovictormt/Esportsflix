import React from 'react';
import { Link } from 'react-router-dom';
import { Main } from './styles';
import Logo from '../../assets/img/logo.png';
import { Button } from '../Button';
import Footer from '../Footer';
import '../Menu/menu.css';

// eslint-disable-next-line react/prop-types
function PageDefault({ children, paddingAll }) {
  return (
    <>
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="Esportsflix Logo" />
        </Link>

        <Button as={Link} className="ButtonLink" to="/register/video">
          New Video
        </Button>
      </nav>
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
