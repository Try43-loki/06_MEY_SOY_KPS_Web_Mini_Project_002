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
import { Ellipsis, SquarePlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function AddWorkspaceComponent({ operator, workspaceId }) {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(WorkspaceNameShcema),
  });

  const handleName = async (data) => {
    if (operator === "add") {
      const insert = await insertWorkspaceAction(data);
      toast("Notification", {
        description: insert.message,
        style: {
          background: "#4CAF50",
          color: "#ffffff",
        },
      });
    } else {
      const update = await updateWorkspaceNameAction(workspaceId, data);
      toast("Notification", {
        description: update.message,
        style: {
          background: "#f1c40f",
          color: "#ffffff",
        },
      });
    }

    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="bg-none border-none">
        <Button className="bg-transparent hover:bg-transparent">
          {operator === "add" ? (
            <SquarePlus className="text-gray-500 size-5 " />
          ) : (
            <Ellipsis className="text-blue-500 size-5 " />
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[300px]">
        <DialogHeader>
          <DialogTitle>Goal</DialogTitle>
          <DialogDescription>
            {operator === "add" ? "Create Workspace" : "Update Workspace"}
          </DialogDescription>
        </DialogHeader>
        {/* form */}
        <form onSubmit={handleSubmit(handleName)}>
          <div>
            <Label htmlFor="workspaceName" className="text-right mb-4">
              Workspace name:
            </Label>
            <Input
              id="workspaceName"
              className="col-span-3"
              placeholder="Insert your workspace name"
              {...register("workspaceName")}
            />
          </div>
          <span className="text-red-500 text-sm mt-4">
            {errors?.workspaceName?.message}
          </span>

          <DialogFooter className="mt-3">
            <Button type="submit" className="bg-blue-600">
              {operator === "add" ? "Create Workspace" : "Update Workspace"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
