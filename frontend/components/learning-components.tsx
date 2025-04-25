"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { HelpCircle, BookOpen, ChevronUp, ChevronDown, X, ArrowRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function LearningComponents() {
  const [showTutorial, setShowTutorial] = useState(false)
  const [tutorialStep, setTutorialStep] = useState(1)
  const [expanded, setExpanded] = useState(false)

  const totalSteps = 5

  const tutorialSteps = [
    {
      title: "Welcome to AI CAD",
      description: "This tutorial will guide you through the basics of using our AI-powered CAD modeling application.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Using the 3D Workspace",
      description:
        "Navigate the 3D space using orbit controls. Click and drag to rotate, scroll to zoom, and right-click drag to pan.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "AI Prompt Interface",
      description:
        "Describe what you want to model in natural language. Our AI will generate a 3D model based on your description.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Parametric Controls",
      description: "Fine-tune your model by adjusting parameters like dimensions, constraints, and features.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Exporting Your Model",
      description:
        "Export your model in various formats for 3D printing, further editing in other CAD software, or sharing.",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const cadTerms = [
    { term: "Extrusion", definition: "A feature that extends a 2D sketch into a 3D solid by adding depth." },
    { term: "Fillet", definition: "A rounded interior or exterior corner on a 3D model." },
    { term: "Chamfer", definition: "An angled or beveled edge between two faces of a 3D model." },
    {
      term: "Boolean",
      definition: "Operations that combine, subtract, or find the intersection of multiple 3D solids.",
    },
    {
      term: "Parametric",
      definition: "Design approach where model dimensions can be modified by changing parameter values.",
    },
  ]

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setExpanded(!expanded)}
            className="text-slate-400 hover:text-white"
          >
            {expanded ? <ChevronDown className="h-4 w-4 mr-1" /> : <ChevronUp className="h-4 w-4 mr-1" />}
            Learning Resources
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" onClick={() => setShowTutorial(true)}>
                  <BookOpen className="h-4 w-4 mr-1" />
                  Tutorial
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Start interactive tutorial</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm">
                <HelpCircle className="h-4 w-4 mr-1" />
                CAD Terms
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>CAD Terminology</DialogTitle>
                <DialogDescription>Common terms used in CAD modeling</DialogDescription>
              </DialogHeader>
              <div className="space-y-3 my-3 max-h-[60vh] overflow-y-auto pr-2">
                {cadTerms.map((item, index) => (
                  <div key={index} className="border-b border-slate-700 pb-2">
                    <h4 className="font-medium text-sm">{item.term}</h4>
                    <p className="text-sm text-slate-400 mt-1">{item.definition}</p>
                  </div>
                ))}
              </div>
              <DialogFooter>
                <Button variant="outline">View All Terms</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Tutorial Dialog */}
      {showTutorial && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-lg shadow-xl max-w-2xl w-full">
            <div className="flex justify-between items-center p-4 border-b border-slate-700">
              <h3 className="text-lg font-medium">
                Step {tutorialStep} of {totalSteps}: {tutorialSteps[tutorialStep - 1].title}
              </h3>
              <Button variant="ghost" size="icon" onClick={() => setShowTutorial(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <img
                  src={tutorialSteps[tutorialStep - 1].image || "/placeholder.svg"}
                  alt={`Tutorial step ${tutorialStep}`}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-slate-300">{tutorialSteps[tutorialStep - 1].description}</p>
              </div>

              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={() => setTutorialStep(Math.max(1, tutorialStep - 1))}
                  disabled={tutorialStep === 1}
                >
                  Previous
                </Button>

                {tutorialStep < totalSteps ? (
                  <Button onClick={() => setTutorialStep(Math.min(totalSteps, tutorialStep + 1))}>
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button onClick={() => setShowTutorial(false)}>Finish Tutorial</Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
