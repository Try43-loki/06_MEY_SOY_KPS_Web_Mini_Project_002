import React from "react";
import NotStartedCardComponent from "./NotStartedCardComponent";
import InProgressCardComponent from "./InProgressCardComponent";
import FinishedCardComponent from "./FinishedCardComponent";
import { getAllTasksByWorkspaceId } from "@/services/tanks.service";
import InterfaceCompoment from "./InterfaceCompoment";

async function AllCardsComponent({ workspaceId }) {
  const taskData = await getAllTasksByWorkspaceId(workspaceId);

  const { payload } = taskData;
  const tasksNotStarted = payload?.filter((item) => {
    return item.status === "NOT_STARTED";
  });
  const taskInProgress = payload?.filter((item) => {
    return item.status === "IN_PROGRESS";
  });
  const tasksFinished = payload?.filter((item) => {
    return item.status === "FINISHED";
  });

  return (
    <>
      <section className="flex justify-between items-start gap-x-8">
        <section className="w-2/6">
          <h3 className="border-b border-watermelon-red text-watermelon-red  ">
            Not Stated
          </h3>
          <article className="h-[600px] overflow-y-scroll">
            <NotStartedCardComponent tasksNotStarted={tasksNotStarted} />
          </article>
        </section>
        {/* card progress */}
        <section className="w-2/6">
          <h3 className="border-b border-royal-blue text-royal-blue ">
            In Progress
          </h3>
          <article className="h-[600px] overflow-y-scroll">
            <InProgressCardComponent taskInProgress={taskInProgress} />
          </article>
        </section>
        {/* card finishe */}
        <section className="w-2/6">
          <h3 className="border-b border-persian-green text-persian-green ">
            Finished
          </h3>
          <article className="h-[600px] overflow-y-scroll">
            <FinishedCardComponent tasksFinished={tasksFinished} />
          </article>
        </section>
      </section>

      {/* card not start */}
    </>
  );
}

export default AllCardsComponent;
