import React from 'react';
import './Values.scss';
import InfoCard from '../InfoCard';
import images from '../images';

function Values() {
  return (
    <div className='values-container'>
      {
        images.map(card => (
            <InfoCard
              key={card.title}
              img={card.img}
              title={card.title}
              p={card.p}
            />
        ))
      }
    </div>
  );
};

export default Values;