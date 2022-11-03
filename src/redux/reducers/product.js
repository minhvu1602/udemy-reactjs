const initialState = {
  dataProduct: [],
};

const productaction = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST_POST":
      return {
        ...state,
        load: true,
      };
    case "GET_LIST_POST_SUCCESS":
      const { data } = action.payload;
      return {
        ...state,
        dataProduct: data,
        load: false,
      };
    default:
      return state;
  }
};

export default productaction;
