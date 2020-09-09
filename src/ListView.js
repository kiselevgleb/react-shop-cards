import React from 'react';
import ShopItem from './ShopItem';

function ListView(props) {
  return (
    <div className="tool-list">
      {props.items.map(o => <ShopItem name={o.name} color={o.color} img={o.img} price={o.price} />)}
    </div>
  );
}

export default ListView;
