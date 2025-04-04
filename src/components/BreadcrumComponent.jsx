import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getAllWorkspacesService } from "@/services/workspace.service";

export async function BreadcrumbComponent({ workspaceId }) {
  const workspaceData = await getAllWorkspacesService();
  const { payload } = workspaceData;
  const currentWorkspace = payload.find(
    (item) => item.workspaceId === workspaceId
  );
  return (
    <Breadcrumb className="text-xl text-black">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>
            {currentWorkspace?.workspaceName ?? "Workspace"}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
