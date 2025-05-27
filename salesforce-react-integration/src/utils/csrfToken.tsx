export async function fetchCSRFToken(): Promise<string> {
  const res = await fetch("/services/data/v59.0/", {
    method: "GET",
    credentials: "include",
  });
  const token = res.headers.get("X-CSRF-Token");
  return token || "";
}
