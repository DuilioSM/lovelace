import React from 'react';
import Slider from 'infinite-react-carousel';
import TeamItem from '../TeamItem'
import team from '../team'
import './TeamSlide.scss';

function TeamSlide() {
  return (
    // <main className='teamslide-container sliderll'>
    // </main>
    <Slider className='teamslide-container'>
      {
        team.map(card => (
          <TeamItem
            key={card.name}
            img={card.img}
            name={card.name}
            p={card.p}
          />
        ))
      }
    </Slider>
  );
};

export default TeamSlide;