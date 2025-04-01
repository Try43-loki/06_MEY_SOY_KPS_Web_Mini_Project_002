import React from "react";
import HeaderComponent from "./HeaderComponent";
import TaskCardComponent from "./TaskCardComponent";

function ContentComponent() {
  return (
    <>
      {/* header */}
      <section className="w-full  h-18 pl-10">
        <HeaderComponent />
      </section>
      {/* task */}
      <section className="p-10">
        <TaskCardComponent />
      </section>
    </>
  );
}

export default ContentComponent;
