import React, { useEffect } from "react";
import { TimelineLite } from 'gsap';
import office from '../assets/images/office.jpg'
import './Problem.scss';

function Problem() {
  let t1 = new TimelineLite({ delay: 0.3 });

  useEffect(() => {
    t1.from('.problem-title', { y: 30, opacity: 0, ease: 'ease-in', delay: 0.7 }, 'Start');
    t1.from('.problem-text', { y: 50, opacity: 0, ease: 'ease-in', delay: 0.7 }, 'Start');
    t1.from('.problem-items', 1, { y: 60, ease: 'ease-in', opacity: 0 }, .9, 'Start');
    t1.from('.problem-img', 1, { y: 60, ease: 'ease-in', opacity: 0 }, .9, 'Start');
  })
  return (
    <main className='problem-container'>
      <div  className='problem-left'>
        <h1 className='problem-title'>Nuestra solución</h1>
        <p className='problem-text'>
          La Empresa Qualtia Solicita un Software capas de administrar tanto los pedidos, como la bodega y la gestión de del producto permitiendo maximizar la vida de cada uno de estos, administración de las empleados y finanzas de la empresa con actualizaciones constantes al gerente y que permita una mayor facilidad para que el cliente pueda pedir sus productos con la confianza de que se entregaran con los estándares de calidad requeridos.
        </p>
        <p className='problem-text'>
          Como consultora de software, buscamos que nuestros clientes tengan las mejores herramientas para sobresalir en el mundo digital, por  lo que las soluciones que les brindamos fueron las siguientes:
        </p>
        <div className='problem-items'>
          <div className='problem-item'>
            <h3 className='problem-item__title'>Solución Ofimatica</h3>
            <p className='problem-item__text'>Le brindamos al cliente una solución mediante el uso de hojas de cálculo, en la cual él puede calcular cuando es prudente realizar el envío de las mercancías a los clientes para así evitar la pérdida del producto, al igual que llevar un conteo del mismo</p>
          </div>
          <div className='problem-item'>
            <h3 className='problem-item__title'>Redes LAN</h3>
            <p className='problem-item__text'>Con el uso de la redes, le proporcionamos a Qualtia la posibilidad de administrar todos sus archivos mediante una nube de uso local, en la cual en lugar de realizar toda la documentación de manera física pueden usar programas de ofimática como word y estos mismos subirlos a la nube local </p>
          </div>
        </div>
      </div>
      <div className='problem-right'>
        <img className='problem-img' src={office} alt='office' />
      </div>
    </main>
  );
};

export default Problem;