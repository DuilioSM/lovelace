import React from "react";
import './InfoCard.scss'

function InfoCard({img,title,p }){
  return(
    <article className='values-article'>
      <img src={img} alt={title} />
      <h3 className='values-title'>{title}</h3>
      <p className='values-p'>{p}</p>
    </article>
  );
};

export default InfoCard;