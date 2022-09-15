import "../ListView/_List.scss";

const List = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="padding-row">Name</th>
            <th className="padding-row">Account</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody id="demo"></tbody>
      </table>
      {props.items.map((item) => (
        <table key={item.nameUsers}>
          <thead>
            <tr>
              <th className="padding-row">{item.nameUsers}</th>
              <th className="padding-row">{item.accountUsers}</th>
              <th>{item.addressUsers}</th>
            </tr>
          </thead>
          <tbody id="demo"></tbody>
        </table>
      ))}
    </div>
  );
};

export default List;
