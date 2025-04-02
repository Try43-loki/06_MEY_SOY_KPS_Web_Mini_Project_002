import React from "react";
import HeaderComponent from "./HeaderComponent";
import { StarIcon } from "lucide-react";
import AllCardsComponent from "./AllCardsComponent";

function ContentComponent() {
  return (
    <>
      {/* header */}
      <section className="w-full h-18 px-14  border-b-[1.5px] border-gray-300 flex justify-center items-center">
        <HeaderComponent />
      </section>
      {/* task */}
      <section className=" px-14 py-8">
        {/* title workspace */}
        <div className="flex justify-between items-center mb-4 ">
          <h5 className="text-2xl font-bold">HRD Design</h5>
          <span className="p-2 rounded-md bg-gray-300">
            <StarIcon />
          </span>
        </div>
        {/* card */}
        <AllCardsComponent />
      </section>
    </>
  );
}

export default ContentComponent;
