import headerToken from "@/app/api/auth/[...nextauth]/headerToken";
import { baseUrl } from "./constants";

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

// update favorite workspace
const updateFavoriteWorkspaceService = async (workspaceId, isFav) => {
  try {
    const res = await fetch(
      `${baseUrl}/workspace/${workspaceId}/favorite?favorite=${isFav}`,
      {
        method: "PATCH",
        headers: await headerToken(),
        body: JSON.stringify({
          workspaceId,
          isFavorite: isFav,
        }),
      }
    );

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export { updateFavoriteWorkspaceService };

// update workspace name
const updateWorkspaceNameService = async (workspaceId, workspaceNewName) => {
  try {
    const res = await fetch(`${baseUrl}/workspace/${workspaceId}`, {
      method: "PUT",
      headers: await headerToken(),
      body: JSON.stringify({
        workspaceId,
        workspaceName: workspaceNewName,
      }),
    });

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export { updateWorkspaceNameService };
