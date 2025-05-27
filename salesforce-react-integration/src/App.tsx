import React, { useEffect, useState } from "react";
import { Account } from "./types";
import { getAccounts, createAccount } from "./api/salesforceApi";
import { fetchCSRFToken } from "./utils/csrfToken";
import AccountTable from "./components/AccountTable";
import AccountForm from "./components/AccountForm";

const App = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [csrfToken, setCsrfToken] = useState<string>("");

  useEffect(() => {
    (async () => {
      const token = await fetchCSRFToken();
      setCsrfToken(token);
      const data = await getAccounts(token);
      setAccounts(data.records || []);
    })();
  }, []);

  const handleCreate = async (account: {
    Name: string;
    Industry: string;
    Phone: string;
  }) => {
    await createAccount(account, csrfToken);
    const data = await getAccounts(csrfToken);
    setAccounts(data.records || []);
  };

  return (
    <div>
      <h1>Accounts</h1>
      <AccountForm onSubmit={handleCreate} />
      <AccountTable accounts={accounts} />
    </div>
  );
};

export default App;
