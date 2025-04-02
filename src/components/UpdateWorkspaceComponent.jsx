"use client";
import {
  insertWorkspaceAction,
  updateWorkspaceNameAction,
} from "@/action/workspaceAction";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WorkspaceNameShcema } from "@/lib/zod/WorkspaceSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Pencil, SquareMinus, SquarePlus } from "lucide-react";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";

export function UpdateWorkspaceComponent() {
  const path = usePathname();
  const currentWorkspace = path.split("/")[2];
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(WorkspaceNameShcema),
  });
  const handleName = (data) => {
    updateWorkspaceNameAction(currentWorkspace, data.workspaceName);
    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="bg-none border-none">
        <Button variant="outline" className="text-royal-blue">
          <Pencil className="text-blue-500" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Goal</DialogTitle>
          <DialogDescription>Create Workspace</DialogDescription>
        </DialogHeader>

        {/* Form submission with handleSubmit */}
        <form onSubmit={handleSubmit(handleName)}>
          <div>
            <Label htmlFor="workspaceName" className="text-right mb-2">
              Workspace name:
            </Label>
            <Input
              id="workspaceName"
              className="col-span-3"
              placeholder="Insert your workspace name"
              {...register("workspaceName")} // Register the input field
            />
          </div>
          <span className="text-red-500 text-sm mt-4">
            {errors?.workspaceName?.message}
          </span>

          <DialogFooter className="mt-3">
            <DialogClose asChild>
              <Button type="submit" className="bg-blue-600">
                Update Workspace
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
