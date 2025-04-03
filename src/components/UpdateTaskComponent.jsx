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
import { Pencil } from "lucide-react";
import { useForm } from "react-hook-form";
import { SelectTageComponent } from "./SelectTagComponent";
import { CaledarComponent } from "./CaledarComponent";
import { updateTaskAction } from "@/action/taskAction";
import { useState } from "react";

export function UpdateTaskComponent({ taskId, workspaceId, item }) {
  const { handleSubmit, reset, register } = useForm({});
  const [taskTitle, setTaskTitle] = useState(item?.taskTitle);
  const [taskDetails, setTaskDetails] = useState(item?.taskDetails);
  // const workspaceId = usePathname().split("/")[2];
  let tag = item?.tag;
  let endDate = item?.endDate;
  let oldDate = formatDate(item?.endDate);
  const handleTag = (value) => {
    tag = value;
  };
  function formatDate(endDate) {
    let date = new Date(endDate);
    let indochinaTime = new Date(
      date.toLocaleString("en-US", { timeZone: "Asia/Bangkok" })
    );
    return indochinaTime.toDateString();
  }
  const handleData = (value) => {
    endDate = value.toISOString();
  };
  const handdleTask = (data) => {
    const task = { tag, endDate, ...data };
    updateTaskAction(taskId, workspaceId, task);
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
              value={taskTitle}
              onInput={(e) => setTaskTitle(e.target.value)}
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
            <SelectTageComponent onSelectTag={handleTag} tag={tag} />
          </div>
          <div>
            <Label htmlFor="name" className="text-right mb-2 ">
              Due
            </Label>
            {/* <Input id="title" className="col-span-3" placeholder="March 4,2024" /> */}
            <CaledarComponent onEndDate={handleData} oldDate={oldDate} />
          </div>
          <div className="w-full">
            <Label htmlFor="name" className="text-right  mb-2">
              Descripton
            </Label>
            <Input
              value={taskDetails}
              onInput={(e) => setTaskDetails(e.target.value)}
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
