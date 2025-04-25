"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Folder,
  FolderPlus,
  Search,
  Plus,
  MoreHorizontal,
  Users,
  Clock,
  Filter,
  SortAsc,
  Download,
  Share2,
  Trash2,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

export function ProjectsPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      name: "Mounting Bracket",
      thumbnail: "/placeholder.svg?height=100&width=100",
      lastModified: "2 hours ago",
      collaborators: ["JD", "AS", "MK"],
      type: "personal",
    },
    {
      id: 2,
      name: "Gear Assembly",
      thumbnail: "/placeholder.svg?height=100&width=100",
      lastModified: "1 day ago",
      collaborators: ["JD", "TW"],
      type: "team",
    },
    {
      id: 3,
      name: "Phone Stand",
      thumbnail: "/placeholder.svg?height=100&width=100",
      lastModified: "3 days ago",
      collaborators: ["JD"],
      type: "personal",
    },
    {
      id: 4,
      name: "Enclosure Design",
      thumbnail: "/placeholder.svg?height=100&width=100",
      lastModified: "1 week ago",
      collaborators: ["JD", "AS"],
      type: "team",
    },
    {
      id: 5,
      name: "Mechanical Keyboard Case",
      thumbnail: "/placeholder.svg?height=100&width=100",
      lastModified: "2 weeks ago",
      collaborators: ["JD", "MK", "TW"],
      type: "team",
    },
    {
      id: 6,
      name: "Drone Frame",
      thumbnail: "/placeholder.svg?height=100&width=100",
      lastModified: "3 weeks ago",
      collaborators: ["JD"],
      type: "personal",
    },
    {
      id: 7,
      name: "Camera Mount",
      thumbnail: "/placeholder.svg?height=100&width=100",
      lastModified: "1 month ago",
      collaborators: ["JD", "AS"],
      type: "archived",
    },
    {
      id: 8,
      name: "Desk Organizer",
      thumbnail: "/placeholder.svg?height=100&width=100",
      lastModified: "2 months ago",
      collaborators: ["JD"],
      type: "archived",
    },
  ]

  const folders = [
    { id: 1, name: "Personal Projects", count: 12 },
    { id: 2, name: "Team Projects", count: 8 },
    { id: 3, name: "Archived", count: 24 },
  ]

  const filteredProjects = projects
    .filter((project) => project.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((project) => activeTab === "all" || project.type === activeTab)

  return (
    <div className="container mx-auto p-4 md:p-6 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-muted-foreground mt-1">Manage and organize your 3D models</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Button onClick={() => router.push("/workspace")}>
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Import
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter By</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Date Created</DropdownMenuItem>
              <DropdownMenuItem>Last Modified</DropdownMenuItem>
              <DropdownMenuItem>Collaborators</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <SortAsc className="mr-2 h-4 w-4" />
                Sort
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Sort By</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Name (A-Z)</DropdownMenuItem>
              <DropdownMenuItem>Name (Z-A)</DropdownMenuItem>
              <DropdownMenuItem>Newest First</DropdownMenuItem>
              <DropdownMenuItem>Oldest First</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {folders.map((folder) => (
          <Button key={folder.id} variant="outline" size="sm" className="flex items-center whitespace-nowrap">
            <Folder className="h-4 w-4 mr-1" />
            {folder.name}
            <span className="ml-1 text-xs bg-muted px-1.5 py-0.5 rounded-full">{folder.count}</span>
          </Button>
        ))}
        <Button variant="outline" size="sm" className="whitespace-nowrap">
          <FolderPlus className="h-4 w-4 mr-1" />
          New Folder
        </Button>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Card
          className="bg-muted/30 border-dashed border-muted flex flex-col items-center justify-center p-4 h-60 cursor-pointer hover:bg-muted/50 transition-colors"
          onClick={() => router.push("/workspace")}
        >
          <Plus className="h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-lg font-medium">New Project</p>
          <p className="text-sm text-muted-foreground">Start creating a new 3D model</p>
        </Card>

        {filteredProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="relative h-40 bg-muted">
              <img
                src={project.thumbnail || "/placeholder.svg"}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8 bg-background/70 hover:bg-background/90"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => router.push("/workspace")}>Open</DropdownMenuItem>
                  <DropdownMenuItem>Rename</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuItem>
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-lg">{project.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                {project.lastModified}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between">
              <div className="flex -space-x-2">
                {project.collaborators.map((initials, i) => (
                  <Avatar key={i} className="h-6 w-6 border-2 border-background">
                    <AvatarFallback className="text-[10px]">{initials}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Users className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
            <Folder className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium">No projects found</h3>
          <p className="text-muted-foreground mt-1">Try adjusting your search or filter criteria</p>
          <Button className="mt-4" onClick={() => router.push("/workspace")}>
            Create New Project
          </Button>
        </div>
      )}
    </div>
  )
}
