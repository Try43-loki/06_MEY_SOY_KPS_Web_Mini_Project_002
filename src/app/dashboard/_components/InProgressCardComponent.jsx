import CardComponent from "@/components/CardComponent";
import React from "react";

function InProgressCardComponent({ taskInProgress }) {
  return (
    <>
      <>
        {taskInProgress?.map((item) => {
          return <CardComponent key={item?.taskId} item={item} />;
        })}
      </>
    </>
  );
}

export default InProgressCardComponent;
