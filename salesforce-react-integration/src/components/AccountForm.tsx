import React, { useState } from "react";

interface Props {
  onSubmit: (data: { Name: string; Industry: string; Phone: string }) => void;
}

const AccountForm: React.FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ Name: name, Industry: industry, Phone: phone });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        placeholder="Industry"
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default AccountForm;
