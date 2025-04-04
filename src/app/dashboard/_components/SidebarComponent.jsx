import React from "react";
import WorkspaceComponent from "./WorkspaceComponent";
import FavoriteComponent from "./FavoriteComponent";
import LogoComponent from "../../../components/logoComponent";
import LogoutComponent from "./LogoutComponent";
import { getAllWorkspacesService } from "@/services/workspace.service";

async function SidebarComponent() {
  const workspaceData = await getAllWorkspacesService();
  const favoriteWorkspace = workspaceData?.payload.filter(
    (item) => item.isFavorite === true
  );

  return (
    <>
      <section className=" flex flex-col justify-center gap-y-10 items-center h-full px-8 ">
        <LogoComponent />
        <WorkspaceComponent workspaceData={workspaceData} />
        <FavoriteComponent favoriteWorkspace={favoriteWorkspace} />

        <LogoutComponent />
      </section>
    </>
  );
}

export default SidebarComponent;
