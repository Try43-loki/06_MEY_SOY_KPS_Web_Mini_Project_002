import { SquarePlus } from "lucide-react";
import React from "react";

function WorkspaceComponent() {
  return (
    <section className="h-[400px] w-full bg-blue-400">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-gray-400 ">Workspace</h3>
        <SquarePlus className="text-gray-600" />
      </div>
    </section>
  );
}

export default WorkspaceComponent;
