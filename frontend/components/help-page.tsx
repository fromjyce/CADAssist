"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, HelpCircle, FileText, MessageCircle, ChevronRight, Mail, Phone, Globe, ArrowRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("faq")

  const faqs = [
    {
      question: "How do I create my first 3D model with AI CAD?",
      answer:
        "To create your first model, navigate to the Workspace page and use the AI Prompt Interface at the bottom of the screen. Type a description of what you want to create, such as 'Create a cylindrical container with a threaded cap' and click Generate. The AI will process your request and create a 3D model based on your description. You can then refine the model using the Parametric Controls panel.",
    },
    {
      question: "What file formats can I export my models in?",
      answer:
        "AI CAD supports exporting in multiple formats including STL, OBJ, STEP, FBX, and glTF. Each format has different applications - STL is ideal for 3D printing, STEP for CAD exchange, OBJ for models with materials, FBX for animation/games, and glTF for web optimization. You can select your preferred format in the Export Panel.",
    },
    {
      question: "How do I collaborate with others on a project?",
      answer:
        "To collaborate on a project, open the project you want to share, click the Share button in the top right corner of the workspace. You can then enter email addresses of collaborators or generate a shareable link with specific permissions (view only or edit). Collaborators will appear in the project card and can work on the model simultaneously.",
    },
    {
      question: "Can I modify the AI-generated models?",
      answer:
        "Yes, all AI-generated models can be modified using the Parametric Controls panel. After generating a model, you can adjust dimensions, add features, apply constraints, and make other modifications. The Feature Tree shows all components of your model that can be edited individually.",
    },
    {
      question: "How do I create more accurate models with AI prompts?",
      answer:
        "To create more accurate models, be specific in your prompts by including dimensions, materials, and specific features. For example, instead of 'Create a box', try 'Create a 100mm x 50mm x 25mm rectangular box with 5mm rounded corners and a hinged lid'. You can also adjust the Precision slider in the AI Prompt Interface for more precise results.",
    },
    {
      question: "What are the system requirements for AI CAD?",
      answer:
        "AI CAD is a web-based application that runs in modern browsers. For optimal performance, we recommend using Chrome, Firefox, or Edge on a computer with at least 8GB of RAM. A dedicated graphics card is recommended for complex models. For mobile devices, we support recent iOS and Android devices, though a larger screen provides a better modeling experience.",
    },
  ]

  const helpCategories = [
    {
      title: "Getting Started",
      icon: <FileText className="h-5 w-5 text-primary" />,
      articles: 12,
    },
    {
      title: "AI Prompting",
      icon: <MessageCircle className="h-5 w-5 text-primary" />,
      articles: 8,
    },
    {
      title: "3D Modeling",
      icon: <HelpCircle className="h-5 w-5 text-primary" />,
      articles: 15,
    },
    {
      title: "Exporting & Sharing",
      icon: <Globe className="h-5 w-5 text-primary" />,
      articles: 6,
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container mx-auto p-4 md:p-6 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Help Center</h1>
          <p className="text-muted-foreground mt-1">Find answers to your questions about AI CAD</p>
        </div>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search for help articles, FAQs, or topics..."
          className="pl-10 py-6 text-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="faq" value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList>
          <TabsTrigger value="faq">Frequently Asked Questions</TabsTrigger>
          <TabsTrigger value="articles">Help Articles</TabsTrigger>
          <TabsTrigger value="contact">Contact Support</TabsTrigger>
        </TabsList>

        <TabsContent value="faq" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>Find answers to common questions about AI CAD</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {filteredFaqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  {filteredFaqs.length === 0 && (
                    <div className="text-center py-12">
                      <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium">No FAQs found</h3>
                      <p className="text-muted-foreground mt-1">
                        Try adjusting your search or contact support for assistance
                      </p>
                      <Button className="mt-4" onClick={() => setActiveTab("contact")}>
                        Contact Support
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Popular Topics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {helpCategories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center gap-3">
                        {category.icon}
                        <div>
                          <h3 className="font-medium group-hover:text-primary transition-colors">{category.title}</h3>
                          <p className="text-xs text-muted-foreground">{category.articles} articles</p>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Still Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Can't find what you're looking for? Our support team is here to help.
                  </p>
                  <Button className="w-full" onClick={() => setActiveTab("contact")}>
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="articles" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {category.icon}
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <li key={i} className="group">
                        <a
                          href="#"
                          className="flex items-center justify-between py-2 group-hover:text-primary transition-colors"
                        >
                          <span>Article {i + 1}</span>
                          <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full">
                    View All {category.articles} Articles
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="contact" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>Fill out the form below and our support team will get back to you</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Help with..." />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Describe your issue in detail..."
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Submit Request</Button>
              </CardFooter>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Other Ways to Reach Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email Support</h3>
                      <p className="text-sm text-muted-foreground mt-1">For general inquiries and support</p>
                      <a
                        href="mailto:support@aicad.com"
                        className="text-sm text-primary hover:underline mt-1 inline-block"
                      >
                        support@aicad.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone Support</h3>
                      <p className="text-sm text-muted-foreground mt-1">Available Monday-Friday, 9am-5pm EST</p>
                      <a href="tel:+18005551234" className="text-sm text-primary hover:underline mt-1 inline-block">
                        +1 (800) 555-1234
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Live Chat</h3>
                      <p className="text-sm text-muted-foreground mt-1">Chat with our support team in real-time</p>
                      <Button variant="link" className="p-0 h-auto text-sm mt-1">
                        Start Chat
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Support Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 8:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Response times may vary depending on the volume of requests. We aim to respond to all inquiries
                    within 24 hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
