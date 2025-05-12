export default function ActivityRow({ name, action, timeAgo }) {
    return (
      <tr>
        <td width="60%">
          <strong className="name">{name}</strong>
          <span className="action"> {action}</span>
        </td>
        <td>{timeAgo}</td>
      </tr>
    );
  }