import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import './CollectOrder.css';
import Dish from "../../components/Dish/Dish";
import Cart from "../../components/Cart/Cart";
import {connect} from "react-redux";
import {addDish, removeDish, fetchDishes} from "../../store/actions/collect-order";


class CollectOrder extends Component {
  componentDidMount() {
    this.props.fetchDishes();
  }


  render() {
    const dishes = this.props.dishes.map(dish => (<Dish key={dish.id} dish={dish} addDish={this.props.addDish}/>));
    return (
      <div class="container">
        <Row>
          <Col sm="8" className="DishContainer">
            {!this.props.loading && dishes}
          </Col>
          <Col sm="4">
            <Cart dishes={this.props.dishes} removeDish={this.props.removeDish}/>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dishes: state.collectOrder.dishes,
    loading: state.collectOrder.loading
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addDish: (dishId) => dispatch(addDish(dishId)),
    removeDish: (dishId) => dispatch(removeDish(dishId)),
    fetchDishes: () => dispatch(fetchDishes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectOrder);
