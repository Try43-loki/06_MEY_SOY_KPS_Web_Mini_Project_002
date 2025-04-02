import { Sidebar } from "lucide-react";
import React from "react";
import SidebarComponent from "../_components/SidebarComponent";
import ContentComponent from "../_components/ContentComponent";
import AddTaskComponent from "../_components/AddTaskComponent";
import { getAllWorkspacesService } from "@/services/workspace.service";

async function WorkspaceDetailPage({ params }) {
  const workspace = await params;
  const workspaceId = workspace.workspaceId;

  return (
    <>
      <section className="flex h-screen w-screen gap-8">
        {/* side bar */}
        <aside className="w-1/5 h-screen bg-white">
          <SidebarComponent />
        </aside>
        {/* content */}
        <section className=" grow h-screen relative">
          <ContentComponent workspaceId={workspaceId} />
          <div className="fixed bottom-10 right-14">
            {/* add task */}
            <AddTaskComponent />
          </div>
        </section>
      </section>
    </>
  );
}

export default WorkspaceDetailPage;
