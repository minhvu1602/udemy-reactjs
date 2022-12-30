import { ACTION_ORDER } from "../../constants";

const initialState = {
  listOrder: null,
  isOpenDialogUpdate: false,
};

const order = (state = initialState, action) => {
  let newListOrder;
  switch (action.type) {
    case ACTION_ORDER.addNewOrderSuccess:
      return {
        ...state,
        listOrder: action.payload.data,
      };
    case ACTION_ORDER.getListOrderSuccess:
      return {
        ...state,
        listOrder: action.payload.data,
      };
    case ACTION_ORDER.openedDialogUpdate:
      return {
        ...state,
        isOpenDialogUpdate: action.payload.isOpenDialogUpdate,
      };
    case ACTION_ORDER.removeOrderSuccess: {
      newListOrder = state.listOrder.filter(
        (entry) => entry.id !== action.payload
      );
      return {
        ...state,
        listOrder: newListOrder,
      };
    }
    case ACTION_ORDER.updateOrderSuccess: {
      newListOrder = JSON.stringify(state.listOrder);
      let newListOrderUpdate = JSON.parse(newListOrder);
      const index = newListOrderUpdate.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newListOrderUpdate[index] = {
        ...newListOrderUpdate[index],
        ...action.payload,
      };
      return {
        ...state,
        listOrder: newListOrderUpdate,
      };
    }
    default:
      return state;
  }
};

export default order;
