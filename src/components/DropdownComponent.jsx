"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import { AddWorkspaceComponent } from "./AddWorkspaceComponent";
import { DeleteWorkspaceComponent } from "./DeleteWorkpaceComponent";
import { UpdateWorkspaceComponent } from "./UpdateWorkspaceComponent";

export function DropdownComponent() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {" "}
          <Ellipsis className="cursor-pointer" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit px-2 py-1 flex justify-evenly items-center ">
        <UpdateWorkspaceComponent />
        <DeleteWorkspaceComponent />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
