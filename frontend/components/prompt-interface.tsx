"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Mic, Send, Sparkles, History } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAIProcessor } from "@/hooks/use-ai-processor"
import { useCADModel } from "@/hooks/use-cad-model"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function PromptInterface() {
  const [prompt, setPrompt] = useState("")
  const [showHistory, setShowHistory] = useState(false)
  const { isProcessing, processPrompt, confidence, recentPrompts } = useAIProcessor()
  const { setModel, setDimensions } = useCADModel()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (prompt.trim()) {
      processPrompt(prompt)

      // Map specific prompts to models
      if (prompt.toLowerCase().includes("cylindrical container") || prompt.toLowerCase().includes("threaded cap")) {
        setTimeout(() => {
          setModel("container")
          setDimensions({
            width: 1,
            height: 2,
            depth: 1,
            radius: 0.8,
          })
        }, 2000)
      } else if (prompt.toLowerCase().includes("mounting bracket") || prompt.toLowerCase().includes("120mm fan")) {
        setTimeout(() => {
          setModel("bracket")
          setDimensions({
            width: 2,
            height: 2,
            depth: 1,
            radius: 0.5,
          })
        }, 2000)
      } else if (prompt.toLowerCase().includes("gear") || prompt.toLowerCase().includes("teeth")) {
        setTimeout(() => {
          setModel("gear")
          setDimensions({
            width: 1,
            height: 0.5,
            depth: 1,
            radius: 1,
          })
        }, 2000)
      } else if (prompt.toLowerCase().includes("phone stand") || prompt.toLowerCase().includes("adjustable angle")) {
        setTimeout(() => {
          setModel("phone_stand")
          setDimensions({
            width: 2,
            height: 2,
            depth: 2,
            radius: 0.5,
          })
        }, 2000)
      }

      setPrompt("")
    }
  }

  const promptSuggestions = [
    "Create a cylindrical container with a threaded cap",
    "Design a mounting bracket for a 120mm fan",
    "Model a simple gear with 24 teeth",
    "Generate a phone stand with adjustable angle",
  ]

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-medium flex items-center text-foreground">
          <Sparkles className="h-5 w-5 mr-2 text-primary" />
          AI Prompt Interface
        </h3>
        <Button variant="ghost" size="sm" onClick={() => setShowHistory(!showHistory)} className="text-foreground">
          <History className="h-4 w-4 mr-1" />
          History
        </Button>
      </div>

      {showHistory && (
        <div className="mb-3 flex gap-2 overflow-x-auto pb-2">
          {recentPrompts.map((item, index) => (
            <Badge
              key={index}
              variant="outline"
              className="cursor-pointer whitespace-nowrap text-foreground border-border"
              onClick={() => setPrompt(item)}
            >
              {item}
            </Badge>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Creativity</label>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Precision</label>
          <Slider defaultValue={[70]} max={100} step={1} />
        </div>
      </div>

      <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
        {promptSuggestions.map((suggestion, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="cursor-pointer whitespace-nowrap text-foreground"
            onClick={() => setPrompt(suggestion)}
          >
            {suggestion}
          </Badge>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-auto flex gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button type="button" size="icon" variant="outline" className="text-foreground">
                <Mic className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Voice input (coming soon)</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe what you want to model..."
          className="flex-1 bg-background text-foreground"
        />

        <Button type="submit" disabled={isProcessing || !prompt.trim()} className="bg-primary text-primary-foreground">
          {isProcessing ? (
            <>
              <div className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
              Processing...
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Generate
            </>
          )}
        </Button>
      </form>

      {isProcessing && confidence > 0 && (
        <Card className="mt-3 bg-card/50 border-border">
          <CardContent className="p-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground">AI confidence</span>
              <span className="text-sm font-medium text-foreground">{confidence}%</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full mt-1 overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                style={{ width: `${confidence}%` }}
              />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
