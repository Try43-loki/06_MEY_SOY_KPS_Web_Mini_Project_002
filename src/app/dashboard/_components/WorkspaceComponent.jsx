import { AddWorkspaceComponent } from "@/components/AddWorkspaceComponent";
import { getAllWorkspacesService } from "@/services/workspace.service";
import { Ellipsis, SquarePlus } from "lucide-react";
import React from "react";

async function WorkspaceComponent() {
  const workspaceData = await getAllWorkspacesService();

  const { payload } = workspaceData;
  console.log(payload);
  return (
    <section className="h-[200px] w-full  ">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-500 ">Workspace</h3>
        <AddWorkspaceComponent />
      </div>
      <ul className="list-none flex flex-col items-start justify-start">
        {payload.map((item) => {
          return (
            <li
              key={item.workspaceId}
              className=" w-full flex justify-center items-center mt-1"
            >
              {" "}
              <span className="bg-amber-500 mr-3 ml-1 w-2 h-2 rounded-full"></span>
              <div className=" grow flex justify-between items-center">
                <span className="font-semibold">{item.workspaceName}</span>{" "}
                <Ellipsis className="cursor-pointer" />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default WorkspaceComponent;
