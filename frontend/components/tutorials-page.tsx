"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, BookOpen, Play, Clock, Star, Filter, ChevronRight, Video, FileText, Lightbulb } from "lucide-react"
import { useRouter } from "next/navigation"

export function TutorialsPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const tutorials = [
    {
      id: 1,
      title: "Getting Started with AI CAD",
      description: "Learn the basics of using AI to generate 3D models",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "5 min",
      level: "Beginner",
      type: "video",
      featured: true,
    },
    {
      id: 2,
      title: "Advanced Parametric Modeling",
      description: "Master parametric controls for precise model adjustments",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "15 min",
      level: "Intermediate",
      type: "video",
    },
    {
      id: 3,
      title: "Effective AI Prompting Techniques",
      description: "Learn how to craft effective prompts for better results",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "10 min",
      level: "All Levels",
      type: "article",
    },
    {
      id: 4,
      title: "Exporting Models for 3D Printing",
      description: "Prepare your models for successful 3D printing",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "8 min",
      level: "Beginner",
      type: "video",
    },
    {
      id: 5,
      title: "Collaborative Modeling Workflow",
      description: "Learn how to effectively collaborate on models with your team",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "12 min",
      level: "Intermediate",
      type: "article",
    },
    {
      id: 6,
      title: "Creating Complex Assemblies",
      description: "Build multi-part assemblies with constraints and relationships",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "20 min",
      level: "Advanced",
      type: "video",
    },
    {
      id: 7,
      title: "Model Version Control Best Practices",
      description: "Manage model iterations and history effectively",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "7 min",
      level: "Intermediate",
      type: "article",
    },
    {
      id: 8,
      title: "Keyboard Shortcuts and Productivity Tips",
      description: "Speed up your workflow with these essential shortcuts",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "5 min",
      level: "All Levels",
      type: "article",
    },
  ]

  const filteredTutorials = tutorials
    .filter((tutorial) => tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(
      (tutorial) =>
        activeTab === "all" || tutorial.type === activeTab || (activeTab === "featured" && tutorial.featured),
    )

  return (
    <div className="container mx-auto p-4 md:p-6 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Tutorials & Learning</h1>
          <p className="text-muted-foreground mt-1">Master AI CAD with our comprehensive tutorials</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search tutorials..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All Tutorials</TabsTrigger>
          <TabsTrigger value="video">Videos</TabsTrigger>
          <TabsTrigger value="article">Articles</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Featured tutorial (only shown on "all" or "featured" tabs) */}
      {(activeTab === "all" || activeTab === "featured") && tutorials.find((t) => t.featured) && (
        <Card className="mb-8 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/5 h-48 md:h-auto bg-muted">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Featured Tutorial"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 p-6">
              <Badge className="mb-2 bg-primary text-white">Featured</Badge>
              <h2 className="text-2xl font-bold mb-2">Getting Started with AI CAD</h2>
              <p className="text-muted-foreground mb-4">
                This comprehensive tutorial will guide you through the basics of using AI to generate 3D models, from
                crafting effective prompts to fine-tuning your results.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-1" />5 min
                </div>
                <div className="flex items-center text-sm">
                  <BookOpen className="h-4 w-4 mr-1" />
                  Beginner
                </div>
                <div className="flex items-center text-sm">
                  <Star className="h-4 w-4 mr-1 text-yellow-500" />
                  <Star className="h-4 w-4 mr-1 text-yellow-500" />
                  <Star className="h-4 w-4 mr-1 text-yellow-500" />
                  <Star className="h-4 w-4 mr-1 text-yellow-500" />
                  <Star className="h-4 w-4 mr-1 text-yellow-500" />
                </div>
              </div>
              <Button>
                <Play className="mr-2 h-4 w-4" />
                Watch Tutorial
              </Button>
            </div>
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTutorials
          .filter((tutorial) => !tutorial.featured || activeTab !== "all")
          .map((tutorial) => (
            <Card key={tutorial.id} className="overflow-hidden">
              <div className="relative h-40 bg-muted">
                <img
                  src={tutorial.thumbnail || "/placeholder.svg"}
                  alt={tutorial.title}
                  className="w-full h-full object-cover"
                />
                {tutorial.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-background/80 rounded-full p-3">
                      <Play className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                )}
                <Badge className="absolute top-2 right-2" variant={tutorial.type === "video" ? "default" : "outline"}>
                  {tutorial.type === "video" ? (
                    <>
                      <Video className="h-3 w-3 mr-1" /> Video
                    </>
                  ) : (
                    <>
                      <FileText className="h-3 w-3 mr-1" /> Article
                    </>
                  )}
                </Badge>
              </div>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg line-clamp-2">{tutorial.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{tutorial.description}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {tutorial.duration}
                  </div>
                  <Badge variant="outline" className="text-[10px]">
                    {tutorial.level}
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="ghost" className="w-full justify-between">
                  {tutorial.type === "video" ? "Watch Now" : "Read Now"}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
      </div>

      {filteredTutorials.length === 0 && (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
            <BookOpen className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium">No tutorials found</h3>
          <p className="text-muted-foreground mt-1">Try adjusting your search or filter criteria</p>
        </div>
      )}

      <div className="mt-12 bg-muted rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/4 flex justify-center">
            <Lightbulb className="h-24 w-24 text-primary" />
          </div>
          <div className="md:w-3/4">
            <h2 className="text-2xl font-bold mb-2">Have a tutorial suggestion?</h2>
            <p className="text-muted-foreground mb-4">
              We're constantly expanding our learning resources. If there's a specific topic you'd like us to cover, let
              us know and we'll consider adding it to our tutorial library.
            </p>
            <Button>Suggest a Tutorial</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
