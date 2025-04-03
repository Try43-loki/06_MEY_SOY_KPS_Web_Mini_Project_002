"use server";

import {
  addWorkspaceService,
  updateFavoriteWorkspaceService,
  updateWorkspaceNameService,
} from "@/services/workspace.service";
import { revalidateTag } from "next/cache";

export const insertWorkspaceAction = async (formData) => {
  try {
    await addWorkspaceService(formData);
    revalidateTag("workspaces");
    return { success: true, message: "Workspace added successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
export const updateFavoriteWorkspaceAction = async (workspaceId, isFav) => {
  console.log(workspaceId, isFav);
  try {
    await updateFavoriteWorkspaceService(workspaceId, isFav);
    revalidateTag("workspaces");
    return { success: true, message: "Workspace updated successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const updateWorkspaceNameAction = async (
  workspaceId,
  workspaceNewName
) => {
  try {
    await updateWorkspaceNameService(workspaceId, workspaceNewName);
    revalidateTag("workspaces");
    return { success: true, message: "Workspace updated successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
