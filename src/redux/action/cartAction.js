import { ACTION_CART } from "../../constants";

export const addCart = (payload) => ({
  type: ACTION_CART.addItemToCart,
  payload: payload,
});

export const removeCart = () => {
  return {
    type: ACTION_CART.removeCart,
  };
};

export const addQuantity = (payload) => ({
  type: ACTION_CART.addQuantityItems,
  payload: payload,
});

export const subQuantity = (payload) => ({
  type: ACTION_CART.subQuantityItems,
  payload: payload,
});

export const removeItem = (payload) => {
  return {
    type: ACTION_CART.removeItem,
    payload: payload,
  };
};
