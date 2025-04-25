"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Folder, FolderPlus, Search, Plus, MoreHorizontal, Users, Clock } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function ProjectManagement() {
  const [searchQuery, setSearchQuery] = useState("")

  const projects = [
    {
      id: 1,
      name: "Mounting Bracket",
      thumbnail: "/placeholder.svg?height=100&width=100",
      lastModified: "2 hours ago",
      collaborators: ["JD", "AS", "MK"],
    },
    {
      id: 2,
      name: "Gear Assembly",
      thumbnail: "/placeholder.svg?height=100&width=100",
      lastModified: "1 day ago",
      collaborators: ["JD", "TW"],
    },
    {
      id: 3,
      name: "Phone Stand",
      thumbnail: "/placeholder.svg?height=100&width=100",
      lastModified: "3 days ago",
      collaborators: ["JD"],
    },
    {
      id: 4,
      name: "Enclosure Design",
      thumbnail: "/placeholder.svg?height=100&width=100",
      lastModified: "1 week ago",
      collaborators: ["JD", "AS"],
    },
  ]

  const folders = [
    { id: 1, name: "Personal Projects", count: 12 },
    { id: 2, name: "Team Projects", count: 8 },
    { id: 3, name: "Archived", count: 24 },
  ]

  const filteredProjects = projects.filter((project) => project.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-lg font-medium mb-4">Project Management</h3>

      <div className="relative mb-4">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
        <Input
          placeholder="Search projects..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {folders.map((folder) => (
          <Button key={folder.id} variant="outline" size="sm" className="flex items-center whitespace-nowrap">
            <Folder className="h-4 w-4 mr-1" />
            {folder.name}
            <span className="ml-1 text-xs bg-slate-700 px-1.5 py-0.5 rounded-full">{folder.count}</span>
          </Button>
        ))}
        <Button variant="outline" size="sm" className="whitespace-nowrap">
          <FolderPlus className="h-4 w-4 mr-1" />
          New Folder
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-3 overflow-y-auto pb-4">
        <Card className="bg-slate-800 border-dashed border-slate-700 flex flex-col items-center justify-center p-4 h-40">
          <Plus className="h-8 w-8 text-slate-500 mb-2" />
          <p className="text-sm text-slate-400">New Project</p>
        </Card>

        {filteredProjects.map((project) => (
          <Card key={project.id} className="bg-slate-800 border-slate-700 overflow-hidden">
            <div className="relative h-24 bg-slate-700">
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
                    className="absolute top-1 right-1 h-7 w-7 bg-slate-800/70 hover:bg-slate-800"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Rename</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuItem>Move to folder</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <CardContent className="p-3">
              <h4 className="font-medium text-sm truncate">{project.name}</h4>
              <div className="flex items-center mt-1 text-xs text-slate-400">
                <Clock className="h-3 w-3 mr-1" />
                {project.lastModified}
              </div>
            </CardContent>
            <CardFooter className="p-3 pt-0 flex justify-between">
              <div className="flex -space-x-2">
                {project.collaborators.map((initials, i) => (
                  <Avatar key={i} className="h-6 w-6 border-2 border-slate-800">
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
    </div>
  )
}
