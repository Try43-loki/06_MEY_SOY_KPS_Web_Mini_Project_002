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

export function DialogComponent() {
  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="bg-blue-600 font-semibold  hover:bg-blue-100 text-white hover:text-royal-blue hover:border-blue-600 "
      >
        <Button variant="outline" className="text-royal-blue">
          {" "}
          <PlusSquare className="size-5" />
          Add Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          {/* <DialogTitle>
            {" "}
            Goal Breakdown <ChevronRight /> Career & Education
          </DialogTitle> */}
          <DialogDescription>
            Goal Breakdown Career & Education
          </DialogDescription>
        </DialogHeader>

        <div>
          <Label
            htmlFor="name"
            className="text-right font-semibold text-xl mb-1"
          >
            Title
          </Label>
          <Input
            id="title"
            className="col-span-3"
            placeholder="Insert your goal title"
          />
        </div>
        <div>
          <Label htmlFor="name" className="text-right  mb-1">
            Tag
          </Label>
          <Input
            id="title"
            className="col-span-3"
            placeholder="Insert your notes here"
          />
        </div>
        <div>
          <Label htmlFor="name" className="text-right mb-1 ">
            Due
          </Label>
          {/* <Input id="title" className="col-span-3" placeholder="March 4,2024" /> */}
          <input
            type="date"
            className="col-span-3"
            placeholder="March 4,2024"
          />
        </div>
        <div>
          <Label htmlFor="name" className="text-right  mb-1">
            Descripton
          </Label>
          <Input
            id="title"
            className="col-span-3"
            placeholder="Insert your notes here"
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" className="bg-blue-600">
              Create Task
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
