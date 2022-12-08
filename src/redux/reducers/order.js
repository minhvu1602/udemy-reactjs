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
    case "UPDATE_ORDER_SUCCESS": {
      newListOrder = [...state];
      const index = newListOrder.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newListOrder[index] = {
        ...newListOrder[index],
        ...{
          name: action.payload.name,
          address: action.payload.address,
          phone: action.payload.phone,
        },
      };
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
