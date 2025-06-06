const BASE_URL = "/services/apexrest/accounts";

export async function getAccounts(csrfToken: string) {
  const res = await fetch(`${BASE_URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": csrfToken,
    },
    credentials: "include", // ✅ this must be outside "headers"
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch accounts: ${res.status}`);
  }
  console.log("data", res.json());
  return res.json(); // should contain { records: [...] }
}

export async function createAccount(
  account: { Name: string; Industry: string; Phone: string },
  csrfToken: string
) {
  const res = await fetch(`${BASE_URL}/sobjects/Account`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": csrfToken,
    },
    credentials: "include",
    body: JSON.stringify(account),
  });
  return res.json();
}
