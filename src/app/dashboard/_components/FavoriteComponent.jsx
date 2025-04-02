import { Ellipsis, FileArchive, Star } from "lucide-react";
import React from "react";

function FavoriteComponent() {
  return (
    <>
      <section className="h-[200px] w-full ">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-500 ">Favorite</h3>
          <Star className="text-gray-500" />
        </div>
        <ul className="list-none flex flex-col items-start justify-start">
          <li className=" w-full flex justify-center items-center mt-1">
            {" "}
            <span className="bg-amber-500 mr-3 ml-1 w-2 h-2 rounded-full"></span>
            <div className=" grow flex justify-between items-center">
              <span className="font-semibold">HRD Design</span>{" "}
              <Ellipsis className="cursor-pointer" />
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default FavoriteComponent;
