import React, { useEffect } from 'react';
import presupuesto from '../assets/images/presupuesto.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Budget.scss';

gsap.registerPlugin(ScrollTrigger)

function Budget() {
  useEffect(() => {
    gsap.from('.budget-container', {
      duration: 2,
      y: '100',
      opacity: 0,
      ease: 'ease',
      scrollTrigger: {
        trigger: '.budget-container',
        start: 'top 60%',
        end: false,
        toggleActions: 'restart complete reverse reset'
      }
    })
  })
  return (
    <section className='budget-container'>
      <article className='budget-info'>
        <h2 className='budget-title'>Presupuesto</h2>
        <p className='budget-text'>En este caso no tuvimos alguna limitante para el presupuesto, mas sin embargo siempre se busca que el cliente tenga el mayor ahorro en gastos, además en este caso realizamos una implementación tanto en software como en hardware que puede durar bastantantes años</p>
      </article>
      <img
        className='budget-img'
        src={presupuesto}
        alt="Presupuesto para la problematica"
      />
    </section>
  );
};

export default Budget;