import React from 'react';
import {Button, ListGroup, ListGroupItem} from 'reactstrap';
import {NavLink} from "react-router-dom";


const Cart = ({dishes, removeDish}) => {
  const cartDishes = dishes.filter( dish => dish.count > 0);
  let renderedDishes = null;
  let totalPrice = 0;
  if (cartDishes.length > 0) {
    renderedDishes = cartDishes.map(dish =>
      (<ListGroupItem onClick={()=>removeDish(dish.id)}>{dish.title} - {dish.price} KGS x {dish.count}</ListGroupItem>)
    )
    if (cartDishes.length > 1) {
      totalPrice = 150 + cartDishes.reduce((a, b)=>((isNaN(a) ? a.price*a.count : a) + b.count*b.price))
    } else {
      totalPrice = 150 + cartDishes[0].count * cartDishes[0].price
    }
  };
  return (
    <div>
      <ListGroup>
        {renderedDishes}
      </ListGroup>
      <hr/>
      <ListGroup>
        <ListGroupItem>Delivery - 150 KGS</ListGroupItem>
        <ListGroupItem>Total - {totalPrice} KGS</ListGroupItem>
      </ListGroup>
      <hr/>
      {cartDishes.length > 0 && <Button><NavLink class="Button" to="/send-order">Place Order</NavLink></Button>}
    </div>
    );
};
export default Cart;
