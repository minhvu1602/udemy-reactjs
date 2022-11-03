const initialState = {
  itemsInCart: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return { ...state, itemsInCart: action.payload };
    }
    case "REMOVE_TO_CART": {
      return { ...state, itemsInCart: [] };
    }
    case "REMOVE_SINGLE_ITEM": {
      return { ...state, itemsInCart: action.payload };
    }
    case "ADD_QUANTITY": {
      return { ...state, itemsInCart: action.payload };
    }
    case "SUB_QUANTITY": {
      return { ...state, itemsInCart: action.payload };
    }
    default:
      return state;
  }
};

export default cart;
