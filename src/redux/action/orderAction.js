import { ACTION_ORDER } from "../../constants";

export const postOder = (payload) => {
  return {
    type: ACTION_ORDER.addNewOrder,
    payload: payload,
  };
};

export const getListOrder = (payload) => {
  return {
    type: ACTION_ORDER.getListOrder,
    payload,
  };
};

export const getListOrderSuccess = (payload) => {
  return {
    type: ACTION_ORDER.getListOrderSuccess,
    payload,
  };
};

export const removeOrder = (payload) => {
  return {
    type: ACTION_ORDER.removeOrder,
    payload,
  };
};

export const updateOrder = (payload) => {
  return {
    type: ACTION_ORDER.updateOrder,
    payload,
  };
};

export const openedDialogUpdate = (payload) => {
  return {
    type: ACTION_ORDER.openedDialogUpdate,
    payload,
  };
};
