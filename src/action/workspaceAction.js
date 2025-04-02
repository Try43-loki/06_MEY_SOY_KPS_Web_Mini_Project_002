"use server";

import { addWorkspaceService } from "@/services/workspace.service";
import { revalidateTag } from "next/cache";

export const insertWorkspaceAction = async (formData) => {
  try {
    await addWorkspaceService(formData);
    revalidateTag("workspace");
    return { success: true, message: "Workspace added successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
