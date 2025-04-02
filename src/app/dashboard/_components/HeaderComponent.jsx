import { BreadcrumbComponent } from "@/components/BreadcrumComponent";
import React from "react";
import ProfileComponent from "./ProfileComponent";

function HeaderComponent({ workspaceId }) {
  return (
    <>
      <section className="w-full flex justify-between items-center">
        <BreadcrumbComponent workspaceId={workspaceId} />
        <ProfileComponent />
      </section>
    </>
  );
}

export default HeaderComponent;
