import React from "react";
import WorkspaceComponent from "./WorkspaceComponent";
import FavoriteComponent from "./FavoriteComponent";
import LogoComponent from "../../../components/logoComponent";
import { LogOut } from "lucide-react";
import LogoutComponent from "./LogoutComponent";

function SidebarComponent() {
  return (
    <>
      <section className=" flex flex-col justify-around items-center h-full px-8 ">
        <LogoComponent />
        <WorkspaceComponent />
        <FavoriteComponent />
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
