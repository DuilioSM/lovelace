import React, { useEffect } from 'react';
import croquis from '../assets/images/crokis.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Croquis.scss';

gsap.registerPlugin(ScrollTrigger)

function Croquis(){
  useEffect(() => {
    gsap.from('.croquis-container', {
      duration: 2,
      y: '100',
      opacity: 0,
      ease: 'ease',
      scrollTrigger: {
        trigger: '.budget-container',
        start: 'top 100%',
        end: false,
        toggleActions: 'restart complete reverse reset'
      }
    })
  })
  return(
    <section className='croquis-container'>
      <img className='croquis-img' src={croquis} alt="Croquis de Qualtia" />
      <article className='croquis-info'>
        <h2 className='croquis-title'>Croquis Qualtia</h2>
        <p className='croquis-text'>Es una oficina bastante modesta, mas sin embargo cuenta con el tamaño ideal para realizar las adecuaciones necesarias, además gracias a su sencillo diseño nos facilita mucho el implementar nuestras soluciones</p>
        <ul>
          <li className='croquis-li'>Mide 76 metros de ancho por 93 metros de largo</li>
          <li className='croquis-li'>Cuenta con cuatro espacios los cuales incluyen sala ejecutiva, oficina de control, un par de oficinas y un sanitario propio para la oficina</li>
        </ul>
      </article>
    </section>
  );
};

export default Croquis;