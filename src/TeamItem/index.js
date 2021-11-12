import React from 'react';
import './TeamItem.scss';

function TeamItem({ img, name, p,stall, contact }) {
  return (
    <article className='team-article'>
      <div className='team-article__text'>
        <div className='teamItem-left'>
          <img className='teamItem-image' src={img} alt={name} />
        </div>
        <div className='teamItem-right'>
          <h2 className='teamItem-name'>{name}</h2>
          <h4 className='teamItem-stall'>{stall}</h4>
          <p className='teamItem-text'>{p}</p>
          <a className='teamItem-button' href={contact} target='_blank' rel="noreferrer" >Contacto</a>
        </div>
      </div>
    </article>

  );
};

export default TeamItem;