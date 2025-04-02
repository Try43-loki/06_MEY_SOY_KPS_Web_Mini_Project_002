import React from "react";
import NotStartedCardComponent from "./NotStartedCardComponent";
import InProgressCardComponent from "./InProgressCardComponent";
import FinishedCardComponent from "./FinishedCardComponent";
import { getAllTasksByWorkspaceId } from "@/services/tanks.service";
import CardComponent from "@/components/CardComponent";

async function AllCardsComponent({ workspaceId }) {
  const taskData = await getAllTasksByWorkspaceId(workspaceId);
  const { payload } = taskData;
  console.log(payload);
  return (
    <>
      {/* card not start */}
      <section className="flex justify-between items-start gap-x-8">
        <section className="w-2/6">
          <h3 className="border-b border-watermelon-red text-watermelon-red  ">
            Not Stated
          </h3>
          <article>
            {/* <NotStartedCardComponent /> */}
            {payload.map((item) => {
              return <CardComponent key={item.taskId} item={item} />;
            })}
          </article>
        </section>
        {/* card progress */}
        <section className="w-2/6">
          <h3 className="border-b border-royal-blue text-royal-blue ">
            In Progress
          </h3>
          <article>{/* <InProgressCardComponent /> */}</article>
        </section>
        {/* card finishe */}
        <section className="w-2/6">
          <h3 className="border-b border-persian-green text-persian-green ">
            Finished
          </h3>
          <article>{/* <FinishedCardComponent /> */}</article>
        </section>
      </section>
    </>
  );
}

export default AllCardsComponent;
