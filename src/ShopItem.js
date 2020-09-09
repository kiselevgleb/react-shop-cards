import React from 'react';

function ShopItem(props) {
  return (
    <div className="wrap-item">
      <img className="img-item" src={props.img} alt="photo" />
      <h3 className="name-item">{props.name}</h3>
      <p className="color-item">{props.color}</p>
      <div className="price-and-cart-item">
        <p className="price-item">${props.price}</p>
        <button className="add-cart-item">ADD TO CART</button>
      </div>
    </div>
  );
}

export default ShopItem;
