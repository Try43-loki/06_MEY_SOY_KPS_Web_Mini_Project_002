import React from "react";
import CardTaskComponent from "./CardTaskComponent";

function AllCardsComponent() {
  return (
    <>
      {/* card not start */}
      <section className="flex justify-between items-center gap-x-8">
        <section className="w-2/6">
          <h3 className="border-b border-watermelon-red text-watermelon-red  ">
            Not Stated
          </h3>
          <article>
            <CardTaskComponent />
          </article>
        </section>
        {/* card progress */}
        <section className="w-2/6">
          <h3 className="border-b border-royal-blue text-royal-blue ">
            In Progress
          </h3>
          <article>
            <CardTaskComponent />
          </article>
        </section>
        {/* card finishe */}
        <section className="w-2/6">
          <h3 className="border-b border-persian-green text-persian-green ">
            Finished
          </h3>
          <article>
            <CardTaskComponent />
          </article>
        </section>
      </section>
    </>
  );
}

export default AllCardsComponent;
