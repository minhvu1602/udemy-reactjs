export const addCart = (payload) => ({
  type: "ADD_TO_CART",
  payload: payload,
});

export const removeCart = () => {
  console.log("remove all");
  return {
    type: "REMOVE_TO_CART",
  };
};

export const addQuantity = (payload) => ({
  type: "ADD_QUANTITY",
  payload: payload,
});

export const subQuantity = (payload) => ({
  type: "SUB_QUANTITY",
  payload: payload,
});

export const removeItem = (payload) => {
  return {
    type: "REMOVE_SINGLE_ITEM",
    payload: payload,
  };
};
