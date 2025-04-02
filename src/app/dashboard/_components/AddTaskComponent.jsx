import { PlusSquare } from "lucide-react";
import React from "react";
import group_elipse from "../../../assets/imgs/group_eplise.png";

function AddTaskComponent() {
  return (
    <>
      <section className="flex justify-center items-center gap-x-3">
        <div className="flex justify-center h-10 cursor-pointer text-white items-center gap-x-2  bg-blue-600 px-4  rounded-4xl w-fit">
          <PlusSquare className="size-5" />
          <span>Add Task</span>
        </div>
        <figure className="h-10 w-10 bg-white flex flex-col gap-y-1 justify-center items-center  gap-x-1  rounded-full shadow-md">
          <div className="flex justify-center items-center gap-1">
            {" "}
            <span className="h-2 w-2 rounded-full bg-persian-green"></span>
            <span className="h-2 w-2 rounded-full bg-watermelon-red"></span>
          </div>
          <div className="flex justify-center items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-royal-blue"></span>
            <span className="h-2 w-2 rounded-full bg-purple-500"></span>
          </div>
        </figure>
      </section>
    </>
  );
}

export default AddTaskComponent;
