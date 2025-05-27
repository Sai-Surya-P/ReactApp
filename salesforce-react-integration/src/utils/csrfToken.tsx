export async function fetchCSRFToken(): Promise<string> {
  const res = await fetch(
    "https://streamforcesolutions10-dev-ed.develop.my.site.com/services/data/v59.0/",
    {
      method: "GET",
      headers: {
        "X-CSRF-Token": "Fetch", // ✅ Required to fetch the token
      },
      credentials: "include",
    }
  );
  console.log("res:", res);
  const token = res.headers.get("X-CSRF-Token");
  console.log("token:", token);
  return token || "";
}
