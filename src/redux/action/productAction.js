import { ACTION_PRODUCTS } from "../../constants";

export const getListPost = () => {
  return {
    type: ACTION_PRODUCTS.getListProducts,
  };
};

export const getListPostSuccess = (payload) => {
  return {
    type: ACTION_PRODUCTS.getListProductsSuccess,
    payload,
  };
};
