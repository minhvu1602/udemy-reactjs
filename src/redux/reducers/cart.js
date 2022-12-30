import { ACTION_CART } from "../../constants";

const initialState = {
  itemsInCart: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CART.addItemToCart: {
      return { ...state, itemsInCart: action.payload };
    }
    case ACTION_CART.removeCart: {
      return { ...state, itemsInCart: [] };
    }
    case ACTION_CART.removeItem: {
      return { ...state, itemsInCart: action.payload };
    }
    case ACTION_CART.addQuantityItems: {
      return { ...state, itemsInCart: action.payload };
    }
    case ACTION_CART.subQuantityItems: {
      return { ...state, itemsInCart: action.payload };
    }
    default:
      return state;
  }
};

export default cart;
