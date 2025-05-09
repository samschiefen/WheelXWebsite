export default function UserRow({ firstName, lastName, createdAt }) {
    return (
      <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{createdAt}</td>
      </tr>
    );
  }