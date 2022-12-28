import List from "../ListView/List";
import React, { useState, useEffect } from "react";
import AddUser from "../AddUser/index";

const Home = () => {
  const [users, setUsers] = useState([]);
  const getUsers = JSON.parse(localStorage.getItem("userAdded"));
  useEffect(() => {
    if (getUsers == null) {
      setUsers([]);
    } else {
      setUsers(getUsers);
    }
  }, []);

  const addUser = (user) => {
    const id = Math.random().toString();
    const newUser = { id, ...user };
    setUsers([...users, newUser]);
    localStorage.setItem("userAdded", JSON.stringify([...users, newUser]));
  };

  const deleteUser = (id) => {
    const deleteUser = users.filter((user) => user.id !== id);
    setUsers(deleteUser);
    localStorage.setItem("userAdded", JSON.stringify(deleteUser));
  };

  const editUser = (id) => {
    const name = prompt("Name");
    const account = prompt("Account");
    let data = JSON.parse(localStorage.getItem("userAdded"));
    const myData = data.map((x) => {
      if (x.id === id && name && account) {
        return {
          ...x,
          name: name,
          account: account,
        };
      }
      return x;
    });
    localStorage.setItem("userAdded", JSON.stringify(myData));
    window.location.reload();
  };
  return (
    <div className="container">
      <AddUser onSave={addUser} />
      {users.length > 0 ? (
        <List users={users} onDelete={deleteUser} onEdit={editUser} />
      ) : (
        "No Task Found!"
      )}
    </div>
  );
};

export default Home;
