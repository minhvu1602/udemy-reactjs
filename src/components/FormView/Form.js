import React, { useState, useEffect, useRef } from "react";
import "../FormView/_Form.scss";
import List from "../ListView/List";

const Form = () => {
  const [name, setName] = useState("");
  const [account, setAccount] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState([]);

  const addUser = () => {
    if (name === "" || account === "" || address === "") {
      alert("This field is require");
      return;
    }
    const newArr = [];
    newArr.push({
      nameUsers: name,
      accountUsers: account,
      addressUsers: address,
    });
    setData(newArr);
  };

  return (
    <div>
      <div id="form" className="input-wrapper">
        <label className="label">
          Name:
          <input
            className="form-register"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name-field"
          />
        </label>
        <label className="label">
          Account:
          <input
            className="form-register"
            type="text"
            name="name"
            onChange={(e) => setAccount(e.target.value)}
            id="account-field"
          />
        </label>
        <label className="label">
          Address:
          <input
            className="form-register"
            type="text"
            name="name"
            onChange={(e) => setAddress(e.target.value)}
            onFocus={(e) => console.log(e.target.id)}
            id="address-field"
          />
        </label>
        <button id="0" onClick={addUser}>
          Add user
        </button>
      </div>
      <List items={data} />
    </div>
  );
};

export default Form;
