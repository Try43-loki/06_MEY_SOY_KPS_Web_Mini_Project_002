import headerToken from "@/app/api/auth/[...nextauth]/headerToken";
import { baseUrl } from "./constants";

const getAllTasksByWorkspaceId = async (workspaceId) => {
  try {
    const res = await fetch(
      `${baseUrl}/tasks/workspace/${workspaceId}?pageNo=0&pageSize=100&sortBy=taskId&sortDirection=ASC`,
      {
        method: "GET",
        headers: await headerToken(),
        next: {
          tags: ["tasks"],
        },
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

const createTaskService = async (workspaceId, taskData) => {
  console.log(workspaceId);

  try {
    const res = await fetch(`${baseUrl}/task/workspace/${workspaceId}`, {
      method: "POST",
      headers: await headerToken(),
      body: JSON.stringify(taskData),
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { createTaskService };

const deleteTaskService = async (taskId, workspaceId) => {
  try {
    const res = await fetch(
      `${baseUrl}/task/${taskId}/workspace/${workspaceId}`,
      {
        method: "DELETE",
        headers: await headerToken(),
      }
    );
    console.log(res);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};
export { deleteTaskService };

const updateTaskService = async (taskId, workspaceId, taskData) => {
  try {
    const res = await fetch(
      `${baseUrl}/task/${taskId}/workspace/${workspaceId}`,

      {
        method: "PUT",
        headers: await headerToken(),
        body: JSON.stringify(taskData),
      }
    );
  } catch (err) {
    console.log(err);
  }
};

export { updateTaskService };
