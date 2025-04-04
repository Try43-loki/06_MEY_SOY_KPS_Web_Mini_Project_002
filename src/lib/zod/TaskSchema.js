import { z } from "zod";
export const TaskSchema = z.object({
  taskDetails: z.string().min(1, { message: "Task Details is required" }),
  taskTitle: z.string().min(1, { message: "Task Titel is required" }),
  // tag: z.string({ required_error: "Tag is required" }),
});
