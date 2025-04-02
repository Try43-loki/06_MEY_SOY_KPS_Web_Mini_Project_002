"use client";
import { AddWorkspaceComponent } from "@/components/AddWorkspaceComponent";
import { DropdownComponent } from "@/components/DropdownComponent";
import { getAllWorkspacesService } from "@/services/workspace.service";
import { Ellipsis, SquarePlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function WorkspaceComponent({ workspaceData }) {
  const path = usePathname();
  const pathId = path.split("/")[2];

  const { payload } = workspaceData;
  return (
    <section className="h-[200px]  w-full  ">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-500 ">Workspace</h3>
        <AddWorkspaceComponent />
      </div>
      <ul className="mt-2 h-[170px] overflow-y-scroll list-none flex flex-col items-start justify-start">
        {payload.map((item) => {
          return (
            <li
              key={item.workspaceId}
              className="  w-full flex justify-center items-center mt-1"
            >
              {" "}
              <span className="bg-amber-500 mr-3 ml-1 w-2 h-2 rounded-full"></span>
              <div className=" grow flex justify-between items-center">
                <Link href={`/dashboard/${item.workspaceId}`}>
                  <span
                    className={`text-lg ${
                      pathId === item.workspaceId
                        ? "font-semibold"
                        : "font-normal"
                    }`}
                  >
                    {item.workspaceName}
                  </span>
                </Link>

                <DropdownComponent />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default WorkspaceComponent;
