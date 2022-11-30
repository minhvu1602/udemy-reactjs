export const postOder = (payload) => {
  return {
    type: "POST_ORDER",
    payload: payload,
  };
};

export const getListOrder = () => {
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
