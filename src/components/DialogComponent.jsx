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
import { ChevronLeft, ChevronRight, PlusSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { SelectTageComponent } from "./SelectTagComponent";
import { CaledarComponent } from "./CaledarComponent";
import { insertTaskAction } from "@/action/taskAction";
import { usePathname } from "next/navigation";

export function DialogComponent() {
  const { handleSubmit, reset, register } = useForm({});
  const workspaceId = usePathname().split("/")[2];
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
    insertTaskAction(workspaceId, task);

    reset();
  };
  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="bg-blue-600 font-semibold  hover:bg-blue-100 text-white hover:text-royal-blue hover:border-blue-600 "
      >
        <Button variant="outline" className=" text-white">
          {" "}
          <PlusSquare className="size-5" />
          Add Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {" "}
            <span className="flex justify-start items-center gap-x-2 font-normal">
              {" "}
              Goal Breakdown <ChevronRight className="size-4" /> Career &
              Education
            </span>
          </DialogTitle>
          <DialogDescription>workspace</DialogDescription>
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
                Create Task
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
