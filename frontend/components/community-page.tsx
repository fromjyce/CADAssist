"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  MessageSquare,
  ThumbsUp,
  Share2,
  Users,
  Filter,
  Globe,
  Sparkles,
  MessageCircle,
  PlusCircle,
  Heart,
  Calendar,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("feed")

  const posts = [
    {
      id: 1,
      author: {
        name: "Alex Smith",
        avatar: "/placeholder.svg",
        initials: "AS",
      },
      time: "2 hours ago",
      content:
        "Just finished this mechanical keyboard case design using AI CAD. The prompt was 'Create a 60% mechanical keyboard case with chamfered edges and a 7-degree typing angle.' What do you think?",
      image: "/placeholder.svg?height=300&width=500",
      likes: 24,
      comments: 8,
      featured: true,
    },
    {
      id: 2,
      author: {
        name: "Taylor Wong",
        avatar: "/placeholder.svg",
        initials: "TW",
      },
      time: "Yesterday",
      content:
        "I've been experimenting with different prompting techniques for generating gears. Found that specifying the number of teeth, pressure angle, and module gives the best results. Here's a 24-tooth gear I created.",
      image: "/placeholder.svg?height=300&width=500",
      likes: 42,
      comments: 15,
    },
    {
      id: 3,
      author: {
        name: "Morgan Kim",
        avatar: "/placeholder.svg",
        initials: "MK",
      },
      time: "3 days ago",
      content:
        "Question for the community: What's your workflow for creating assemblies with multiple parts? Do you generate each part separately or try to describe the entire assembly in one prompt?",
      likes: 18,
      comments: 27,
    },
    {
      id: 4,
      author: {
        name: "Jordan Lee",
        avatar: "/placeholder.svg",
        initials: "JL",
      },
      time: "1 week ago",
      content:
        "Check out this phone stand I designed! It has an adjustable viewing angle and cable management. Printed it on my Prusa and it works perfectly.",
      image: "/placeholder.svg?height=300&width=500",
      likes: 56,
      comments: 12,
    },
  ]

  const events = [
    {
      id: 1,
      title: "AI CAD Workshop: Advanced Techniques",
      date: "June 15, 2023",
      time: "2:00 PM - 4:00 PM EDT",
      location: "Virtual",
      attendees: 128,
    },
    {
      id: 2,
      title: "Community Showcase: May Edition",
      date: "May 30, 2023",
      time: "1:00 PM - 3:00 PM EDT",
      location: "Virtual",
      attendees: 95,
    },
    {
      id: 3,
      title: "Beginner's Guide to AI Prompting",
      date: "June 8, 2023",
      time: "11:00 AM - 12:30 PM EDT",
      location: "Virtual",
      attendees: 210,
    },
  ]

  const filteredPosts = posts.filter((post) => post.content.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="container mx-auto p-4 md:p-6 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Community</h1>
          <p className="text-muted-foreground mt-1">Connect with other AI CAD users</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Post
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Main content */}
        <div className="md:w-2/3 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search posts..."
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

          <Tabs defaultValue="feed" value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="feed">Feed</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="following">Following</TabsTrigger>
              <TabsTrigger value="questions">Questions</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Posts */}
          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <Card key={post.id} className={post.featured ? "border-primary" : ""}>
                {post.featured && (
                  <div className="bg-primary text-white px-4 py-1 text-sm font-medium flex items-center">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Featured Post
                  </div>
                )}
                <CardHeader className="p-4 pb-0">
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                      <AvatarFallback>{post.author.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{post.author.name}</div>
                      <div className="text-xs text-muted-foreground">{post.time}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="mb-4">{post.content}</p>
                  {post.image && (
                    <div className="rounded-md overflow-hidden mb-4">
                      <img src={post.image || "/placeholder.svg"} alt="Post" className="w-full" />
                    </div>
                  )}
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <div className="flex gap-4">
                    <Button variant="ghost" size="sm" className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:w-1/3 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Community Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-primary" />
                    <span>Members</span>
                  </div>
                  <span className="font-medium">12,458</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-2 text-primary" />
                    <span>Countries</span>
                  </div>
                  <span className="font-medium">86</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-2 text-primary" />
                    <span>Posts Today</span>
                  </div>
                  <span className="font-medium">124</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {events.map((event, index) => (
                <div key={event.id}>
                  {index > 0 && <Separator className="my-4" />}
                  <div>
                    <h3 className="font-medium">{event.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {event.date} • {event.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Globe className="h-4 w-4 mr-1" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm mt-2">
                      <Users className="h-4 w-4 mr-1 text-primary" />
                      {event.attendees} attending
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Events
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Popular Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">#3DPrinting</Badge>
                <Badge variant="secondary">#MechanicalDesign</Badge>
                <Badge variant="secondary">#PromptTips</Badge>
                <Badge variant="secondary">#Assemblies</Badge>
                <Badge variant="secondary">#Gears</Badge>
                <Badge variant="secondary">#Enclosures</Badge>
                <Badge variant="secondary">#Brackets</Badge>
                <Badge variant="secondary">#Showcase</Badge>
                <Badge variant="secondary">#Beginner</Badge>
                <Badge variant="secondary">#ParametricDesign</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Top Contributors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>TW</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Taylor Wong</div>
                    <div className="text-xs text-muted-foreground">142 posts</div>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Alex Smith</div>
                    <div className="text-xs text-muted-foreground">98 posts</div>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>MK</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Morgan Kim</div>
                    <div className="text-xs text-muted-foreground">87 posts</div>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
