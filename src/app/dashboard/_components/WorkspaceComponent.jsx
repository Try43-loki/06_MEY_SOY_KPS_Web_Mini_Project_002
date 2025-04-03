"use client";
import { AddWorkspaceComponent } from "@/components/AddWorkspaceComponent";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function WorkspaceComponent({ workspaceData }) {
  const path = usePathname();
  const pathId = path.split("/")[2];
  const { payload } = workspaceData;

  // Array of colors
  const colors = [
    "#F1D2D6",
    "#38C9A9",
    "#3B5BA4",
    "#9A95DC",
    "#C234F3",
    "#F5A623",
    "#4A90E2",
    "#D0021B",
    "#7B92A2",
    "#9B5FC0",
    "#50E3C2",
    "#4CAF50",
    "#FF5733",
    "#FFBC00",
    "#5B2C6F",
    "#8E44AD",
    "#2980B9",
    "#2ECC71",
    "#D35400",
    "#1ABC9C",
  ];

  // Function to get a random color from the colors array
  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  return (
    <section className="h-[240px] w-full">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-500">Workspace</h3>
        <AddWorkspaceComponent operator={"add"} />
      </div>
      <ul className="mt-2 h-[170px] overflow-y-scroll list-none flex flex-col items-start justify-start">
        {payload.map((item) => {
          const randomColor = getRandomColor();

          return (
            <li
              key={item.workspaceId}
              className="w-full flex justify-center items-center mt-1"
            >
              <span
                style={{ backgroundColor: randomColor }}
                className="mr-3 ml-1 w-2 h-2 rounded-full"
              ></span>
              <div className="grow flex justify-between items-center">
                <Link href={`/dashboard/${item.workspaceId}`}>
                  <span
                    className={`text-lg ${
                      pathId === item.workspaceId
                        ? "font-semibold"
                        : "font-normal"
                    }`}
                  >
                    {item.workspaceName}
                  </span>
                </Link>
                <AddWorkspaceComponent workspaceId={item.workspaceId} />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default WorkspaceComponent;
