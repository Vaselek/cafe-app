import React from 'react';
import {Button, Card, CardText, CardTitle} from "reactstrap";

const Dish = ({dish, addDish}) => {
  return (
    <div>
      <Card body className="DishItem">
        <CardTitle>{dish.title}</CardTitle>
        <img width="100%" src={dish.image} alt="Card cap" />
        <CardText>KGS {dish.price}</CardText>
        <Button type="button" onClick={()=>addDish(dish.id)}>Add to Cart</Button>
      </Card>
    </div>
  );
};

export default Dish;
