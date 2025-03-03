import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.tsx"
import { AppSidebar } from "./app-sidebar"
import { TopNavbar } from "@/topnavbar/component/topnavbar";

export default function LeftSideBar({ children }: { children: React.ReactNode }) {
  console.log("children", children);
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <main className="flex flex-col">
          <div className="p-4 flex w-full justify-between items-center">
            <SidebarTrigger />
            <TopNavbar />
          </div>
        </main>
        <div className="w-full">

          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
