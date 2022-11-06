const initialState = {
  dataProduct: [],
};

const productaction = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST_POST":
      return {
        ...state,
      };
    case "GET_LIST_POST_SUCCESS":
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
