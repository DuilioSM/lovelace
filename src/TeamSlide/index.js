import React, { useEffect, useRef } from "react";
import gsap from 'gsap';
import Slider from 'infinite-react-carousel';
import TeamItem from '../TeamItem'
import team from '../team'
import './TeamSlide.scss';

function TeamSlide() {
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, { y: -15, opacity: 0, ease: 'ease-in', delay: .5 }, 'Start');
  });
  return (
    <Slider className='teamslide-container'>
      {
        team.map(card => (
          <TeamItem
            ref={boxRef}
            key={card.name}
            img={card.img}
            name={card.name}
            p={card.p}
            stall={card.stall}
            contact={card.contact}
            background={card.background}
          />
        ))
      }
    </Slider>
  );
};

export default TeamSlide;