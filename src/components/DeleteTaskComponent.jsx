"use client";
import { deleteTaskAction } from "@/action/taskAction";
import { insertWorkspaceAction } from "@/action/workspaceAction";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WorkspaceNameShcema } from "@/lib/zod/WorkspaceSchema";
import { deleteTaskService } from "@/services/tanks.service";
import { zodResolver } from "@hookform/resolvers/zod";

import { Minimize2, SquareMinus, SquarePlus } from "lucide-react";
import { useForm } from "react-hook-form";

export function DeleteDeteleComponent({ taskId, workspaceId }) {
  const handleDeleteTask = () => {
    deleteTaskAction(taskId, workspaceId);
  };
  return (
    <Dialog>
      <DialogTrigger asChild className="bg-none border-none">
        <Button variant="outline" className="text-royal-blue">
          <SquareMinus className="text-red-500" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Task</DialogTitle>
          <DialogDescription className="text-red-500 flex w-full justify-between items-center">
            Do you want to delete this task ?
            <DialogClose asChild>
              <Button
                onClick={handleDeleteTask}
                type="button"
                className="text-white bg-red-500 hover:bg-red-600"
              >
                Yes
              </Button>
            </DialogClose>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
