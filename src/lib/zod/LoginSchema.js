import { z } from "zod";
export const LoginSchema = z.object({
  password: z.string().min(1, { message: "Password is required" }),
  email: z.string().email().min(1, { message: "Email is required" }),
});
