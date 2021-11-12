import React, { useEffect } from 'react';
import gantt from '../assets/images/diagrama.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Gantt.scss';

gsap.registerPlugin(ScrollTrigger)

function Gantt() {
  useEffect(() => {
    gsap.from('.gantt-container', {
      duration: 2,
      y: '100',
      opacity: 0,
      ease: 'ease',
      scrollTrigger: {
        trigger: '.gantt-img',
        start: 'top 60%',
        end: false,
        toggleActions: 'restart complete reverse reset'
      }
    })
  })
  return (
    <section className='gantt-container'>
      <h3 className='gantt-title'>Diagrama de Gantt</h3>
      <img className='gantt-img' src={gantt} alt="Croquis de Qualtia" />
    </section>
  );
};

export default Gantt;