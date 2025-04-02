import headerToken from "@/app/api/auth/[...nextauth]/headerToken";
import { baseUrl } from "./constants";
import { Headers } from "next/headers";

const getAllWorkspacesService = async () => {
  try {
    const header = await headerToken();
    const res = await fetch(
      `${baseUrl}/workspaces?pageNo=${0}&pageSize=${10}&sortBy=workspaceId&sortDirection=ASC`,
      {
        method: "GET",
        headers: header,
      }
    );

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { getAllWorkspacesService };

const addWorkspaceService = async (workspace) => {
  try {
    const res = await fetch(`${baseUrl}/workspace`, {
      method: "POST",
      body: JSON.stringify(workspace),
      headers: await headerToken(),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export { addWorkspaceService };
