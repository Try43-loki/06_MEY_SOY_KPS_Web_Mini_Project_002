import CardComponent from "@/components/CardComponent";
import { Card } from "@/components/ui/card";
import React from "react";

function FinishedCardComponent({ tasksFinished }) {
  return (
    <>
      <>
        {tasksFinished?.map((item) => {
          return <CardComponent key={item?.taskId} item={item} />;
        })}
      </>
    </>
  );
}

export default FinishedCardComponent;
