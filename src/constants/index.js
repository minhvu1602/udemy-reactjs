export const ACTION_CART = {
  addItemToCart: "ADD_TO_CART",
  removeCart: "REMOVE_TO_CART",
  addQuantityItems: "ADD_QUANTITY",
  subQuantityItems: "SUB_QUANTITY",
  removeItem: "REMOVE_SINGLE_ITEM",
};

export const ACTION_ORDER = {
  addNewOrder: "POST_ORDER",
  addNewOrderSuccess: "POST_ORDER_SUCCESS",
  addNewOrderFails: "POST_ORDER_FAILS",
  getListOrder: "GET_ORDER",
  getListOrderSuccess: "GET_ORDER_SUCCESS",
  getListOrderFails: "GET_ORDER_FAILS",
  removeOrder: "REMOVE_ORDER",
  removeOrderSuccess: "REMOVE_ORDER_SUCCESS",
  removeOrderFails: "REMOVE_ORDER_FAILS",
  updateOrder: "UPDATE_ORDER",
  updateOrderSuccess: "UPDATE_ORDER_SUCCESS",
  updateOrderFails: "UPDATE_ORDER_FAILS",
  openedDialogUpdate: "OPEN_DIALOG_UPDATE",
  openedDialogUpdateSuccess: "OPEN_DIALOG_UPDATE_SUCCESS",
  openedDialogUpdateFails: "OPEN_DIALOG_UPDATE_FAILS",
};

export const ACTION_PRODUCTS = {
  getListProducts: "GET_LIST_POST",
  getListProductsSuccess: "GET_LIST_POST_SUCCESS",
  getListProductsFails: "GET_LIST_POST_FAILS",
};
