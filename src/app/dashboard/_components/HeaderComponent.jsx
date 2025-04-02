import { BreadcrumbComponent } from "@/components/BreadcrumComponent";
import React from "react";
import ProfileComponent from "./ProfileComponent";

function HeaderComponent() {
  return (
    <>
      <section className="w-full flex justify-between items-center">
        <BreadcrumbComponent />
        <ProfileComponent />
      </section>
    </>
  );
}

export default HeaderComponent;
