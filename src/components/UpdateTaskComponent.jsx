"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight, Pencil, PlusSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { SelectTageComponent } from "./SelectTagComponent";
import { CaledarComponent } from "./CaledarComponent";
import { insertTaskAction } from "@/action/taskAction";
import { usePathname } from "next/navigation";
import { getAllTasksByWorkspaceId } from "@/services/tanks.service";

export function UpdateTaskComponent({ taskId, workspaceId }) {
  const { handleSubmit, reset, register } = useForm({});
  // const workspaceId = usePathname().split("/")[2];
  let tag = "";
  let endDate = "";
  const handleTag = (value) => {
    tag = value;
  };
  const handleData = (value) => {
    endDate = value.toISOString();
  };
  const handdleTask = (data) => {
    const task = { tag, endDate, ...data };
    console.log(task);
    reset();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" text-blue-500 bg-transparent hover:bg-transparent">
          {" "}
          <Pencil className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {" "}
            <span className="flex justify-start items-center gap-x-2 font-normal">
              {" "}
              Update Task
            </span>
          </DialogTitle>
          <DialogDescription>Task</DialogDescription>
        </DialogHeader>
        <form
          action=""
          onSubmit={handleSubmit(handdleTask)}
          className="flex flex-col items-start justify-start gap-y-7 "
        >
          <div className="w-full">
            <Label
              htmlFor="name"
              className="text-right font-semibold text-xl mb-2"
            >
              Title
            </Label>
            <Input
              value={tag}
              id="taskTitle"
              className="col-span-3"
              placeholder="Insert your goal title"
              {...register("taskTitle")}
            />
          </div>
          <div className="w-full">
            <Label htmlFor="name" className="text-right  mb-2">
              Tag
            </Label>
            <SelectTageComponent onSelectTag={handleTag} />
          </div>
          <div>
            <Label htmlFor="name" className="text-right mb-2 ">
              Due
            </Label>
            {/* <Input id="title" className="col-span-3" placeholder="March 4,2024" /> */}
            <CaledarComponent onEndDate={handleData} />
          </div>
          <div className="w-full">
            <Label htmlFor="name" className="text-right  mb-2">
              Descripton
            </Label>
            <Input
              id="taskDetails"
              className="col-span-3"
              placeholder="Insert your notes here"
              {...register("taskDetails")}
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit" className="bg-blue-600">
                Update Task
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
