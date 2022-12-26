export const postOder = (payload) => {
  return {
    type: "POST_ORDER",
    payload: payload,
  };
};

export const getListOrder = () => {
  console.log("1");
  return {
    type: "GET_ORDER",
  };
};

export const getListOrderSuccess = (payload) => {
  return {
    type: "GET_ORDER_SUCCESS",
    payload,
  };
};

export const removeOrder = (payload) => {
  return {
    type: "REMOVE_ORDER",
    payload,
  };
};

export const updateOrder = (payload) => {
  console.log("action", payload);
  return {
    type: "UPDATE_ORDER",
    payload,
  };
};

export const openedDialogUpdate = (payload) => {
  return {
    type: "OPEN_DIALOG_UPDATE",
    payload,
  };
};
