const BASE_URL = "/services/data/v59.0";

export async function getAccounts(csrfToken: string) {
  const res = await fetch(
    `${BASE_URL}/query/?q=SELECT+Id,Name,Industry,Phone+FROM+Account+LIMIT+10`,
    {
      headers: {
        "X-CSRF-Token": csrfToken,
        credentials: "include",
      },
    }
  );
  return res.json();
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
