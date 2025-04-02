import React from "react";
import HeaderComponent from "./HeaderComponent";
import { StarIcon } from "lucide-react";
import AllCardsComponent from "./AllCardsComponent";
import AddFavoriteComponent from "./AddFavoriteComponent";
import { getAllWorkspacesService } from "@/services/workspace.service";

async function ContentComponent({ workspaceId }) {
  const workspaceData = await getAllWorkspacesService();
  const { payload } = workspaceData;
  const currentWorkspace = payload.find(
    (item) => item.workspaceId === workspaceId
  );
  const favoriteWorkspace = currentWorkspace?.isFavorite;

  return (
    <>
      {/* header */}
      <section className="w-full h-18 px-14  border-b-[1.5px] border-gray-300 flex justify-center items-center">
        <HeaderComponent workspaceId={workspaceId} />
      </section>
      {/* task */}
      <section className=" px-14 py-8">
        {/* title workspace */}
        <div className="flex justify-between items-center mb-4 ">
          <h5 className="text-2xl font-bold">
            {currentWorkspace?.workspaceName ?? "Workspace"}
          </h5>
          <span className="p-2 rounded-md bg-gray-300">
            <AddFavoriteComponent
              favoriteWorkspace={favoriteWorkspace}
              workspaceId={workspaceId}
            />
          </span>
        </div>
        {/* card */}
        <AllCardsComponent workspaceId={workspaceId} />
      </section>
    </>
  );
}

export default ContentComponent;
