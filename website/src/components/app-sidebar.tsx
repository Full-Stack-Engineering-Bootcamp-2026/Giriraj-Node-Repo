// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarHeader,
// } from "@/components/ui/sidebar"

// export function AppSidebar() {
//   return (
//     <Sidebar>
//       <SidebarHeader />
//       <SidebarContent>
//         <SidebarGroup />
//         <SidebarGroup />
//       </SidebarContent>
//       <SidebarFooter />
//     </Sidebar>
//   )
// }

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

import {
  Home,
  ClipboardList,
  LayoutGrid,
  PieChart,
  MousePointerClick,
  Square,
  Table,
  LayoutDashboard,
  House,
  CreditCard,
  MousePointer2,
  Copy,
  Menu,

} from "lucide-react"

export function AppSidebar() {
  return (
    <Sidebar>
      
      {/* Header */}
      <SidebarHeader>
        <div className="p-2 text-lg font-bold">
          Windmill
        </div>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent>
        <SidebarMenu>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <House/>
                Dashboard
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <ClipboardList />
                Forms
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <CreditCard />
                Cards
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <PieChart />
                Charts
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <MousePointer2 />
                Buttons
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <Copy />
                Modals
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <Table />
                Tables
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <Menu />
                Pages
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

        </SidebarMenu>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <button className="w-full rounded-lg bg-purple-600 px-3 py-2 text-white">
          Create account +
        </button>
      </SidebarFooter>

    </Sidebar>
  )
}