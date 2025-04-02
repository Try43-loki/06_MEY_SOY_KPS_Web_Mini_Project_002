import { DropdownComponent } from "@/components/DropdownComponent";
import { Ellipsis, FileArchive, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

function FavoriteComponent({ favoriteWorkspace }) {
  const payload = favoriteWorkspace;

  return (
    <>
      <section className="h-[200px] w-full ">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-500 ">Favorite</h3>
          <Star className="text-gray-500" />
        </div>
        <ul className="mt-2 h-[170px] overflow-y-scroll list-none flex flex-col items-start justify-start">
          {payload.map((item) => {
            return (
              <li
                key={item.workspaceId}
                className="  w-full flex justify-center items-center mt-1"
              >
                {" "}
                <span className="bg-amber-500 mr-3 ml-1 w-2 h-2 rounded-full"></span>
                <div className=" grow flex justify-between items-center">
                  <Link href={`/dashboard/${item.workspaceId}`}>
                    <span className="text-lg">{item.workspaceName}</span>{" "}
                  </Link>

                  <DropdownComponent />
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default FavoriteComponent;
