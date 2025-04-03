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
        className="bg-gray-100"
        fill={favoriteWorkspace ? "yellow" : ""}
        onClick={handleFav}
      />
    </>
  );
}

export default AddFavoriteComponent;
