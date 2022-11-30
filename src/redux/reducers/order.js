const initialState = {
  listOrder: [],
};

const order = (state = initialState, action) => {
  let newListOrder;
  switch (action.type) {
    case "POST_ORDER":
      return {
        ...state,
      };
    case "POST_ORDER_SUCCESS":
      return {
        ...state,
        listOrder: action.payload.data,
      };
    case "GET_ORDER":
      return {
        ...state,
      };
    case "GET_ORDER_SUCCESS":
      return {
        ...state,
        listOrder: action.payload.data,
      };
    case "REMOVE_ORDER_SUCCESS": {
      newListOrder = state.listOrder.filter(
        (entry) => entry.id !== action.payload
      );
      return {
        ...state,
        listOrder: newListOrder,
      };
    }
    default:
      return state;
  }
};

export default order;
