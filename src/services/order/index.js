import axios from "axios";

export async function newOrder(_name, _address, _total, _phone, _items) {
  // Similar to componentDidMount and componentDidUpdate:
  const data = await axios
    .post(`http://606989d5e1c2a10017544a2f.mockapi.io/api/order`, {
      name: _name,
      address: _address,
      total: _total,
      phone: _phone,
      items: _items,
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.log(error));
  console.log("apiii", data);
  return data;
}
