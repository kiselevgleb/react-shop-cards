import React, { useState } from 'react'
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

function Store() {
  const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];
  const [state, setState] = useState("view_module");
  const [card, setCard] = useState(products);
  const [item, setItem] = useState([]);

  const onSwitch = (e) => {
    // let card = products;
    // let item = [];
    switch (e.currentTarget.innerText) {
      case "view_list":
        setState("view_module");
        setCard(products);
        setItem([]);
        break;
      case "view_module":
        setState("view_list");
        setCard([]);
        setItem(products);
        break;
    }
    // setState(e.currentTarget.innerText)
    // console.log(e.currentTarget.innerText)
  }
  return (
    <div className="App">
      <IconSwitch icon={state} onSwitch={onSwitch} />
      <CardsView cards={card} />
      <ListView items={item} />
    </div>
  );
}

export default Store;
