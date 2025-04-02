"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Ellipsis } from "lucide-react";
import React, { useState } from "react";

export default function CardComponent({ item }) {
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      month: "short", // Apr
      day: "2-digit", // 04
      year: "numeric", // 2025
    });
  };
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div className="border border-gray-300 rounded-xl mt-8">
      <div className="p-5">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold capitalize">{item.taskTitle}</h2>
          <Ellipsis />
        </div>

        {/* task detials */}
        <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
          {item.taskDetails}
        </p>

        <div className="flex justify-between items-center mt-4">
          {/* tag */}
          <p className="bg-purple-100 text-purple-500 py-1.5 px-3 rounded-lg">
            {item.tag}
          </p>

          {/* status */}
          <div
            className={`h-8 w-8 rounded-full ${
              item.status === "NOT_STARTED"
                ? "bg-watermelon-red "
                : item.status === "FINISHED"
                ? "bg-persian-green "
                : "bg-royal-blue"
            } `}
          >
            {" "}
          </div>
        </div>
      </div>

      {/* progress */}
      <div className="flex justify-between items-center border-t border-t-gray-300 p-5">
        <Select onValueChange={setSelectedValue}>
          <SelectTrigger
            className={
              item.status === "NOT_STARTED"
                ? "text-watermelon-red border-watermelon-red"
                : item.status === "FINISHED"
                ? "text-persian-green border-persian-green"
                : "text-royal-blue border-royal-blue"
            }
          >
            <SelectValue placeholder={item.status} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
            <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
            <SelectItem value="FINISHED">FINISHED</SelectItem>
          </SelectContent>
        </Select>

        {/* date */}
        <p className="flex gap-3 text-light-steel-blue">
          <Clock size={22} /> {formatDate(item.endDate)}
        </p>
      </div>
    </div>
  );
}
