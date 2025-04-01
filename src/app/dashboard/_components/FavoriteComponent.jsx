import { FileArchive, Star } from "lucide-react";
import React from "react";

function FavoriteComponent() {
  return (
    <>
      <section className="h-[400px] w-full bg-pink-500">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-400 ">Favorite</h3>
          <Star className="text-gray-600" />
        </div>
      </section>
    </>
  );
}

export default FavoriteComponent;
