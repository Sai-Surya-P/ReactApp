export async function fetchCSRFToken(): Promise<string> {
  const res = await fetch("/services/data/v59.0/csrfToken", {
    method: "GET",
    credentials: "include",
  });
  const csrfData = await res.json();
  const csrfToken = csrfData.token;
  // const token = res.headers.get("X-CSRF-Token");
  console.log("token:", csrfToken);
  return csrfToken || "";
}
