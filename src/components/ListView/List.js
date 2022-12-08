const List = ({ users, onDelete, onEdit }) => {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th className="padding-row">Name</th>
            <th className="padding-row">Account</th>
          </tr>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="padding-row">{user.name}</td>
              <td className="padding-row">{user.account}</td>
              <td>
                <span className="button" onClick={() => onDelete(user.id)}>
                  Delete
                </span>
              </td>
              <td style={{ paddingLeft: 20 }}>
                <div className="button" onClick={() => onEdit(user.id)}>
                  Edit
                </div>
              </td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
};

export default List;
