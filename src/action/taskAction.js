"use server";
import {
  createTaskService,
  deleteTaskService,
  updateStatusTaskByTaskId,
  updateTaskService,
} from "@/services/tanks.service";
import { revalidateTag } from "next/cache";

// upadte task by Id

const updateTaskStatusByIdAction = async (taskId, workspaceId, status) => {
  console.log(taskId, workspaceId, status);
  try {
    await updateStatusTaskByTaskId(taskId, workspaceId, status);
    revalidateTag("tasks");
    return { success: true, message: "Task status updated successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
export { updateTaskStatusByIdAction };

// insert task action

const insertTaskAction = async (workspaceId, formData) => {
  const taskData = {
    taskTitle: formData?.taskTitle,
    taskDetails: formData?.taskDetails,
    tag: formData?.tag,
    endDate: formData?.endDate,
  };

  try {
    await createTaskService(workspaceId, taskData);
    revalidateTag("tasks");
    return { success: true, message: "Task added successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export { insertTaskAction };

// delete task

const deleteTaskAction = async (taskId, workspaceId) => {
  try {
    await deleteTaskService(taskId, workspaceId);
    revalidateTag("tasks");
    return { success: true, message: "Task deleted successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export { deleteTaskAction };

// update task

const updateTaskAction = async (taskId, workspaceId, formData) => {
  console.log(taskId, workspaceId, formData);
  const taskData = {
    taskTitle: formData?.taskTitle,
    taskDetails: formData?.taskDetails,
    tag: formData?.tag,
    endDate: formData?.endDate,
  };
  try {
    await updateTaskService(taskId, workspaceId, taskData);
    revalidateTag("tasks");
    return { success: true, message: "Task updated successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
export { updateTaskAction };
