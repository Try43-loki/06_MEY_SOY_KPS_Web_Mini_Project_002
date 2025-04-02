import React from "react";
import WorkspaceComponent from "./WorkspaceComponent";
import FavoriteComponent from "./FavoriteComponent";
import LogoComponent from "../../../components/logoComponent";
import { LogOut } from "lucide-react";
import LogoutComponent from "./LogoutComponent";
import { getAllWorkspacesService } from "@/services/workspace.service";

async function SidebarComponent() {
  const workspaceData = await getAllWorkspacesService();
  const favoriteWorkspace = workspaceData.payload.filter(
    (item) => item.isFavorite === true
  );

  return (
    <>
      <section className=" flex flex-col justify-around items-center h-full px-8 ">
        <LogoComponent />
        <WorkspaceComponent workspaceData={workspaceData} />
        <FavoriteComponent favoriteWorkspace={favoriteWorkspace} />
        <button className="flex justify-center items-center text-persian-green gap-2 cursor-pointer  self-start">
          <LogOut />
          <span className=" font-semibold ">Logout</span>
        </button>
        {/* <LogoutComponent /> */}
      </section>
    </>
  );
}

export default SidebarComponent;
