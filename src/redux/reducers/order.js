const initialState = {
  listOrder: [],
};

const order = (state = initialState, action) => {
  switch (action.type) {
    case "POST_ORDER":
      return {
        ...state,
        load: true,
      };
    case "POST_ORDER_SUCCESS":
      const { data } = action.payload;
      console.log("dataApi", data);
      return {
        ...state,
        listOrder: data,
        load: false,
      };
    default:
      return state;
  }
};

export default order;
