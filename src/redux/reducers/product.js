import { ACTION_PRODUCTS } from "../../constants";

const initialState = {
  dataProduct: [],
};

const productaction = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_PRODUCTS.getListProducts:
      return {
        ...state,
      };
    case ACTION_PRODUCTS.getListProductsSuccess:
      const { data } = action.payload;
      return {
        ...state,
        dataProduct: data,
      };
    default:
      return state;
  }
};

export default productaction;
