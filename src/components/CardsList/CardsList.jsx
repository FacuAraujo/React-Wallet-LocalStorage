import React from 'react';
import Card from '../Card/Card';
import './styles.scss';

const CardsList = (props) => (
  <>
    {props.cards.length > 0 ? (
      <div className="cards-grid">
        {props.cards.map((card, key) => (
          <div key={key} className="swiper-slide">
            <Card {...card} />
          </div>
        ))}
      </div>
    ) : (
      <div className="cards-empty">
        <p>Cards empty</p>
      </div>
    )}
  </>
);

export default CardsList;
