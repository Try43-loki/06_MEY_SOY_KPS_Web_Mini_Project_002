import React from "react";

function InterfaceCompoment({ operator }) {
  return (
    <figure className="h-[80vh] w-full flex flex-col gap-y-2 justify-center items-center ">
      <h1 className="text-blue-400 text-3xl">
        {" "}
        {operator == "work" ? "Welcome to our sysetm" : "There is no data"}{" "}
      </h1>
      <h1 className="text-gray-400 text-2xl font-normal">
        {operator == "work"
          ? "Enjoy with your workspace"
          : "  Click add in order to add task"}{" "}
      </h1>
      <img
        src={
          operator == "work"
            ? "https://i.pinimg.com/736x/8c/ee/bc/8ceebcbe81bd84c4544f329d879a6782.jpg"
            : "https://static.vecteezy.com/system/resources/previews/019/852/279/original/no-data-empty-data-concept-illustration-free-vector.jpg"
        }
        alt=""
        height="400"
        width="400"
        className="rounded-xl"
      />
    </figure>
  );
}

export default InterfaceCompoment;
