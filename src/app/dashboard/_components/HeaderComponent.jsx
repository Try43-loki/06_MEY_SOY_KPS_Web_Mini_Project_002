import { BreadcrumbComponent } from "@/components/BreadcrumComponent";
import React from "react";

function HeaderComponent() {
  return (
    <>
      <section className="flex justify-between items-center">
        <BreadcrumbComponent />
      </section>
    </>
  );
}

export default HeaderComponent;
