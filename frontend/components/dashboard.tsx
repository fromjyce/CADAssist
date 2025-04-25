"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CuboidIcon as Cube, Search, Plus, Clock, Users, BookOpen, Lightbulb, Sparkles } from "lucide-react"

export default function Dashboard() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const recentProjects = [
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
  ]

  const featuredTemplates = [
    {
      id: 1,
      name: "Mechanical Parts",
      description: "Common mechanical components and assemblies",
      icon: "🔧",
    },
    {
      id: 2,
      name: "Electronics Enclosures",
      description: "Customizable enclosures for electronics projects",
      icon: "🔌",
    },
    {
      id: 3,
      name: "Household Items",
      description: "Everyday objects and household accessories",
      icon: "🏠",
    },
  ]

  const tutorials = [
    {
      id: 1,
      title: "Getting Started with AI CAD",
      duration: "5 min",
      level: "Beginner",
    },
    {
      id: 2,
      title: "Advanced Parametric Modeling",
      duration: "15 min",
      level: "Intermediate",
    },
    {
      id: 3,
      title: "Effective AI Prompting Techniques",
      duration: "10 min",
      level: "All Levels",
    },
  ]

  return (
    <div className="container mx-auto p-4 md:p-6 max-w-7xl">
      {/* Hero section */}
      <div className="mb-8 mt-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome to AI CAD</h1>
        <p className="text-muted-foreground text-lg">Create, modify, and export 3D models using natural language</p>
      </div>

      {/* Search and quick actions */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects, models, or tutorials..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button onClick={() => router.push("/workspace")} className="flex-1 md:flex-none">
            <Cube className="mr-2 h-4 w-4" />
            New Project
          </Button>
          <Button variant="outline" onClick={() => router.push("/projects")} className="flex-1 md:flex-none">
            <Plus className="mr-2 h-4 w-4" />
            Import Model
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle>Recent Projects</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => router.push("/projects")}>
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recentProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <div className="h-32 bg-muted">
                      <img
                        src={project.thumbnail || "/placeholder.svg"}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-3">
                      <h3 className="font-medium truncate">{project.name}</h3>
                      <div className="flex items-center mt-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {project.lastModified}
                      </div>
                    </CardContent>
                    <CardFooter className="p-3 pt-0 flex justify-between">
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
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Start Templates</CardTitle>
              <CardDescription>Start with a template to speed up your modeling process</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {featuredTemplates.map((template) => (
                  <Card key={template.id} className="cursor-pointer hover:bg-accent transition-colors">
                    <CardContent className="p-4 flex items-start">
                      <div className="text-3xl mr-4">{template.icon}</div>
                      <div>
                        <h3 className="font-medium">{template.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{template.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Prompt Examples</CardTitle>
              <CardDescription>Try these example prompts to see what AI CAD can do</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="justify-start h-auto py-3 px-4"
                  onClick={() => router.push("/workspace")}
                >
                  <Sparkles className="h-5 w-5 mr-3 text-primary" />
                  <div className="text-left">
                    <p className="font-medium">Create a cylindrical container with a threaded cap</p>
                    <p className="text-xs text-muted-foreground mt-1">Generates a container with precise threading</p>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="justify-start h-auto py-3 px-4"
                  onClick={() => router.push("/workspace")}
                >
                  <Sparkles className="h-5 w-5 mr-3 text-primary" />
                  <div className="text-left">
                    <p className="font-medium">Design a mounting bracket for a 120mm fan</p>
                    <p className="text-xs text-muted-foreground mt-1">Creates a bracket with standard mounting holes</p>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="justify-start h-auto py-3 px-4"
                  onClick={() => router.push("/workspace")}
                >
                  <Sparkles className="h-5 w-5 mr-3 text-primary" />
                  <div className="text-left">
                    <p className="font-medium">Model a simple gear with 24 teeth</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Generates a parametric gear with customizable teeth
                    </p>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="justify-start h-auto py-3 px-4"
                  onClick={() => router.push("/workspace")}
                >
                  <Sparkles className="h-5 w-5 mr-3 text-primary" />
                  <div className="text-left">
                    <p className="font-medium">Generate a phone stand with adjustable angle</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Creates an articulated stand with adjustable viewing angles
                    </p>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {tutorials.map((tutorial) => (
                <div key={tutorial.id} className="flex items-start">
                  <BookOpen className="h-5 w-5 mr-3 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">{tutorial.title}</h3>
                    <div className="flex items-center mt-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{tutorial.duration}</span>
                      <Badge variant="outline" className="ml-2 text-[10px]">
                        {tutorial.level}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full" onClick={() => router.push("/tutorials")}>
                View All Tutorials
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tips & Tricks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <Lightbulb className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Be Specific in Your Prompts</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Include dimensions, materials, and specific features for better results.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Lightbulb className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Use the Parametric Controls</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Fine-tune your model after generation for precise adjustments.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Lightbulb className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Save Versions Often</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Use the history timeline to track changes and revert if needed.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start">
                <Avatar className="h-8 w-8 mr-3">
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">Alex Smith</span> commented on your Gear Assembly
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">10 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start">
                <Avatar className="h-8 w-8 mr-3">
                  <AvatarFallback>TW</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">Taylor Wong</span> shared a new model with you
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start">
                <Avatar className="h-8 w-8 mr-3">
                  <AvatarFallback>MK</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">Morgan Kim</span> invited you to collaborate
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Yesterday</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
