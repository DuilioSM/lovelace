import React from 'react';
import './TeamItem.scss';

function TeamItem({ img, name, p }) {
  return (
    <article className='team-article'>
      <div className='teamItem-left'>
        <img className='teamItem-image' src={img} alt={name} />
      </div>
      <div className='teamItem-right'>
        <h2 className='teamItem-name'>{name}</h2>
        <p className='teamItem-text'>{p}</p>
      </div>
    </article>

  );
};

export default TeamItem;