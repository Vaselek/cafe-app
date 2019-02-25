import {
  ADD_DISH,
  FETCH_DISHES_ERROR,
  FETCH_DISHES_REQUEST,
  FETCH_DISHES_SUCCESS,
  REMOVE_DISH
} from "../../actions/action-types";
import axios from '../../axios-cafe';

export const addDish = (dishId) => {
  return {type: ADD_DISH, dishId}
}

export const removeDish = (dishId) => {
  return {type: REMOVE_DISH, dishId}
}

export const fetchDishesRequest = () => {
  return {type: FETCH_DISHES_REQUEST};
};

export const fetchDishesSuccess = dishes => {
  return {type: FETCH_DISHES_SUCCESS, dishes};
};

export const fetchDishesError = () => {
  return {type: FETCH_DISHES_ERROR};
};

export const fetchDishes = () => {
  return dispatch => {
    dispatch(fetchDishesRequest());
    axios.get('/dishes.json').then(response => {
      const data = Object.keys(response.data).map(id => {
        const dish = response.data[id]
        dish.id = id
        return dish
      });
      dispatch(fetchDishesSuccess(data))
    }, error => {
      dispatch(fetchDishesError())
    });
  }
}
