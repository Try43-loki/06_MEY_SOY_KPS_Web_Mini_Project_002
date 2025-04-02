import { z } from "zod";
export const WorkspaceNameShcema = z.object({
  workspaceName: z.string().min(1, { message: "Workspace name is required" }),
});
