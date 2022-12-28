const initialState = {
  listOrder: null,
  isOpenDialogUpdate: false,
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
    case "OPEN_DIALOG_UPDATE":
      return {
        ...state,
        isOpenDialogUpdate: action.payload.isOpenDialogUpdate,
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
    case "UPDATE_ORDER":
      return {
        ...state,
      };
    case "UPDATE_ORDER_SUCCESS": {
      return {
        ...state,
        listOrder: [action.data],
      };
    }
    default:
      return state;
  }
};

export default order;
