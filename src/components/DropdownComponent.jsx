"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";

import { DeleteDeteleComponent } from "./DeleteTaskComponent";
import { UpdateTaskComponent } from "./UpdateTaskComponent";

export function DropdownComponent({ taskId, workspaceId, item }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button variant="outline">
          {" "}
          <Ellipsis className="cursor-pointer" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit px-2 py-1 flex justify-evenly items-center ">
        <UpdateTaskComponent
          taskId={taskId}
          workspaceId={workspaceId}
          item={item}
        />
        <DeleteDeteleComponent taskId={taskId} workspaceId={workspaceId} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
