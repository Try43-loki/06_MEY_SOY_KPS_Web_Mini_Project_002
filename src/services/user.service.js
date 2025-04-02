import { headers } from "next/headers";
import { baseUrl } from "./constants";
import headerToken from "../app/api/auth/[...nextauth]/headerToken";
const getCurrentUserService = async () => {
  try {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/user`, { headers: header });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export default getCurrentUserService;
