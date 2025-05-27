import React from "react";
import { Account } from "../types";

interface Props {
  accounts: Account[];
}

const AccountTable: React.FC<Props> = ({ accounts }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Industry</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map((acc) => (
          <tr key={acc.Id}>
            <td>{acc.Name}</td>
            <td>{acc.Industry}</td>
            <td>{acc.Phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AccountTable;
