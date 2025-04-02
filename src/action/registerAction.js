"use server";
import registerService from "@/services/register.service";
import { revalidateTag } from "next/cache";

const registerAction = async (formData) => {
  try {
    await registerService(formData);
    revalidateTag("register");
    return { success: true, message: "Register successfull" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
export default registerAction;
