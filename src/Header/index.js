import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import foto from '../assets/images/logo.svg';
import { TimelineLite, } from 'gsap';
import './Header.scss';

function Header() {
  let t1 = new TimelineLite({ delay: 0.3 });

  useEffect(() => {
    t1.from('.header-container',
      { y: -15, opacity: 0, ease: 'ease-in', delay: .5 }, 'Start');
  })
  return (
    <header className="header-container">
      <Link to='/'>
        <img className="header-logo" src={foto} alt="Logo" />
      </Link>
      <ul className="header-buttons">
        <li className="header-buttons_item">
          <Link to='/'>
            Home
          </Link>
        </li>
        <li className="header-buttons_item">
          <Link to='/AboutUs'>
            About Us
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;