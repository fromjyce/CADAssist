"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Home,
  CuboidIcon as Cube,
  Layers,
  Settings,
  Users,
  FileText,
  HelpCircle,
  LogOut,
  User,
  Bell,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AppSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [activeItem, setActiveItem] = useState("")

  // Update active item based on current path
  useEffect(() => {
    if (pathname === "/") {
      setActiveItem("home")
    } else if (pathname.startsWith("/workspace")) {
      setActiveItem("workspace")
    } else if (pathname.startsWith("/projects")) {
      setActiveItem("projects")
    } else if (pathname.startsWith("/tutorials")) {
      setActiveItem("tutorials")
    } else if (pathname.startsWith("/community")) {
      setActiveItem("community")
    } else if (pathname.startsWith("/help")) {
      setActiveItem("help")
    } else if (pathname.startsWith("/settings")) {
      setActiveItem("settings")
    }
  }, [pathname])

  const navigateTo = (path: string) => {
    router.push(path)
  }

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="flex justify-between items-center">
        <div className="flex items-center gap-2 px-2">
          <Cube className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">AI CAD</span>
        </div>
        <ModeToggle />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeItem === "home"} onClick={() => navigateTo("/")} tooltip="Home">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeItem === "workspace"}
                  onClick={() => navigateTo("/workspace")}
                  tooltip="Workspace"
                >
                  <Cube className="h-5 w-5" />
                  <span>Workspace</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeItem === "projects"}
                  onClick={() => navigateTo("/projects")}
                  tooltip="Projects"
                >
                  <Layers className="h-5 w-5" />
                  <span>Projects</span>
                  <Badge className="ml-auto bg-primary text-white">3</Badge>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeItem === "tutorials"}
                  onClick={() => navigateTo("/tutorials")}
                  tooltip="Tutorials"
                >
                  <FileText className="h-5 w-5" />
                  <span>Tutorials</span>
                  <Badge variant="outline" className="ml-auto">
                    New
                  </Badge>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeItem === "community"}
                  onClick={() => navigateTo("/community")}
                  tooltip="Community"
                >
                  <Users className="h-5 w-5" />
                  <span>Community</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeItem === "help"} onClick={() => navigateTo("/help")} tooltip="Help">
                  <HelpCircle className="h-5 w-5" />
                  <span>Help</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={activeItem === "settings"}
              onClick={() => navigateTo("/settings")}
              tooltip="Settings"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton tooltip="User Profile">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span>John Doe</span>
                  <Bell className="ml-auto h-4 w-4 text-primary" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
