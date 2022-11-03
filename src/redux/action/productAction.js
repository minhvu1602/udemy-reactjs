export const getListPost = (payload) => {
  return {
    type: "GET_LIST_POST",
    payload,
  };
};

export const getListPostSuccess = (payload) => {
  return {
    type: "GET_LIST_POST_SUCCESS",
    payload,
  };
};
