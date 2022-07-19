import react from "react";
import "./Table.css";

interface TableProps {
  data: Object;
}

const Table = ({ data }: TableProps) => {
  const tbody = Object.entries(data).map(([key, value], index) => (
    <tr key={index}>
      <th>{String(key)}</th>
      <td>{String(value)}</td>
    </tr>
  ));
  return (
    <>
      <table>
        <tbody>{tbody}</tbody>
      </table>
    </>
  );
};
export default Table;
