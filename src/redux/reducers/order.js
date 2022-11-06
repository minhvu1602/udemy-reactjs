const initialState = {
  listOrder: [],
};

const order = (state = initialState, action) => {
  switch (action.type) {
    case "POST_ORDER":
      return {
        ...state,
      };
    case "POST_ORDER_SUCCESS":
      const { data } = action.payload;
      return {
        ...state,
        listOrder: data,
      };
    default:
      return state;
  }
};

export default order;
