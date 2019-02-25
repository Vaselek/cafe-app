import {
  ADD_DISH,
  REMOVE_DISH,
  FETCH_DISHES_SUCCESS,
  FETCH_DISHES_ERROR,
  FETCH_DISHES_REQUEST
} from "../../actions/action-types";

const INITIAL_STATE = {
  dishes: [],
  loading: false
};

const addDish = (dishes, dishId) => {
  return dishes.map(dish => {
    if(dish.id === dishId) dish.count++;
    return dish;
  })
}

const removeDish = (dishes, dishId) => {
  return dishes.map(dish => {
    if(dish.id === dishId && dish.count > 0) dish.count--;
    return dish;
  })
}

const collectOrder = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_DISH:
      return {
        ...state,
        dishes: addDish(state.dishes, action.dishId),
      };
    case REMOVE_DISH:
      return {
        ...state,
        dishes: removeDish(state.dishes, action.dishId),
      };
    case FETCH_DISHES_SUCCESS:
      return {
        ...state,
        dishes: action.dishes,
        loading: false
      };
    case FETCH_DISHES_ERROR:
      return {
        ...state,
        loading: false
      };
    case FETCH_DISHES_REQUEST:
      return {
        ...state,
        loading: true
      };
    default:
       return state;
  }
};

export default collectOrder;
