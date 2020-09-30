import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/antoniovictormt" title="Antonio Victor Melo Trindade">
        <img className="Logo" src={Logo} alt="Logo Esportflix" width="150px" />
      </a>
      <p>
        Proudly created during the
        {' '}
        <a href="https://www.alura.com.br/" title="Alura">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
