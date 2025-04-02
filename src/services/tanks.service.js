import headerToken from "@/app/api/auth/[...nextauth]/headerToken";
import { baseUrl } from "./constants";

const getAllTasksByWorkspaceId = async (workspaceId) => {
  try {
    const res = await fetch(
      `${baseUrl}/tasks/workspace/${workspaceId}?pageNo=0&pageSize=10&sortBy=taskId&sortDirection=ASC`,
      {
        method: "GET",
        headers: await headerToken(),
      }
    );

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export { getAllTasksByWorkspaceId };

const updateStatusTaskByTaskId = async (taskId, workspaceId, status) => {
  try {
    const res = await fetch(
      `${baseUrl}/task/${taskId}/workspace/${workspaceId}/status?status=${status}`,
      {
        method: "PATCH",
        headers: await headerToken(),
        body: JSON.stringify({
          taskId,
          workspaceId,
          status: status,
        }),
      }
    );
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export { updateStatusTaskByTaskId };
