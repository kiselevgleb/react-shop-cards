import React from 'react';
import ShopCard from './ShopCard';

function CardsView(props) {
  return (
    <div className="tool">
      {props.cards.map(o => <ShopCard name={o.name} color={o.color} img={o.img} price={o.price} />)}
    </div>
  );
}

export default CardsView;