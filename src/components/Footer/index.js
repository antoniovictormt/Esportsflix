import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/antoniovictormt">
        <img className="Logo" src={Logo} alt="Logo Esportflix" width="150px" />
      </a>
      <p>
        Proudly created during a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
