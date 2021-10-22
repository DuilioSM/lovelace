import React from 'react';
import logo from '../assets/images/logo.png'
import './Footer.scss'

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-left'>
        <a href="https://es.wikipedia.org/wiki/Ada_Lovelace">Facebook</a>
        <a href="https://es.wikipedia.org/wiki/Ada_Lovelace">lovelace@contacto.com</a>
        <p>+52 3325979382</p>
      </div>
      <div className='footer-right'>
        <img
          className='footer-logo'
          src={logo}
          alt="logo"
        />
      </div>
    </footer>
  );
};

export default Footer;