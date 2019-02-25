import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import axios from '../../axios-cafe';
import {addDish, removeDish} from "../../store/actions/collect-order";
import connect from "react-redux/es/connect/connect";


class SendOrder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      email: '',
    }
  }

  valueChanged = event  => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  submitHandler = (event, dishes) => {
    event.preventDefault();
    const orderedDishes = dishes.map(dish => {
      delete dish['price'];
      delete dish['image'];
      return dish;
    })
    let order = {...this.state, ...orderedDishes}
    axios.post('/orders.json', order).then(() => {
      this.props.history.replace('/');
    });
  }

  render() {
    return (
      <div className="container">
        <Form onSubmit={(e)=>this.submitHandler(e, this.props.dishes)}>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input type="text" name="address" id="address" onChange={this.valueChanged} value={this.state.address} />
          </FormGroup>
          <FormGroup>
            <Label for="Name">Name</Label>
            <Input type="text" name="name" id="name" onChange={this.valueChanged} value={this.state.name} />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" onChange={this.valueChanged} value={this.state.email} />
          </FormGroup>
          <Button type="submit">Order</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dishes: state.collectOrder.dishes.filter(dish=> dish.count > 0),
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addDish: (dishId) => dispatch(addDish(dishId)),
    removeDish: (dishId) => dispatch(removeDish(dishId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendOrder);
