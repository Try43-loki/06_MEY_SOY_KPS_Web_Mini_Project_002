"use client";
import { updateFavoriteWorkspaceAction } from "@/action/workspaceAction";
import { StarIcon } from "lucide-react";
import React, { useState } from "react";

function AddFavoriteComponent({ workspaceId, favoriteWorkspace }) {
  const [favorite, setFavorite] = useState(false);
  const handleFav = () => {
    setFavorite(!favorite);
    console.log(favorite);
    if (favorite && favoriteWorkspace) {
      updateFavoriteWorkspaceAction(workspaceId, false);
    } else {
      updateFavoriteWorkspaceAction(workspaceId, true);
    }
  };
  return (
    <>
      <StarIcon
        stroke="black"
        strokeWidth={1}
        className=" border-yellow-500"
        fill={favoriteWorkspace ? "yellow" : "white"}
        onClick={handleFav}
      />
    </>
  );
}

export default AddFavoriteComponent;
