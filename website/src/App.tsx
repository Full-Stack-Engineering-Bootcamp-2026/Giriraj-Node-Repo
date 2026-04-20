import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"

function App() {
  return (
    // <SidebarProvider defaultOpen={true}>
    //   <div className="flex min-h-svh">
        
    //     {/* Sidebar */}
    //     <AppSidebar />

    //     {/* Main content */}
    //     <main className="flex-1 p-6">
          
    //       {/* This is what toggles sidebar */}
    //       {/* <SidebarTrigger /> */}

    //       <div className="mt-6">
    //         {/* <Button>Click me</Button> */}
    //       </div>

    //     </main>
    //   </div>
    // </SidebarProvider>
    <SidebarProvider defaultOpen={true}>
  <div className="flex min-h-svh">

    {/* Sidebar */}
    <AppSidebar />

    {/* Main content */}
    <main className="flex-1">

      {/* Navbar */}
      <header className="flex items-center justify-between px-6 h-14 border-b">
        
        {/* Left: optional sidebar toggle */}
        <div className="flex items-center gap-3">
          {/* <SidebarTrigger /> */}
          <h1 className="font-semibold">Dashboard</h1>
        </div>

        {/* Center: search */}
        <div className="w-1/3">
          <input
            placeholder="Search..."
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-3">
          <button>🌙</button>
          <button>🔔</button>
          <div className="w-8 h-8 rounded-full bg-gray-300" />
        </div>

      </header>

      {/* Page content */}
      <div className="p-6">
        {/* pages render here */}
      </div>

    </main>
  </div>
</SidebarProvider>
  )
}

export default App