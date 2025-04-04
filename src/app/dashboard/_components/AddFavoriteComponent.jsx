"use client";
import { updateFavoriteWorkspaceAction } from "@/action/workspaceAction";
import { StarIcon } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

function AddFavoriteComponent({ workspaceId, favoriteWorkspace }) {
  const [favorite, setFavorite] = useState(false);
  const handleFav = async () => {
    setFavorite(!favorite);
    if (favorite && favoriteWorkspace) {
      const update = await updateFavoriteWorkspaceAction(workspaceId, false);
      toast("Notification", {
        success: true,
        description: update.message,
        className: "bg-green-500",
        style: {
          background: "#9b59b6",
          color: "#000000",
        },
      });
    } else {
      const update = await updateFavoriteWorkspaceAction(workspaceId, true);
      toast("Notification", {
        description: update.message,
        style: {
          background: "#9b59b6",
          color: "#000000",
        },
      });
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
