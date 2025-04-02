import { baseUrl } from "./constants";
const registerService = async (userDate) => {
  try {
    const res = await fetch(`${baseUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDate),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export default registerService;
