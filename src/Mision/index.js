import React, {useEffect} from 'react';
import misionImage from '../assets/images/services-thumbnail.jpeg'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Mision.scss'

gsap.registerPlugin(ScrollTrigger)

function Mision() {
  useEffect(() => {
    gsap.from('.mision-container', {
      duration: 2,
      y: '100',
      opacity: 0,
      ease: 'ease',
      scrollTrigger: {
        trigger: '.mision-container_card',
        start: 'top 80%',
        end: false,
        toggleActions: 'restart complete reverse reset'
      }
    })
  })

  return (
    <div className='mision-container'>
      <div className='mision-container_card'>
        <div className='mision-left'>
          <div className='mision-left_item'>
            <h2 className='mision-title'>
              Visión
            </h2>
            <p className='mision-subtitle'>
              Tener un mundo globalizado en el cual, cualquier persona en cualquier lugar pueda tener acceso a cualquier producto, así bien eliminando las barreras físicas mediante la implementación de soluciones tecnológicas en las pequeñas y medianas empresas.
            </p>
            <a className='mision-button' href="https://www.youtube.com/watch?v=p0IG1bYDw2k" target="_blank" rel="noreferrer">Conocer mas</a>
          </div>
          <div className='mision-left_item'>
            <h2 className='mision-title'>
              Misión
            </h2>
            <p className='mision-subtitle'>
              En Lovelance buscamos introducir tu marca al mundo digital, brindándole un crecimiento exponencial, aprovechando el mercado tecnológico.
              Logramos que nuestros clientes sean lideres en su mercado mediante el uso de las herramientas digitales
            </p>
            <a className='mision-button' href="https://www.youtube.com/watch?v=ig6pXOUm_dQ" target="_blank" rel="noreferrer">Conocer mas</a>
          </div>
        </div>
        <div className='mision-right'>
          <img className='mision-image' alt="services" src={misionImage} />
        </div>
      </div>
    </div>
  );
};

export default Mision;