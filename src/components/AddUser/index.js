import { useState } from "react";

const AddUser = ({ onSave }) => {
  const [name, setName] = useState("");
  const [account, setAccount] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || account === "") {
      alert("This field is require");
      return;
    }
    onSave({ name, account });
    setName("");
    setAccount("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Account</label>
        <input
          type="text"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
        />
      </div>
      <input type="submit" className="btn btn-block" value="Save User" />
    </form>
  );
};
export default AddUser;
