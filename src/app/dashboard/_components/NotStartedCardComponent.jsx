import CardComponent from "@/components/CardComponent";
import React from "react";

function NotStartedCardComponent({ tasksNotStarted }) {
  return (
    <>
      {tasksNotStarted?.map((item) => {
        return <CardComponent key={item?.taskId} item={item} />;
      })}
    </>
  );
}

export default NotStartedCardComponent;
