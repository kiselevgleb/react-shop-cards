import React from 'react';

function ShopCard(props) {
  return (
    <div className="wrap">
      <h3 className="name">{props.name}</h3>
      <p className="color">{props.color}</p>
      <img className="img" src={props.img} alt="photo" />
      <div className="price-and-cart">
        <p className="price">${props.price}</p>
        <button className="add-cart">ADD TO CART</button>
      </div>
    </div>
  );
}
export default ShopCard;