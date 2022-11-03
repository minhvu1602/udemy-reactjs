import axios from "axios";

export const getproducts = () => {
  return axios.get("http://606989d5e1c2a10017544a2f.mockapi.io/api/products");
};
