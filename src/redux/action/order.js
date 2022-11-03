export const postOder = (payload) => {
  return {
    type: "POST_ORDER",
    payload,
  };
};

export const postOrderSuccess = (payload) => {
  console.log("actionApi", payload);
  return {
    type: "POST_ORDER_SUCCESS",
    payload,
  };
};
