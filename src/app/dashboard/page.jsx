import { Sidebar } from "lucide-react";
import React from "react";
import SidebarComponent from "./_components/SidebarComponent";
import ContentComponent from "./_components/ContentComponent";

function DashBoard() {
  return (
    <>
      <section className="flex h-screen w-screen bg-blue-900">
        {/* side bar */}
        <aside className="w-1/5 h-screen bg-white">
          <SidebarComponent />
        </aside>
        {/* content */}
        <section className="w-4/5 h-screen bg-amber-400">
          <ContentComponent />
        </section>
      </section>
    </>
  );
}

export default DashBoard;
