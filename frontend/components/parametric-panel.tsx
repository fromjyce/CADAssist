"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Lock, Unlock, Eye, Plus, Trash2 } from "lucide-react"

export default function ParametricPanel() {
  const [dimensions, setDimensions] = useState({
    width: "100",
    height: "50",
    depth: "25",
    radius: "10",
  })

  const [units, setUnits] = useState("mm")

  const handleDimensionChange = (dimension: string, value: string) => {
    setDimensions((prev) => ({
      ...prev,
      [dimension]: value,
    }))
  }

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-lg font-medium mb-4">Parametric Controls</h3>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label htmlFor="width">Width</Label>
            <div className="flex">
              <Input
                id="width"
                value={dimensions.width}
                onChange={(e) => handleDimensionChange("width", e.target.value)}
                className="rounded-r-none"
              />
              <Select value={units} onValueChange={setUnits}>
                <SelectTrigger className="w-20 rounded-l-none border-l-0">
                  <SelectValue placeholder="Unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mm">mm</SelectItem>
                  <SelectItem value="cm">cm</SelectItem>
                  <SelectItem value="in">in</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="height">Height</Label>
            <div className="flex">
              <Input
                id="height"
                value={dimensions.height}
                onChange={(e) => handleDimensionChange("height", e.target.value)}
                className="rounded-r-none"
              />
              <Select value={units} onValueChange={setUnits}>
                <SelectTrigger className="w-20 rounded-l-none border-l-0">
                  <SelectValue placeholder="Unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mm">mm</SelectItem>
                  <SelectItem value="cm">cm</SelectItem>
                  <SelectItem value="in">in</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="depth">Depth</Label>
            <div className="flex">
              <Input
                id="depth"
                value={dimensions.depth}
                onChange={(e) => handleDimensionChange("depth", e.target.value)}
                className="rounded-r-none"
              />
              <Select value={units} onValueChange={setUnits}>
                <SelectTrigger className="w-20 rounded-l-none border-l-0">
                  <SelectValue placeholder="Unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mm">mm</SelectItem>
                  <SelectItem value="cm">cm</SelectItem>
                  <SelectItem value="in">in</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="radius">Radius</Label>
            <div className="flex">
              <Input
                id="radius"
                value={dimensions.radius}
                onChange={(e) => handleDimensionChange("radius", e.target.value)}
                className="rounded-r-none"
              />
              <Select value={units} onValueChange={setUnits}>
                <SelectTrigger className="w-20 rounded-l-none border-l-0">
                  <SelectValue placeholder="Unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mm">mm</SelectItem>
                  <SelectItem value="cm">cm</SelectItem>
                  <SelectItem value="in">in</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <h4 className="text-sm font-medium mb-2">Feature Tree</h4>
          <Accordion type="multiple" defaultValue={["base", "features"]}>
            <AccordionItem value="base" className="border-slate-700">
              <AccordionTrigger className="py-2 hover:bg-slate-700/50 px-2 rounded-md">
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-2" />
                  <span>Base Object</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-4">
                <div className="space-y-1 py-1">
                  <div className="flex items-center justify-between py-1 px-2 hover:bg-slate-700/50 rounded-md">
                    <div className="flex items-center">
                      <Lock className="h-3 w-3 mr-2 text-slate-400" />
                      <span className="text-sm">Origin</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Eye className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-1 px-2 hover:bg-slate-700/50 rounded-md">
                    <div className="flex items-center">
                      <Unlock className="h-3 w-3 mr-2 text-slate-400" />
                      <span className="text-sm">Sketch</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Eye className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="features" className="border-slate-700">
              <AccordionTrigger className="py-2 hover:bg-slate-700/50 px-2 rounded-md">
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-2" />
                  <span>Features</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-4">
                <div className="space-y-1 py-1">
                  <div className="flex items-center justify-between py-1 px-2 hover:bg-slate-700/50 rounded-md">
                    <div className="flex items-center">
                      <Unlock className="h-3 w-3 mr-2 text-slate-400" />
                      <span className="text-sm">Extrusion</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Eye className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-1 px-2 hover:bg-slate-700/50 rounded-md">
                    <div className="flex items-center">
                      <Unlock className="h-3 w-3 mr-2 text-slate-400" />
                      <span className="text-sm">Fillet</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Eye className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>

                <Button variant="ghost" size="sm" className="mt-2 w-full justify-start">
                  <Plus className="h-3 w-3 mr-2" />
                  Add Feature
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="pt-2">
          <h4 className="text-sm font-medium mb-2">Constraints</h4>
          <div className="space-y-1 border rounded-md border-slate-700 p-2">
            <div className="flex items-center justify-between py-1 px-2 hover:bg-slate-700/50 rounded-md">
              <div className="flex items-center">
                <Lock className="h-3 w-3 mr-2 text-slate-400" />
                <span className="text-sm">Parallel</span>
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
            <div className="flex items-center justify-between py-1 px-2 hover:bg-slate-700/50 rounded-md">
              <div className="flex items-center">
                <Lock className="h-3 w-3 mr-2 text-slate-400" />
                <span className="text-sm">Perpendicular</span>
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
            <div className="flex items-center justify-between py-1 px-2 hover:bg-slate-700/50 rounded-md">
              <div className="flex items-center">
                <Lock className="h-3 w-3 mr-2 text-slate-400" />
                <span className="text-sm">Equal</span>
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>

            <Button variant="ghost" size="sm" className="mt-2 w-full justify-start">
              <Plus className="h-3 w-3 mr-2" />
              Add Constraint
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
