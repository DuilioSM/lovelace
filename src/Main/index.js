import React, { useEffect } from "react";
import './Main.scss';
import { TimelineLite } from 'gsap';

function Main() {
  let t1 = new TimelineLite({ delay: 0.3 });

  useEffect(() => {
    t1.from('.home-title', {y: 30, opacity: 0, ease: 'ease-in', delay: 0.3 }, 'Start');
    t1.staggerFrom('.home-subtitle', 1, {y: 45, ease: 'ease-in', opacity: 0 }, 0.5, 'Start');
  })
  return (
    <div className='home-container'>
      <h1 className='home-title'>
        Creando experiencias digitales que
        <br />
        Ayudan a crecer las empresas
      </h1>
      <h2 className='home-subtitle'>
        Ayudamos a las empresas a crecer, lanzar productos y obtener una ventaja competitiva en el mundo digital de hoy.
      </h2>
    </div>
  );
};

export default Main;